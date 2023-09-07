import { Router } from "express";
import { getEmployees, createEmployees, updateEmployee, getEmployee, deleteEmployee } from '../controllers/employees.controller.js';

const router = Router();

// Define your routes here
router.get('/employees', getEmployees)
router.get('/employees/:id', getEmployee)
router.post('/employees', createEmployees)
router.put('/employees/:id', updateEmployee)
router.delete('/employees/:id', deleteEmployee)



export default router