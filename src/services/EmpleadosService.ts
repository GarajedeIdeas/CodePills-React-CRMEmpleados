import axios from "axios"
import Empleado from "../models/Empleado";

export default class EmpleadosService {

    private baseUrl: string = 'https://crm-empleados.onrender.com/api/empleados'

    getAll = async () => {
        return await axios.get(this.baseUrl);
    }

    create = async (empleado: Empleado) => {
        return await axios.post(this.baseUrl, empleado);
    }

}