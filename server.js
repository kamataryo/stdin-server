const http = require("http");
const openBrowser = require("open");

module.exports = (data, options, cb) => {
  const { port, contentType, open } = options;

  const server = http.createServer((_0, response) => {
    response.setHeader("content-type", contentType);
    response.write(data);
    response.end();
  });

  module.exports.close = server.close;

  server.listen(port, () => {
    const url = `http://127.0.0.1:${port}`;
    cb && cb(`Serving 'Content-Type:${contentType}' at ${url}...`);
    open && openBrowser(url);
  });
};
