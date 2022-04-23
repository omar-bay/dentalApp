import React, { Dispatch, SetStateAction } from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'
import { Service, Stage, Task } from '../../Types'
import IconPlus from 'react-native-vector-icons/FontAwesome5'

interface RTaskStackProp {
    stage: Stage
    setClosed: Dispatch<SetStateAction<boolean>>
    service: Service
    setNewTask: Dispatch<SetStateAction<{}>>
    newTask: Task
}

const RTaskStack = ({ stage, setClosed, service, setNewTask, newTask }: RTaskStackProp) => {
    const chooseColor = () => {
        switch (stage) {
            case Stage.New:
                return styles.new_root
            case Stage.Pending:
                return styles.pending_root
            default:
                return styles.done_root
        }
    }

    const handlePlus = () => {
        setNewTask({
            sid: service.id,
            stage: stage
        })
        setClosed(false)
    }

    return (
        <View style={chooseColor()}>
            {/* Stage Name */}
            <View style={styles.stage_container}><Text style={{ color: 'black' }}>{stage}</Text></View>

            {/* Plus & RTasks */}
            <View style={styles.tasks}>
                <Pressable
                style={styles.task}
                onPress={handlePlus}
                ><IconPlus name="plus" size={30} /></Pressable>
            </View>

        </View>
    )
}

export default RTaskStack
