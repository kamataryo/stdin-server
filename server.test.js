const server = require("./server");
const axios = require("axios");
const assert = require("assert");

server(
  "Hello!",
  {
    port: 3000,
    contentType: "text/plain",
    open: false
  },
  () => {
    axios
      .get("http://localhost:3000")
      .then(({ data, headers }) => {
        assert.equal(data, "Hello!");
        assert.equal(headers["content-type"], "text/plain");
      })
      .then(() => {
        process.stdout.write("test success!\n");
        process.exit(0);
      })
      .catch(err => {
        process.stderr.write(err.message + "\n");
        process.exit(1);
      });
  }
);
