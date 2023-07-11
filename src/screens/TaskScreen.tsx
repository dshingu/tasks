import React from 'react';
import Header from '../components/Header';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import SearchBar from '../components/SearchBar';
import { TaskContext } from '../contexts/TaskContext';

export default ({navigation}) => {

    const {tasks} = React.useContext(TaskContext);
    console.log(navigation);

    return (
        <>
            <Header />
            <SearchBar />
            <ScrollView contentContainerStyle={tasks.length === 0 ? styles.noItemsContainer : {}}>
                <Text>No Tasks Available!</Text>
            </ScrollView>
            <TouchableOpacity style={styles.addNewButton} onPress={() => navigation.navigate('NewTask')}>
                <Text style={styles.addNewButtonText}>Add New Task</Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    noItemsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addNewButton: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 50,
        backgroundColor: '#3a7ca5',
        position: 'absolute',
        right: 25,
        bottom: 25
    },
    addNewButtonText: {
        color: '#fff',
        fontWeight: 'bold'
    }
});