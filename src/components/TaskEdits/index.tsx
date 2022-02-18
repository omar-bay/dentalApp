import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
import Redirect from '../Redirect'
import { Nav, Task } from '../../Types'
import { formatAMPM } from '../../screens/TaskScreen'

interface TaskEditsProps {
  navigation: Nav,
  task: Task
}

const TaskEdits = ({ navigation, task }: TaskEditsProps) => {
  return (
    <View style={styles.root}>
        {/* Label Text */}
        <Text style={styles.label_text}>GENERAL</Text>

        {/* Routes */}
        <View style={styles.press_container}>
            <Redirect navigation={navigation} style={{ color: 'black' }} text="Title" about={task.name}/>
            <Redirect navigation={navigation} style={{ color: 'black' }} text="Objective" about={task.description}/>
            <Redirect navigation={navigation} style={{ color: 'black' }} text="Status" about={task.stage.toString()}/>
            <Redirect navigation={navigation} style={{ color: 'black' }} text="Scheduled at" about={formatAMPM(task.date)}/>
        </View>

    </View>
  )
}

export default TaskEdits