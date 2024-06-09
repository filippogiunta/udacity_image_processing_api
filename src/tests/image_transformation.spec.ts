import { resize_image } from '../services/image_transformation';

describe('Test resizing a valid image', () => {
  it('should resize an image', async () => {
    const image = {
      name: 'sicily_1.jpg',
      width: 200,
      height: 200,
    };
    await expectAsync(resize_image(image)).toBeResolved();
  });
});

describe('Test resizing an image that does not exist', () => {
  it('should throw an error', async () => {
    const image = {
      name: 'invalid.jpg',
      width: 200,
      height: 200,
    };
    await expectAsync(resize_image(image)).toBeRejected();
  });
});
