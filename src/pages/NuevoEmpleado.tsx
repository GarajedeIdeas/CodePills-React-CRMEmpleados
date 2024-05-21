import { useForm } from "react-hook-form";
import EmpleadosService from "../services/EmpleadosService";
import { useNavigate } from "react-router-dom";

const NuevoEmpleado = () => {

    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data: any) => {
        await (new EmpleadosService()).create(data);
        alert('Empleado creado correctamente');
        navigate('/');
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="inputNombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="inputNombre" {...register('nombre')} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputApellidos" className="form-label">Apellidos</label>
                    <input type="text" className="form-control" id="inputApellidos" {...register('apellidos')} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail" {...register('email')} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputDepartamento" className="form-label">Departamento</label>
                    <input type="text" className="form-control" id="inputDepartamento" {...register('departamento')} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputSalario" className="form-label">Salario</label>
                    <input type="number" className="form-control" id="inputSalario" {...register('salario')} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputTelefono" className="form-label">Teléfono</label>
                    <input type="tel" className="form-control" id="inputTelefono" {...register('telefono')} />
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </div>
    );
}

export default NuevoEmpleado;