import { Router } from "express";
import { getEmployees, createEmployees, updateEmployees, deleteEmployees } from "../controllers/employees.controller.js";
const router = Router()

router.get('/employees',getEmployees)

router.get('/employees/:id',getEmployees)

// router
router.post('/employees',createEmployees)
router.put('/employees',updateEmployees)
router.delete('/employees',deleteEmployees)


export default router