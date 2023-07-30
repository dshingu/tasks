import { ActivityIndicator, View, Text, StyleSheet } from 'react-native'
import React from 'react'

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default LoadingScreen;