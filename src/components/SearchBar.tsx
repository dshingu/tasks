import {
    StyleSheet,
    TextInput, 
    View
} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchBarContainer}>
                <Feather name="search" size={26} color="white" style={styles.searchIcon} />
                <TextInput placeholder="Search Tasks..." placeholderTextColor={'#fff'} style={styles.searchTextInput} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2f6690'
    },
    searchBarContainer: {
        width: 300,
        borderRadius: 6,
        flexDirection: 'row',
        backgroundColor: '#3a7ca5'
    },
    searchIcon: {
        padding: 10,
    },
    searchTextInput: {
        flex: 1
    }
})