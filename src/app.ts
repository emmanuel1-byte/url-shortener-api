import express from 'express'
import { Request, Response } from 'express'
import respond from './utils/respond'
import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import urlRouter from './routes/url.routes'

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const options = {
    origin: '*',
    methods: ['POST','GET'],
    allowheader: ['Content-Type', 'Authorization']
  }
app.use(cors(options))
app.use(cookieParser())
app.use(helmet())

app.use(cors())

app.use('/api/v1/links', urlRouter)

app.get('/', (req: Request, res: Response)=>{
    respond(res, 200, 'Express API is running...')
    
})

app.use(function(err: any, req: Request, res: Response){
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    res.status(err.status || 500)
    res.json(err)
})

app.get('*', (req: Request, res: Response)=>{
    respond(res, 400, 'Endpoint does not exist')
})

export default app