import React from 'react';

import Header from '../components/Header';
import {
    ActivityIndicator,
    Modal,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import NewTaskScreen from './NewTaskScreen';
import SearchBar from '../components/SearchBar';
import TaskList from '../components/task/TaskList';
import { TaskContext } from '../contexts/TaskContext';
import {AntDesign, Feather} from '@expo/vector-icons';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';


export default ({navigation}) => {

    let mt = {bottom: 25};
    const [showModal, setShowModal] = React.useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const {
        tasks, 
        saveTask, 
        fetching, 
        pill
    } = React.useContext(TaskContext);

    if (pill.msg !== '') mt.bottom = 65;


    const insets = useSafeAreaInsets();

    let content;

    if (fetching === true ) {
        content = (
            <ActivityIndicator size={'large'} />
        );
    }

    if (fetching === false && tasks.length > 0) {
        content = (<TaskList items={tasks} />);
    } 

    if (fetching === false && tasks.length === 0) {
        content = (<Text>No tasks available.</Text>);
    }

    return (
        <>
            <SafeAreaProvider>
                <SafeAreaView style={{height: '100%', paddingTop: insets.top}}>
                    {/* <Header /> */}
                    <SearchBar />
                    <View style={styles.filterContainer}>
                        <View style={styles.filter}>
                            <Text style={styles.filterText}>Due soon</Text>
                            <Text style={styles.filterText}>Completed</Text>
                        </View>
                    </View>
                    <View style={styles.noItemsContainer}>
                        {content}
                    </View>
                    <Modal visible={showModal} animationType={'slide'} presentationStyle={'fullScreen'}>
                        <View style={styles.modalHeader}>
                            <TouchableOpacity onPress={toggleModal} style={{padding: 10}}>
                                <AntDesign name="close" size={24} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {saveTask(); toggleModal();}} style={{padding: 10}}>
                            <Feather name="save" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                        <NewTaskScreen />
                    </Modal>  
                </SafeAreaView>
            </SafeAreaProvider>
            <TouchableOpacity style={[styles.addNewButton, mt]} onPress={toggleModal}>
                <Text style={styles.addNewButtonText}>Add New Task</Text>
            </TouchableOpacity>  
            { (pill.msg !== '') ? <View style={styles.pillContainer}>
                <Text style={styles.pillText}>{pill.msg}</Text>
                <TouchableOpacity onPress={pill.callback}>
                    <Text style={styles.undoText}>Undo</Text>
                </TouchableOpacity>
            </View>  : null }
        </>
    );
}

const styles = StyleSheet.create({
    noItemsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height:'100%',
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
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },
    pillContainer: {
        position: 'absolute',
        width: '80%',
        backgroundColor: '#232528',
        borderRadius: 5,
        bottom: 10,
        marginHorizontal: '10%',
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    pillText: {
        color: '#fff'
    },
    undoText: {
        color: '#009BF5'
    },
    filterContainer: {
        backgroundColor: '#fff'
    },
    filter: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 'auto'
    },
    filterText: {
        padding: 5,
        borderRadius: 5,
        borderWidth: 1
    }
});