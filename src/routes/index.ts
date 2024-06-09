import express from 'express';
import { image } from './image/image';
import fs from 'fs';
import path from 'path';
import { PUBLIC_PATH } from '../utils';

const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response) => {
  const imagesFilenames: string[] = fs
    .readdirSync(path.resolve(`${PUBLIC_PATH}/full_size`))
    .map((filename) => filename);
  res.render('index', { filenames: imagesFilenames });
});

routes.use('/image', image);

export default routes;
