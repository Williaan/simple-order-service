import '../styles/register.css';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { verfyRegister } from '../utils/yup';
import { LayoutForm } from '../components/Layout/layoutForm';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';


export default function Register() {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(verfyRegister)
    });


    async function addUser(data) {
        try {
            if (data.password !== data.confirmPassword) {
                return toast.error("As senhas não conferem, digite novamente!", {
                    position: toast.POSITION.TOP_RIGHT,
                    className: 'toast-message'
                });
            }

            await api.post('/register', data);

            navigate('/');


        } catch (error) {
            if (data.email === data.email) {
                return toast.warn("Já existe um e-mail cadastrado com esse nome !", {
                    position: toast.POSITION.TOP_RIGHT,
                    className: 'toast-message'
                });
            }
        }
    }


    return (
        <LayoutForm>
            <div className="content_left">
                <div className="content_left_in">
                    <h2 className="container_title">Cadastre-se</h2>
                    <form className="content_register_form" onSubmit={handleSubmit(addUser)}>

                        <div className="inputs">
                            <input type="text" name='name' placeholder='Nome' {...register('name')} />
                            <p className='erros_inputs'>{errors.name?.message}</p>
                        </div>

                        <div className="inputs">
                            <input type="email" name='email' placeholder='E-mail' {...register('email')} />
                            <p className='erros_inputs'>{errors.email?.message}</p>
                        </div>

                        <div className="inputs">
                            <input type="password" name='password' placeholder='Senha' {...register('password')} />
                            <p className='erros_inputs'>{errors.password?.message}</p>
                        </div>

                        <div className="inputs">
                            <input type="password" name='confirmPassword' placeholder='Confirmar senha' {...register('confirmPassword')} />
                            <p className='erros_inputs'>{errors.confirmPassword?.message}</p>
                        </div>

                        <button type='submit' className='btn_left'>Cadastrar</button>
                    </form>
                </div>
            </div>
            <div className="content_right">
                <div className="content_right_in">
                    <h1 className='content_right_title'>Bem-vindo ao registro</h1>
                    <p className='content_right_subtitle'>Já tem uma conta?</p>
                    <Link to='/' className='btn_right'>Entrar</Link>
                </div>
            </div>
        </LayoutForm>
    );
}
