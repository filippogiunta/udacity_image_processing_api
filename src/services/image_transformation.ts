import sharp from 'sharp';
import { get_image_path } from '../utils';
import { ImageType } from '../enums';

interface Image {
  name: string;
  width: number;
  height: number;
}

const resize_image = async (image: Image): Promise<Buffer> => {
  const image_path: string = get_image_path(image.name, ImageType.FULL_SIZE);
  return sharp(image_path)
    .resize({
      width: image.width,
      height: image.height,
      fit: sharp.fit.cover,
    })
    .toBuffer();
};

export { resize_image };
