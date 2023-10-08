import '../styles/home.css';
import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { LayoutMain } from '../components/LayoutMain';
import { AiFillDashboard, AiOutlineLink } from 'react-icons/ai';


function Dashboard() {
    return (
        <>
            <Header />

            <LayoutMain>
                <div className='container_title_main'>
                    <AiFillDashboard size={45} color='#00cccc' /><h1 className='title_main'>Dashboard</h1>

                </div>

                <div className="container_cards">
                    <div className="content_cards">
                        <h1>Página em desenvolvimento.. <AiOutlineLink size={50} color='#cc1f00' /></h1>
                    </div>
                </div>
            </LayoutMain>


            <Sidebar />
        </>
    );
}

export default Dashboard;
