import app from './app.js';
import config from './config.json';
async function startServer() {
  app.listen(config.port);
  console.log(`Сервер запущен по порту: ${config.port}`);
}
startServer();
