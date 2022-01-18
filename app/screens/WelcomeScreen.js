import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

export default function WelcomeScreen() {
    return (
        <SafeAreaView style={styles.header}>
            <View style={styles.container}>
                <Text>Welcome!</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
        flex:1
    }, 
    container:{
        flex:1, 
        backgroundColor: "black"
    }
})