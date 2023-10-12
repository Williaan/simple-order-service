import '../../styles/forms.css';
import { toast } from 'react-toastify';
import InputMask from 'react-input-mask';
import { Header } from "../../components/header";
import { Sidebar } from "../../components/sidebar";
import { LayoutMain } from "../../components/LayoutMain";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { verifyClient } from '../../utils/yup';
import { api } from '../../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function FormClient() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(verifyClient)
    });

    useEffect(() => {
        api.get(`/client/${id}`)
            .then((response) => {
                reset(response.data)
            })
    }, [id, reset])

    async function updateClient(data) {
        try {
            await api.put(`/client/${id}`, data);

            navigate('/clients');
            return toast.success("Atualizado com Sucesso!", {
                position: toast.POSITION.TOP_RIGHT,
                className: 'toast-message'
            });

        } catch (error) {
            // eslint-disable-next-line no-self-compare
            if (data.plate === data.plate) {
                return toast.warn("Já existe uma PLACA igual cadastrada  !", {
                    position: toast.POSITION.TOP_RIGHT,
                    className: 'toast-message'
                });
            }
        }
    }

    return (
        <>
            <Header />

            <LayoutMain>
                <div className="container_form_client">
                    <form className='form_client' onSubmit={handleSubmit(updateClient)}>

                        <div className='content_inputs'>

                            <div className="inputs_two">

                                <div className="input_area">
                                    <label htmlFor="name">Nome<span>*</span></label>
                                    <input
                                        type="text" className="inputs_client"
                                        name='name'
                                        placeholder='Nome do cliente'
                                        {...register('name')} />
                                    <p className='erros_inputs'>{errors.name?.message}</p>
                                </div>

                                <div className="input_area">
                                    <label htmlFor="email">E-mail<span>*</span></label>
                                    <input
                                        type="email"
                                        className="inputs_client"
                                        name='email'
                                        placeholder='E-mail do cliente'
                                        {...register('email')} />
                                    <p className='erros_inputs'>{errors.email?.message}</p>
                                </div>
                            </div>

                        </div>

                        <div className='content_inputs'>

                            <div className="inputs_two">

                                <div className="input_area">
                                    <label htmlFor="cpf">CPF<span>*</span></label>
                                    <InputMask
                                        mask={"999.999.999-99"}
                                        type="text"
                                        className="inputs_client input_cpf"
                                        name='cpf'
                                        placeholder='CPF do cliente'
                                        {...register('cpf')}
                                        disabled />
                                    <p className='erros_inputs'>{errors.cpf?.message}</p>
                                </div>

                                <div className="input_area">
                                    <label htmlFor="phone">Telefone<span>*</span></label>
                                    <InputMask
                                        mask={"(99)9.9999-9999"}
                                        type="tel"
                                        className="inputs_client"
                                        name='phone'
                                        placeholder='Número do telefone'
                                        {...register('phone')} />
                                    <p className='erros_inputs'>{errors.phone?.message}</p>
                                </div>
                            </div>

                        </div>

                        <div className='content_inputs'>
                            <div className="inputs_two">

                                <div className="input_area">
                                    <label htmlFor="cep">CEP<span>*</span></label>
                                    <InputMask
                                        mask={"99999-999"}
                                        type="text"
                                        className="inputs_client"
                                        name='cep'
                                        placeholder='CEP'
                                        {...register('cep')} />
                                    <p className='erros_inputs'>{errors.cep?.message}</p>
                                </div>

                                <div className="input_area">
                                    <label htmlFor="street">Rua<span>*</span></label>
                                    <input
                                        type="text"
                                        className="inputs_client"
                                        name='street'
                                        placeholder='Logradouro'
                                        {...register('street')} />
                                    <p className='erros_inputs'>{errors.street?.message}</p>
                                </div>

                            </div>

                        </div>

                        <div className='content_inputs'>

                            <div className="inputs_two">

                                <div className="input_area">
                                    <label htmlFor="district">Bairro<span>*</span></label>
                                    <input type="text" className="inputs_client" name='district' placeholder='Bairro' {...register('district')} />
                                    <p className='erros_inputs'>{errors.district?.message}</p>
                                </div>

                                <div className="input_area">
                                    <label htmlFor="city">Cidade<span>*</span></label>
                                    <input type="text" className="inputs_client" name='city' placeholder='Cidade' {...register('city')} />
                                    <p className='erros_inputs'>{errors.city?.message}</p>
                                </div>

                            </div>

                        </div>

                        <div className='content_inputs'>

                            <div className="inputs_two">

                                <div className="input_area">
                                    <label htmlFor="model">Veículo<span>*</span></label>
                                    <input
                                        type="text"
                                        className="inputs_client"
                                        name='model'
                                        placeholder='Veículo do cliente'
                                        {...register('model')} />
                                    <p className='erros_inputs'>{errors.model?.message}</p>
                                </div>

                                <div className="input_area">
                                    <label htmlFor="plate">Placa<span>*</span></label>
                                    <InputMask
                                        mask={"aaa-9999"}
                                        type="text"
                                        className="inputs_client"
                                        name='plate'
                                        placeholder='Placa do veículo'
                                        {...register('plate')} />
                                    <p className='erros_inputs'>{errors.plate?.message}</p>
                                </div>
                            </div>
                        </div>

                        <div className='content_inputs'>
                            <label htmlFor="cpf">Peças<span>*</span></label>
                            <input
                                type="text" className="inputs_client"
                                name='parts'
                                placeholder='Peças do carro'
                                {...register('parts')}
                            />
                            <p className='erros_inputs'>{errors.parts?.message}</p>
                        </div>

                        <div className='content_inputs'>
                            <label htmlFor="cpf">Serviços<span>*</span></label>
                            <textarea
                                rows="5" cols="33"
                                type="text" className="inputs_area"
                                name='service'
                                placeholder='Serviços do carro'
                                {...register('service')}
                            ></textarea>
                            <p className='erros_inputs'>{errors.service?.message}</p>
                        </div>
                        <button type="submit" className='btn_client'>Atualizar</button>
                    </form>
                </div>
            </LayoutMain>

            <Sidebar />
        </>
    );
}
