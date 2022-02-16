import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'
import { Task } from '../../Types'
import IconPlus from 'react-native-vector-icons/FontAwesome5'


const RTaskStack = () => {

    return (
        <View style={styles.root}>
            {/* Stage Name */}
            <View style={styles.stage_container}><Text style={{ color: 'black' }}>Done</Text></View>

            {/* Plus & RTasks */}
            <View style={styles.tasks}>
                <Pressable style={styles.task}><IconPlus name="plus" size={30} /></Pressable>
            </View>

        </View>
    )
}

export default RTaskStack
