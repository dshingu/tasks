import {
    StyleSheet,
    TextInput, 
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import React from 'react';
import { Feather, Ionicons } from '@expo/vector-icons';

export default () => {

    const input = React.useRef();

    const pressHandler = () => {
        input.current?.focus();
    }

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>

            </View>
            <View style={styles.searchBarContainer}>
                <TouchableOpacity onPress={pressHandler}>
                    <Feather name="search" size={26} color="#ddd"style={styles.searchIcon} />
                </TouchableOpacity>
                <TextInput placeholder="Search Tasks..." ref={input}  placeholderTextColor={'#686767'} style={styles.searchTextInput} />
            </View>
            <View style={styles.rightContainer}>
                {/* <TouchableOpacity>
                    <Ionicons name="filter-sharp" size={18} color="#686767" />
                </TouchableOpacity>
                <View style={styles.filterContainer}>
                    <Text>Completed</Text>
                    <Text>Uncomplete</Text> 
                </View>*/}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    leftContainer: {
        width: 60,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightContainer: {
        width: 60,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchBarContainer: {
        flex: 1,
        borderRadius: 6,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: '#fff'
    },
    searchIcon: {
        padding: 10,
    },
    searchTextInput: {
        flex: 1
    },
    filterContainer: {
        borderWidth: 1,
        borderColor: 'red',
        position: 'absolute',
        top: 30,
        zIndex: 999999
    }
})