import '../styles/view.css';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from '../services/api';
import { AiOutlineArrowLeft, AiFillPrinter } from 'react-icons/ai';
import ServicePng from '../images/tools.png';


export default function View() {
    const { id } = useParams();
    const [user, setUser] = useState('');

    function handlePrint(event) {
        event.preventDefault();
        window.print();
    }


    useEffect(() => {
        api.get(`/client/${id}`)
            .then(res => {
                setUser(res.data)
            });
    }, [id]);


    return (
        <div className='container_view'>

            <div>

                <div className="content_title_logo">
                    <img src={ServicePng} alt="logomarca" className='brand' />
                    <h1 className='title_ordem'>Ordem de Serviço</h1>
                </div>

                <div className="container_details_client">

                    <div className="content_name">
                        <p className='titles'>Cliente: <span>{user.name}</span></p>
                    </div>

                    <div className='content_personal'>
                        <p className='titles'>CPF: <span>{user.cpf}</span></p>
                        <p className='titles'>E-mail: <span>{user.email}</span></p>
                        <p className='titles'>Telefone: <span>{user.phone}</span></p>
                    </div>

                    <div className='content_address'>
                        <p className='titles'>CEP: <span>{user.cep}</span></p>
                        <p className='titles'>Rua: <span>{user.street}</span></p>
                        <p className='titles'>Bairro: <span>{user.district}</span></p>
                        <p className='titles'>Cidade: <span>{user.city}</span></p>
                    </div>

                    <div className='content_vehicle'>
                        <p className='titles'>Veiculo/Modelo: <span>{user.model}</span></p>
                        <p className='titles'>Placa: <span>{user.plate}</span></p>
                    </div>

                    <div className='content_service'>
                        <p className='titles parts'>Peças utilizadas: <span>{user.parts}</span></p>
                        <p className='titles'>Serviços: <span>{user.service}</span></p>
                    </div>
                </div>


                <div className="content_signature">
                    <p className='signature'>Ass. Cliente:</p>
                    <p className='signature'>Ass. Oficina:</p>
                </div>

            </div>
            <div className='content_btns_view'>
                <Link to='/clients'>
                    <button className='btn_back'><AiOutlineArrowLeft size={25} /></button>
                </Link>

                <button className='btn_print' onClick={handlePrint}><AiFillPrinter size={25} /></button>

            </div>
        </div>
    );
}
