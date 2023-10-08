import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import Dashboard from './pages/home';
import Clients from './pages/clients';
import FormClient from './components/forms/formClient';
import UpdateClient from './components/forms/updateClient';
import View from './pages/view';
import { getItem } from './utils/storage';


export default function Routers() {

    function ProtectedRouters({ redirectTo }) {
        const token = getItem('@token');
        return token ? <Outlet /> : <Navigate to={redirectTo} />
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/register' element={<Register />} />
                <Route path='/' element={<Login />} />

                <Route element={<ProtectedRouters redirectTo='/' />}>

                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/clients' element={<Clients />} />
                    <Route path='/forms/client' element={<FormClient />} />
                    <Route path='/forms/clientup/:id' element={< UpdateClient />} />
                    <Route path='/detalhes/:id' element={<View />} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
}
