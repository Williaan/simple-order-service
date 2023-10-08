import '../styles/tables.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ModalDelete } from '../components/Modal/modalDelete';
import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { LayoutMain } from "../components/LayoutMain";
import { IoPeopleSharp } from 'react-icons/io5';
import { AiFillEye, AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { api } from '../services/api';

export default function Clientes() {
    const [clients, setClients] = useState([]);
    const [client, setClient] = useState('');
    const [deleteModal, setDeleteModal] = useState(false);


    async function handleview(id) {
        try {
            const response = await api.get(`/client/${id}`);

            setClient(response.data);
        } catch (error) {

        }
    }

    async function loadClients() {
        try {
            const response = await api.get('/clients');

            setClients([...response.data]);

        } catch (error) {
            return console.log(error.response.data);
        }
    }

    useEffect(() => {
        loadClients();
    }, []);



    return (
        <>
            <Header />

            <LayoutMain>

                <div className='container_title_main'>
                    <IoPeopleSharp size={45} color='#00cccc' />  <h1 className="title_main">Ordem de Serviço</h1>
                </div>

                <div className='container_btn_add'>
                    <Link className='btn_add' to='/forms/client'>Novo</Link>
                </div>

                <div className="container_table">
                    {deleteModal ? <ModalDelete client={client} handleCloseModal={setDeleteModal} /> : false}


                    <table border='0' className="table">

                        <thead className="content_thead"  >
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>Modelo</th>
                            <th>Placa</th>
                            <th>Ações</th>
                        </thead>

                        {clients.map((client) => (
                            <tbody className='content_tbody' key={client.id}>

                                <tr>
                                    <td>{client.id}</td>
                                    <td>{client.name}</td>
                                    <td>{client.phone}</td>
                                    <td>{client.model}</td>
                                    <td>{client.plate}</td>
                                    <td>
                                        <Link to={`/detalhes/${client.id}`}>
                                            <button onClick={() => handleview(client.id)}>
                                                <AiFillEye
                                                    size={20}
                                                    color="#0000FF"
                                                    title='visualizar'
                                                />
                                            </button>
                                        </Link>

                                        <Link to={`/forms/clientup/${client.id}`}>
                                            <button><AiFillEdit size={20} color="#32CD32" title='Editar' /></button>
                                        </Link>

                                        <Link to='#'>
                                            <button onClick={() => handleview(client.id)}>
                                                <AiFillDelete
                                                    size={20}
                                                    color="#FF0000"
                                                    title='Excluir'
                                                    onClick={() => setDeleteModal(true)}
                                                />
                                            </button>
                                        </Link>
                                    </td>
                                </tr>

                            </tbody>
                        ))}

                    </table>
                </div>
            </LayoutMain >

            <Sidebar />

        </>
    );
}
