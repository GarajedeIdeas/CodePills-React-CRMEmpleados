import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light my-4'>
            <div className='container'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/'>Empleados</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/nuevo-empleado'>Nuevo Empleado</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;