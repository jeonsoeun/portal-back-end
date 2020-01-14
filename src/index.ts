const Koa = require('koa');

const PORT = 4000;

const app = new Koa();
app.use((ctx) => {
  ctx.body = 'Hello World!';
});

app.listen(PORT, () => {
  console.log(`server is listening to port ${PORT}`);
});
