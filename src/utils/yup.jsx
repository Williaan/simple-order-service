import * as yup from 'yup';
import { setLocale } from 'yup';
import { pt } from 'yup-locales';

setLocale(pt);


export const verfyRegister = yup.object().shape({
    name: yup.string().required('O campo nome é obrigatório!'),
    email: yup.string().email('E-mail inválido').required('O campo e-mail é obrigatório!'),
    password: yup.string().required('O campo senha é obrigatório!').min(6),
    confirmPassword: yup.string().required('O campo confirmar senha é obrigatório!').min(6),

}).required();


export const verfyLogin = yup.object().shape({
    email: yup.string().email('E-mail inválido').required('O campo e-mail é obrigatório!'),
    password: yup.string().required('O campo senha é obrigatório!').min(6),

}).required();

export const verifyClient = yup.object().shape({
    name: yup.string().required('O campo nome do cliente é obrigatório!'),
    cpf: yup.string().required('O campo CPF do cliente é obrigatório!'),
    email: yup.string().email('E-mail inválido').required('O campo e-mail do cliente é obrigatório!'),
    phone: yup.string().required('O campo telefone do cliente é obrigatório!'),
    cep: yup.string().required('O campo Cep é obrigatório!'),
    street: yup.string().required('O campo Rua é obrigatório!'),
    district: yup.string().required('O campo Bairro é obrigatório!'),
    city: yup.string().required('O campo Cidade é obrigatório!'),
    model: yup.string().required('O campo Modelo é obrigatório!'),
    plate: yup.string().required('O campo Placa é obrigatório!'),
    parts: yup.string().required('O campo Peças é obrigatório!'),
    service: yup.string().required('O campo Serviços é obrigatório!'),
}).required();

