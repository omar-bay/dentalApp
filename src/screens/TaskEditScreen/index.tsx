import { View, Text, Pressable, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
import { Nav } from '../../Types'
import IconBack from 'react-native-vector-icons/AntDesign'
import TaskEditHeader from '../../components/TaskEditHeader'
import TaskEdits from '../../components/TaskEdits'
import SwitchCart from '../../components/SwitchCart'
import TaskProperties from '../../components/TaskProperties'

const TaskEditScreen = ({ navigation, route }: Nav) => {
    const { task } = route.params

    const handleDelete = () => {}

    return (
        <View style={styles.root}>
            {/* Header */}
            <TaskEditHeader navigation={navigation} />

            <ScrollView style={styles.body}>
                {/* Label & Redirects */}
                <TaskEdits navigation={navigation} task={task}/>
                
                {/* Label & Switches */}
                <TaskProperties/>
                
            </ScrollView>

        </View>
    )
}

export default TaskEditScreen