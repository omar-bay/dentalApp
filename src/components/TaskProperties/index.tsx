import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
import Redirect from '../Redirect'
import { Nav } from '../../Types'
import SwitchCart from '../SwitchCart'

const TaskProperties = () => {
  return (
    <View style={styles.root}>
        {/* Label Text */}
        <Text style={styles.label_text}>PROPERTIES</Text>

        {/* Switches */}
        <View style={styles.press_container}>
            <SwitchCart text="Urgent" style={{ color: 'black' }}/>
            <SwitchCart text="Assignee Notes" style={{ color: 'black' }}/>
            <SwitchCart text="Toothly Recommends" style={{ color: 'black' }}/>
        </View>

    </View>
  )
}

export default TaskProperties