import express from 'express'
import { pool } from './db.js'
import employeesRoutes from './src/routes/employees.routes.js'
const app = express()


app.get('/ping' ,async (req,res) => {
    const [result] = await pool.query('SELECT "pong" AS result')
    res.json(result [0])
})

 app.use(employeesRoutes)



app.listen(3000)
console.log('servidor en puerto',3000)