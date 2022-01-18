import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, Pressable } from 'react-native'
import Accordion from '../components/Accordion'
import { QuestList } from '../model/questList'
import { User } from '../model/user'


export default function QuestScreen() {

    // user this to sign in later?
    const user = new User()
    // get quest data
    const questList = new QuestList().getQuests()


    const renderItem = (({item}) => {
        return(
                <View style={styles.block}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Accordion title={"hello"} data={"child data"}/>
                </View>
        )
    })

    return (
        <SafeAreaView style={styles.header}>
            <Accordion title={"hello"} data={"child data"}/>
            {/* <FlatList
                data={questList}
                renderItem={renderItem}
                keyExtractor={item => item.name}
            /> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
        flex:1,
        backgroundColor: "black"
    }, 
    block: {
        backgroundColor: "blue", 
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    name: {
        fontSize: 16, 
        color: "white"
    }
})
