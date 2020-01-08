const Koa = require('koa');

const app = new Koa();
app.use((ctx) => {
  ctx.body = 'Hello World!';
});

app.listen(4000, () => {
  console.log('server is listening to port 4000');
});
