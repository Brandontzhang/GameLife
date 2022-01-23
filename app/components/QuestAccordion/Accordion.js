import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity, LayoutAnimation, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Accordion(props) {

    const data = []
    const [expanded, setExpanded] = useState([])

    // set all the expanded states to false for the components
    const initialExpandedState = []

    useEffect(() => {
        props.data.forEach(d => {
            initialExpandedState.push(false)
        })
        setExpanded(initialExpandedState)
    }, [])

    const toggleExpand = (index) => {
        let newArr = [...expanded]
        newArr[index] = !expanded[index]
        setExpanded(newArr)
    }

    const renderItem = (({item, index}) => {
        return(
            <View>
                <TouchableOpacity style={styles.row} onPress={() => toggleExpand(index)}>
                    <View style={styles.questHeader}>
                        <Text style={[styles.title, styles.font]}>{item.name}</Text>
                        <Icon name={expanded[index] ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'red'} />
                    </View>
                    {
                        expanded[index] &&
                        <View style={styles.child}>
                            <Text>Points: {item.points}</Text>
                            <Text>Details: {item.details}</Text>
                            <Text>Labels/Types: {item.type}</Text>
                            <Text>Tags: {item.tags.reduce((total, current) => total + ", " + current)}</Text>
                        </View>
                    }
                </TouchableOpacity>
            </View>
        )
    })

    return (
        <View>
            <FlatList
                data={props.data}
                renderItem={renderItem}
                // keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: "#639cd9",
    },
    row: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'center',
        paddingLeft: 25,
        paddingRight: 18,
        backgroundColor: '#5454c5',
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    questHeader: {
        flex:1, 
        flexDirection: 'row',
        justifyContent:'space-between',
        alignContent: 'center'
    },
    parentHr: {
        flex:1,
        height: 1,
        width: "100%"
    },
    child: {
        flex: 1,
        marginBottom: 10,
        color: "#639cd9"
    },
    text: {
        fontSize: 14,
        color: '#2f354b',
    }
})