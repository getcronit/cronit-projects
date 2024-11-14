import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => c.text('Hello, Hono!'));

app.get('/about', (c) => c.json({ message: 'This is the about page.' }));

app.post('/data', async (c) => {
  const body = await c.req.json();
  return c.json({ received: body });
});

export default app;