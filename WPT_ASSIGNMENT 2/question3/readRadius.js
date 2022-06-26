const http = require('http');
const url = require('url');

http.createServer((req, res) => {

    let q = url.parse(req.url, true).query;
    res.write("radius ="+q.radius+"Diameter ="+2*q.radius);
    console.log("listening on 800");

    res.end();

}
).listen(800);