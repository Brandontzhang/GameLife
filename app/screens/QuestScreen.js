import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, Pressable } from 'react-native'
import Accordion from '../components/QuestAccordion/Accordion'
import { QuestList } from '../model/questList'
import { User } from '../model/user'

export default function QuestScreen() {

    // user this to sign in later?
    const user = new User()
    // get quest data
    const questList = new QuestList().getQuests()

    const renderItem = (({item}, index) => {
        return(
            <View style={styles.block}>
                <Text style={styles.name}>{item.name}</Text>
            </View>
        )
    })
    return (
        <View style={styles.appView}>
            <Accordion data={questList}/>
        </View>
    )
}

const styles = StyleSheet.create({
    appView: {
        paddingTop: 10,
        paddingBottom: 10
    },
    name: {
        fontSize: 16, 
        color: "white"
    }
})
