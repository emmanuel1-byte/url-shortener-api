import http from 'http'
import app from './app'
import dotenv from 'dotenv'
dotenv.config()
import { connect } from './config/database'

const server = http.createServer(app)
const port = process.env.PORT || 3000
app.set('port', port)

//Check if port is already in use an if it is exit the process.
function onError(error: NodeJS.ErrnoException) {
    if (error.code === 'EADDRINUSE') {
        console.clear()
        console.error(` port ${port} is already in use please switch to another port🙏😌`)
        process.exit(1)
    } else {
        console.error('An error occurrred: ', error)
        process.exit(1)
    }
}


//Event Emmitter that listens to error Event
server.on('error', onError)

//Database connection

//Run the server
server.listen(port, (() => {
    console.clear()
    console.log(`Express API is running on port ${port}`)
    connect(process.env.DATABASE_URL as string)
}))