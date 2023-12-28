import  moongose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

moongose.set('strictQuery', false)

export  function connect(dbUrl: string){
    moongose.connect(dbUrl)
    
    moongose.connection.on('connected', ()=>{
        console.log('Database connected successfully')
    })

    moongose.connection.on('error', (err)=>{
        console.error(`Database connection not successfull ${err}`)
    })
}
