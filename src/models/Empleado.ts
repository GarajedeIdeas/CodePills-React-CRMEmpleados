export default interface Empleado {
    _id: string;
    nombre: string;
    apellidos: string;
    email: string;
    departamento: string;
    salario: number;
    telefono: string;
    createdAt: Date;
    updatedAt: Date;
}