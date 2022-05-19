const http = require('http')

let requestCount = 0

const server = http.createServer( (request, response) => {
    switch(request.url) {
        case '/':
            response.write('request count: ' + requestCount++)
            break
        case '/courses':
            response.write('Front + Back End Development')
            break
        default:
            response.write('Not Found')
            break
    }
    
    response.end()
} )

server.listen(3003)

