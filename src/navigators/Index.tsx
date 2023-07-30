import React from 'react';
import { AuthContext } from '../contexts/AuthContext';
import TabNavigator from './TabNavigator';
import AuthStackNavigator from './AuthStackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import LoadingScreen from '../screens/LoadingScreen';

export default () => {

    const {token} = React.useContext(AuthContext);
    //return <LoadingScreen />;
    return (
        <NavigationContainer>
            { (token !== null) ? <TabNavigator /> : <AuthStackNavigator /> }
        </NavigationContainer>
    );
}