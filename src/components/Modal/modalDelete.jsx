import './styles.css';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { AiOutlineClose } from 'react-icons/ai';


export function ModalDelete({ handleCloseModal, client }) {

    async function handleDelete(id) {
        try {
            await api.delete(`/client/${id}`);

            handleCloseModal();

            setTimeout(
                function () {
                    window.location.reload();
                }, 3000);

            return toast.success('Excuído com Sucesso!', {
                position: toast.POSITION.TOP_CENTER,
                className: 'toast-message'
            });
        } catch (error) {

        }
    }

    return (
        <div className="container-modal">
            <div className='container_del'>
                <div className='content_del'>

                    <div className="content_icon">
                        <AiOutlineClose size={22} className='icon_close' onClick={() => handleCloseModal(false)} />
                    </div>
                    <h3>Deseja excluir?</h3>
                    <div className="modal_del">
                        <button
                            type="submit" className='btn_del btn_yes' onClick={() => handleDelete(client.id)}>Sim</button>
                        <button type="submit" className='btn_del btn_no' onClick={() => handleCloseModal(false)}>Não</button>
                    </div>
                </div>
            </div>
        </div>


    );
}
