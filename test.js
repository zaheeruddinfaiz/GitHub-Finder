const request = require("request");
let response, error, body_html;

async function test() {
  return new Promise((res, rej) => {
    for (let count = 0; count < 100; count++) {
      request.get("http://api.github.com/users", (err, res, body) => {
        response = res;
        error = err;
        body_html = body;
        console.log(response);
        console.log(error);
        console.log(body_html);
      });
    }
  });
}
test()