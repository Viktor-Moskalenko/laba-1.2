const http = require("http");
let moment = require("moment");

http
  .createServer(function(req, res) {
    if (req.url.indexOf("name=") + 1) {
      res.write(
        "Hello " +
          req.url.slice(req.url.indexOf("name=") + 5) +
          ", today is " +
          moment().format("dddd,MMM Do YY")
      );
    } else {
      res.write(
        "Hello,Stranger. Today is " + moment().format("dddd,MMM Do YY")
      );
    }
    res.end();
  })
  .listen(8080);
