import { pool} from '../db.js'


export const getEmployees =  async(req,res) =>{
    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
    console.log(rows)
    res.json(rows)
}
 
export const getEmployee = (req,res) => {
    res.send('Obteniendo Empleados')
}

export const createEmployees = async (req,res) => {
    const {name, salary} = req.body
    const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?,?)', [name, salary ])
    res.send({ 
        id:rows.insertId,
        name,
        salary

    })
}
export const updateEmployees = (req,res) => res.send('Actualizando Empleados')
export const deleteEmployees = (req,res) => res.send('Eliminando Empleados')
