import { Router } from "express";
import { getEmployees, createEmployees, updateEmployees, deleteEmployees, getEmployee } from '../controllers/employees.controller.js'

const router = Router();

// Define your routes here
router.get('/employees', getEmployees)
router.get('/employees/:id', getEmployee)
router.post('/employees', createEmployees)
router.put('/employees/:id', updateEmployees)
router.delete('/employees/:id', deleteEmployees)



export default router