import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
  response.json({ message: 'Hello World!' });
});

app.post('/courses', (request, response) => {
  const { name } = request.body;
  response.status(201).json({ name });
});

app.listen(3333, () => console.log('Starting application...'));
