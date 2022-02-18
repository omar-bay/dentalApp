import { View, Text, Pressable, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
import { Nav } from '../../Types'
import IconBack from 'react-native-vector-icons/AntDesign'

interface TaskEditHeaderProps {
    navigation: Nav
}

const TaskEditHeader = ({ navigation }: TaskEditHeaderProps) => {
    const handleDelete = () => {}

    return (
        <View style={[styles.header, { backgroundColor: '#F9C985' }]}>
            <Pressable onPress={() => navigation.goBack()} style={styles.back}><IconBack name="left" size={25} color="blue"/><Text style={{ fontSize: 18, color: 'blue' }}>Back</Text></Pressable>
            <Text style={styles.header_title_text}>Edit Task</Text>
            <Pressable onPress={() => handleDelete}><Text style={{ fontSize: 18, color: 'blue' }}>Delete</Text></Pressable>
        </View>
    )
}

export default TaskEditHeader