import { Router } from "express";
import { getEmployees,createEmployees,updateEmployees,deleteEmpployees,getEmployee } from '../controllers/employees.controller.js'

const router = Router()


router.get('/ping', ping)

export default  router