import './styles.css';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillDashboard, AiOutlineLogout } from 'react-icons/ai';
import { IoPeopleSharp } from 'react-icons/io5';
import Logo from '../../images/logo.jpg';
import { clearItem } from '../../utils/storage';


export function Sidebar() {
    const navigate = useNavigate();

    function handleLogout() {
        clearItem();
        navigate('/');
    }

    return (
        <div className="container_sidebar">

            <ul className="content_sidebar">
                <div className="content_logo">
                    <img src={Logo} alt="System logo" className='logo' />
                </div>

                <div className='menu'>
                    <Link to='/dashboard'>
                        <AiFillDashboard size={24} />
                        <span>Dashboard</span>
                    </Link>

                    <Link to='/clients'>
                        <IoPeopleSharp size={24} />
                        <span>Clientes</span>
                    </Link>

                </div>
                <Link to='/' className='logout' onClick={() => handleLogout()}>
                    <AiOutlineLogout size={24} /> <span>Sair</span>
                </Link>

            </ul>
        </div>
    );
}
