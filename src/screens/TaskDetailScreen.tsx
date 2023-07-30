import React from 'react';
import {
    View
} from 'react-native';
import {TaskContext} from '../contexts/TaskContext';

export default ({route}) => {
    const {tasks} = React.useContext(TaskContext);
    const task_id = route.params.id;
    const task = tasks.find((task) => task._id === task_id)
    
    return (
        <View>

        </View>
    );
}