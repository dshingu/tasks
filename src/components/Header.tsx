import {
    StyleSheet,
    TextInput,
    View
} from 'react-native';
import { Octicons } from '@expo/vector-icons';

export default () => {
    return (
        <View style={styles.container}>
            <Octicons name="zap" size={24} color="white" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#16425b'
    }
})