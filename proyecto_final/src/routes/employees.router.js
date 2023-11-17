import { Router } from "express";
import { getEmployees,createEmployees,deleteEmployees,updateEmployess,getEmployee } from "../controllers/employees.controller.js";

//Crear un grupo de Rutas
const router = Router()

router.get('/empleados', getEmployees);
router.get('/empleados/:id', getEmployee);
router.post('/empleados',createEmployees);
router.delete('/empleados/:id',deleteEmployees);
router.patch('/empleados/:id',updateEmployess);


export default router;