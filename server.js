const http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(
        `<h1>Hello NodeJS!</h1>
        <h3>Jamison Cleveland, p33b442</h3>
        <p>Running on port 3060</p>`);
    response.end();
}).listen(3060);