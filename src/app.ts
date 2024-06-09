import index from './routes/index';
import path from 'path';

import express from 'express';

const app = express();
const port = 8090;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(index);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;
