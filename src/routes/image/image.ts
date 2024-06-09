import { Router, Request, Response } from 'express';
import fs from 'fs';
import { ImageType } from '../../enums';
import { get_image_path } from '../../utils';
import { resize_image } from '../../services/image_transformation';
import { promises as fsPromises } from 'fs';

const image = Router();

image.get('/', async (req: Request, res: Response) => {
  try {
    const image_name: string = req.query.image_name as string;
    const width: number = parseInt(req.query.width as string);
    const height: number = parseInt(req.query.height as string);

    if (!image_name || !width || !height) {
      res.status(400).send('Missing required parameters.');
      return;
    }

    if (!fs.existsSync(get_image_path(image_name, ImageType.FULL_SIZE))) {
      res
        .status(404)
        .render('error', { status_code: 404, error: 'Image not found.' });
      return;
    }

    const image_name_output =
      image_name.split('.')[0] + `_${width}x${height}.jpg`;
    const image_path_output = get_image_path(
      image_name_output,
      ImageType.RESIZED,
    );

    const resized_image = await resize_image({
      name: image_name,
      width: width,
      height: height,
    });
    await fsPromises.writeFile(image_path_output, resized_image);

    res.sendFile(image_path_output);
  } catch (error) {
    res.status(500).render('error', { status_code: 500, error: error });
  }
});

export { image };
