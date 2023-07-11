import {createStackNavigator} from '@react-navigation/stack';
import TaskScreen from '../screens/TaskScreen';
import NewTaskScreen from '../screens/NewTaskScreen';
import TaskDetailScreen from '../screens/TaskDetailScreen';
import { AntDesign } from '@expo/vector-icons';

const TaskStack = createStackNavigator();

export default () => {
    return (
        <TaskStack.Navigator initialRouteName="Tasks">
            <TaskStack.Screen name="Tasks" component={TaskScreen}  options={{headerShown: false}}/>
            <TaskStack.Screen name="TaskDetail" component={TaskDetailScreen}  options={{headerShown: false}}/>
            <TaskStack.Screen name="NewTask" component={NewTaskScreen}  options={{title: '', headerShown: true, headerBackImage: () => <AntDesign name="close" size={24} color="black" />}}/>
        </TaskStack.Navigator>
    );
}
