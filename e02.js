const http = require ('http')

const PORT = process.argv[2]

if(!PORT){
    console.log('usage: node 01.js <PORT>')
    process.exit(0)
}

const server = http.createServer((req, res) => {
    res.setHeader("content-type", "text/html")

    if (req.method == 'GET'){ 
        res.write('<h1> Hello World !!! </h1>')
    } else if (req.method === 'POST') {
        res.write('Heinsenberg ')
    }
   res.end()
})

server.listen(PORT, () => {
    console.log(`server started at PORT 4242`)
})