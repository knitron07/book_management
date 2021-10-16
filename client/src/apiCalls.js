import axios from 'axios';

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: 'LOGIN_START' });
  try {
    const res = await axios.post('/users/login', userCredential);

    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
  } catch (error) {
    alert("Login credentials doesn't match");
    dispatch({ type: 'LOGIN_FAILURE', payload: error });
    console.log(error);
  }
};
