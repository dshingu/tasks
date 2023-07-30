import {
    StyleSheet,
    TextInput,
    Text,
    View,
    Pressable,
    useColorScheme
} from 'react-native';
import React from 'react';
import { TaskContext } from '../contexts/TaskContext';
import DateTimePickerModal from "react-native-modal-datetime-picker";


export default () => {

    const [show, setShow] = React.useState(false);
    const input = React.createRef();
    const theme = useColorScheme();
    const {task, setData, toggleDateTimePicker} = React.useContext(TaskContext);

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.textLabel}>Task Title</Text>
                <TextInput style={styles.textInput} defaultValue={task.title} onChangeText={(value) => {setData('title', value)}} />
            </View>
            <View style={styles.textContainer}>
                    <Text style={styles.textLabel}>Due Date</Text>
                    <TextInput style={styles.textInput} defaultValue={task.due_at.toLocaleDateString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'})} onPressIn={toggleDateTimePicker} ref={input} />
            </View>
            {show && (
                <View>
                    <DateTimePickerModal
                        isVisible={show}
                        isDarkModeEnabled={theme === 'dark' ? true : false}
                        mode="date"
                        onConfirm={(value) => {setData('due_at', value); toggleDateTimePicker(props); }}
                        onCancel={toggleDateTimePicker}
                    />
                </View>
            )} 
            <View style={styles.textContainer}>
                <Text style={styles.textLabel}>Task Description</Text>
                <TextInput defaultValue={task.description} style={{...styles.textInput, height:400, borderBottomWidth: 0}} multiline onChangeText={(value) => {setData('description', value)}} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        bacgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        marginHorizontal: 10,
        width: '95%',
        borderBottomWidth: 1,
        borderColor: '#ccc'
    },
    textLabel: {
        fontSize: 11,
        paddingVertical: 5,
        color: '#686767'
    },
    datepickerContainer: {
        color: '#007ff9'
    },
    textInput: {
        paddingVertical: 5,
        paddingHorizontal: 5,
        fontSize: 16
    }
});
