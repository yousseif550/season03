const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const PORT = process.argv[2];

if(!PORT){
    PORT == 4242;
}

const server = http.createServer((req, res) => {
    
    res.statusCode = 200;
    const file = fs.readFileSync('./index.html','utf-8');
    console.log(file);
    res.write(file);
    res.end()

})

server.listen(PORT, hostname, () => {
    console.log(`Server running at http://$(hostname):$(PORT)`)
})