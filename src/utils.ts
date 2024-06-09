import path from 'path';
import { ImageType } from './enums';

const PUBLIC_PATH = 'public/images';

const get_image_path = (image_name: string, image_type: ImageType): string => {
  return path.resolve(`${PUBLIC_PATH}/${image_type}/${image_name}`);
};

export { get_image_path, PUBLIC_PATH };
