const http = require('http')
const app = require('./index')

const server = http.createServer(app)


const PORT = process.env.PORT || 3001


app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})