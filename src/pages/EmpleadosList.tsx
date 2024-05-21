import { useEffect, useState } from "react"
import EmpleadosService from "../services/EmpleadosService";

const EmpleadosList = () => {

    const [arrEmpleados, setArrEmpleados] = useState([]);

    const fetchData = async () => {
        const response = await (new EmpleadosService()).getAll();
        console.log(response.data);
        setArrEmpleados(response.data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='empleados-list row'>
            {arrEmpleados.map((empleado: any) => (
                <div key={empleado._id} className="col-12 col-sm-6 col-md-4">
                    <div className='m-2 card my-2'>
                        <div className='card-body'>
                            <h5 className='card-title'>{empleado.nombre} {empleado.apellidos}</h5>
                            <h6 className='card-subtitle mb-2 text-muted'>{empleado.email}</h6>
                            <p className='card-text'>{empleado.departamento}</p>
                            <p className='card-text'>{empleado.telefono}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default EmpleadosList