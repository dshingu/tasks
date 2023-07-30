import React from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

const LoginScreen = () => {

  const {updateLoginData, loginHandler} = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Task Manager </Text>
        <TextInput placeholder={"Email"} style={styles.textInput} onChangeText={(value) => {updateLoginData('email', value)}} />
        <TextInput placeholder={"Password"} secureTextEntry style={styles.textInput} onChangeText={(value) => {updateLoginData('password', value)}} />
        <TouchableOpacity onPress={loginHandler}>
            <Text>Sign In</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingVertical: 10
    },
    textInput: {
        width: 300,
        padding: 10,
        borderWidth: 1,
        borderRadius: 6,
        margin: 6
    }
});

export default LoginScreen