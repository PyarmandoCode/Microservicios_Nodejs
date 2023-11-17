import { Router } from "express";
import { getEmployees,createEmployees,deleteEmployees,updateEmployess } from "../controllers/employees.controller.js";

//Crear un grupo de Rutas
const router = Router()

router.get('/empleados', getEmployees);
router.post('/empleados',createEmployees);
router.delete('/empleados/:id',deleteEmployees);
router.patch('/empleados/:id',updateEmployess);


export default router;