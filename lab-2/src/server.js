const http = require('http');
const static = require('node-static');
const file = new static.Server('.', {
    cache: 0
});


function accept(req, res) {

    if (req.url == '/users.json') {
        file.serve(req, res);
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "*");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
    } else {
        file.serve(req, res);
    }

}


// ------ запустить сервер -------

if (!module.parent) {
    http.createServer(accept).listen(8080);
} else {
    exports.accept = accept;
}
console.log('Server running on port 8080');