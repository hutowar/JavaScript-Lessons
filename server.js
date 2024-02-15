const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Установка заголовков HTTP-ответа
  res.writeHead(200, {'Content-Type': 'text/html'});

  // Чтение файла HTML и его отправка клиенту
  fs.readFile('index.html', (err, data) => {
    if (err) throw err;
    res.end(data);
  });
});

// Запуск сервера на порту 3000
server.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});