import './styles.css';
import { FaBars } from 'react-icons/fa';
import { getItem } from '../../utils/storage';


export function Header() {
    const username = getItem('@username');

    return (
        <header>
            <div className='container_header'>
                <div className="left_area">
                    <h2 className='title'><FaBars size={25} color='#FFF' /></h2>

                </div>

                <div className="right_area">
                    <p>Usuário: <span>{username}</span></p>
                </div>
            </div>
        </header>

    );
}
