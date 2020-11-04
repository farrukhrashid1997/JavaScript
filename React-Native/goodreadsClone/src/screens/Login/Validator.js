import * as Yup from 'yup';

const Validator = () =>
  Yup.object().shape({
    email: Yup.string()
      .required()
      .email('Enter a valid email'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password is too short - should be 8 chars minimum')
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
        'Invalid password',
      ),
  });

export default Validator;
