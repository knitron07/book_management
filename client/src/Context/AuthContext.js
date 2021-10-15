import { createContext, useEffect, useReducer } from 'react';
import AuthReducer from './AuthReducer';
//JSON.parse(localStorage.getItem('user'))
const INITIAL_STATE = {
  user:
    {
      _id: '616961d8b92fd491f3f0e573',
      username: 'knitron07',
      firstname: 'samardeep',
      lastname: 'singh',
      email: 'samar@gmail.com',
      isAdmin: true,
    } || null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};