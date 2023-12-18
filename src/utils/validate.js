export const checkValidData = (email, password) => {
    const isEmailValid = /^([0-9a-zA-Z].*?@([0-9a-zA-Z].*\.\w{2,4}))$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isEmailValid) return 'Email Id is not valid';
    if (!isPasswordValid) return 'Password is not valid';

    return null;
};