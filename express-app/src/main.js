import express from 'express';

async function bootstrap() {
  const app = express();
  app.get('/', (req, res) => {
    res.send('Hello from Express.js');
  });
  await app.listen(3031);
  console.log('Server running on port 3031');
}

bootstrap();
