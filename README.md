# Image Processing API

This is an API that allows users to get images in different sizes. The API resizes images on the fly based on the provided parameters.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm

### Installing

1. Clone the repository:
`git clone https://github.com/filippogiunta/udacity_image_processing_api.git`
2. Navigate into the project directory:
`cd image-processing-api`
3. Install the dependencies:
`npm install`
4. Start the server:
`npm start`

Now, the server should be running at `http://localhost:8090`.

## Usage

To get an image, make a GET request to the `/image` route with the following query parameters:

- `image_name`: The name of the image.
- `width`: The desired width of the image.
- `height`: The desired height of the image.

Example:

http://localhost:8090/?image_name=sicily_1.jpg&width=200&height=200

## Running the Tests

To run the tests, use the following command:
`npm test`