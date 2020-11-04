class UserController {
  constructor() {}

  login = async (email, password) =>
    new Promise((resolve, reject) => {
      if (email === 'farrukh' && password === '0000') {
        setTimeout(() => resolve({name: 'Farrukh'}), 1000);
      } else {
        setTimeout(() => reject(new Error('Invalid Email/password')), 1000);
      }
    });
}

logout = () => null;

export default new UserController();
