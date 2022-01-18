import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'

export default function block(props) {
    return (
        <Pressable onPress={() => {console.log("Pressed")}}>
            <View style={styles.block}>
                <Text style={styles.name}>{props.name}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    block: {
        
    },
    name: {

    }
})