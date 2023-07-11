import {NavigationContainer} from '@react-navigation/native';
import TaskStackNavigator from './TaskStackNavigator';

export default () => {
    return (
        <NavigationContainer>
            <TaskStackNavigator />
        </NavigationContainer>
    );
}