import '../styles/login.css'
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LayoutForm } from '../components/Layout/layoutForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { verfyLogin } from '../utils/yup';
import { api } from '../services/api';
import { setItem, getItem } from '../utils/storage';


export default function Login() {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(verfyLogin)
    });

    useEffect(() => {

        const token = getItem('@token');

        if (token) {
            navigate('/clients');
        }

    }, [navigate]);




    async function addLogin(data) {
        try {
            const response = await api.post('/login', data);
            const { user, token } = response.data;

            setItem('@username', user.email);
            setItem('@token', token);

            navigate('/clients');


        } catch (error) {
            if (!data.email || !data.senha) {
                return toast.error("E-mail ou senha incorretos!", {
                    position: toast.POSITION.TOP_RIGHT,
                    className: 'toast-message'
                });
            }
        }
    }


    return (
        <LayoutForm>
            <div className="content_left">
                <div className="content_left_in_login">
                    <h2 className="container_title">Entrar</h2>
                    <form className="content_login_form" onSubmit={handleSubmit(addLogin)}>

                        <div className="inputs_login">
                            <input type="email" name='email' placeholder='E-mail' {...register('email')} />
                            <p className='erros_inputs'>{errors.email?.message}</p>
                        </div>

                        <div className="inputs_login">
                            <input type="password" name='password' placeholder='Senha' {...register('password')} />
                            <p className='erros_inputs'>{errors.password?.message}</p>
                        </div>

                        <button type='submit' className='btn_left_login'>Entrar</button>
                    </form>
                </div>
            </div>
            <div className="content_right">
                <div className="content_right_in">
                    <h1 className='content_right_title'>Bem-vindo ao login</h1>
                    <p className='content_right_subtitle'>Não tem uma conta?</p>
                    <Link to='/register' className='btn_right'>Cadastre-se</Link>
                </div>
            </div>
        </LayoutForm>
    );
}
