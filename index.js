// smol exercise 
// console.log("Hello World, I am in Node");

// smol exercise 
// const http = require('http');

// const hostname = '127.0.0.1'; // aka localhost
// const port = 3000;

// const server = http.createServer(function(request, response) {
//     response.statusCode = 200;
//     response.setHeader('Content-Type', 'text/plain');
//     response.end('Hello World! I am a server! w00t!');
// });

// server.listen(port, hostname, function() {
//     console.log(`Server running at http://${hostname}:${port}`);
// });

const dns = require('dns');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("Domain Name: ", function(url) {
    readline.close();
    dns.lookup(url, function(error, address) {
        if (error) {
            console.log(error.message);
            return;
        }
        console.log('IP Address: ', address);
    })
});