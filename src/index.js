import express from 'express'
import { pool } from './db.js'
import employeesRoutes from './routes/employees.routes.js'
import indexRouter from './routes/employees.routes.js'


const app = express()

app.use(express.json())


app.use(indexRouter)
app.use('/api', employeesRoutes)

app.listen(3000)
console.log('servidor en puerto',3000)