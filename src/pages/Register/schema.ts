import * as Yup from 'yup';

const signInSchema = Yup.object().shape({
  name: Yup
    .string()
    .required('O nome é obrigatório'),
  email: Yup
    .string()
    .email()
    .required('O email é obrigatório'),
  password: Yup
    .string()
    .required('A senha é obrigatória')
    .min(5),
});

export default signInSchema;
