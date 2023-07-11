import {
    StyleSheet,
    TextInput,
    Text,
    View
} from 'react-native';
import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

export default () => {

    const showDateTimePicker = (props) => {
    }

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.textLabel}>Task Title</Text>
                <TextInput style={styles.textInput} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textLabel}>Due Date</Text>
                <TextInput style={styles.textInput} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textLabel}>Task Description</Text>
                <TextInput style={styles.textInput} onFocus={showDateTimePicker} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        marginHorizontal: 10,
        width: '95%',
        borderBottomWidth: 1
    },
    textLabel: {
        fontSize: 11,
        paddingVertical: 5,
        color: '#aaa'
    },
    textInput: {

    }
});
