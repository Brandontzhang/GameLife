import React, {useState} from 'react';
import { View, TouchableOpacity, Text, Stylesheet, LayoutAnimation, Platform, UIManager, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Accordion(props) {
    const [data, setData] = useState([])
    const [expanded, setExpanded] = useState(false)

    toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded)
    }

    return (
        <View>
            <TouchableOpacity style={styles.row} onPress={() => {toggleExpand()}}>
                <Text style={[styles.title, styles.font]}>{props.title}</Text>
                <Icon name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'red'} />
            </TouchableOpacity>
            <View style={styles.parentHr}>
                {
                    expanded &&
                    <View style={styles.child}>
                        <Text>{data}</Text>
                    </View>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: "darkgrey"
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        height: 56,
        paddingLeft: 25,
        paddingRight: 18,
        backgroundColor: 'gray'
    },
    parentHr: {
        height: 1,
        color: 'white',
        width: "100%"
    },
    child: {
        backgroundColor: "lightgray",
        padding: 16
    }
})