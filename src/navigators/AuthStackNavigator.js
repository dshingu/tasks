import LoginScreen from '../screens/LoginScreen';
import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

export default () => {
    return (
        <AuthStack.Navigator initialRouteName="Login">
            <AuthStack.Screen name="Login" component={LoginScreen}  options={{headerShown: false}}/>
        </AuthStack.Navigator>
    );
}