import React from 'react';
import TaskApi from '../api/TaskApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = React.createContext({});

export const tryLocalSignIn = async () => {
    try {
        const t = await AsyncStorage.getItem('TaskUser');
    } catch (Error) {

    }
}

export const AuthProvider = ({children}) => {

    
    const [token, setToken] = React.useState(null);
    const [loginData, setLoginData]= React.useState({
        email: '',
        password: '',
        errorMessage: ''
    });

    React.useEffect(() => {
        (async() => {
            try {
                const _t = await AsyncStorage.getItem('TaskUser');
                setToken(_t);
            } catch (e) {
                console.log(e);
                setToken(null);
            }
        })();
    }, []);

    const updateLoginData = (property: String,  value: String) => {

        switch (property) {
            case 'email': 
                setLoginData((prevState: loginData) => {
                    return {...prevState, email: value};
                });
            break;
            case 'password': 
                setLoginData((prevState: loginData) => {
                    return {...prevState, password: value};
                });
            break;
            case 'errorMessage': 
                setLoginData((prevState: loginData) => {
                    return {...prevState, errorMessage: value};
                });
            break;
            default: 
            break;
        }

    };

    const loginHandler = async () => {
        try {
            const response = await TaskApi.post('/auth/login', {
                email: loginData.email,
                password: loginData.password
            });
            AsyncStorage.setItem('TaskUser', response.data.token);
            setToken(response.data.token);
        } catch (error) {
            console.log(error.response.data);
        }
    };

    const logoutHandler = async () => {

    };


    return (
        <AuthContext.Provider value={{token, loginHandler, logoutHandler, updateLoginData}}>
            {children}
        </AuthContext.Provider>
    )
}