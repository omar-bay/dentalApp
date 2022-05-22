import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import Redirect from '../Redirect'
import { Nav, Task } from '../../Types'
import { formatAMPM } from '../../screens/TaskScreen'
import MyDatePicker from '../MyDatePicker'
import PickerWithModel from '../PickerWithModal'
import { useUpdateTaskMutation } from '../../../libs/generated/graphql'

interface TaskEditsProps {
  navigation: Nav,
  task: Task
}

const TaskEdits = ({ navigation, task }: TaskEditsProps) => {
  const [date, setDate] = useState(new Date(Math.floor(task.date)))
  const [openDate, setOpenDate] = useState(false)

  const [updateTask] = useUpdateTaskMutation()

  useEffect(() => {
    // task.date = date
    updateTask({
      variables: {
          input: {
              service_log_id: task.service_log_id,
              name: task.name,
              description: task.description,
              stage: task.stage,
              date: date,
              assignee_notes: task.assignee_notes
          },
          updateTaskId: task.id
      }
  })
  }, [date])

  return (
    <View style={styles.root}>

        <MyDatePicker date={date} setDate={setDate} open={openDate} setOpen={setOpenDate}/>

        {/* Label Text */}
        <Text style={styles.label_text}>GENERAL</Text>

        {/* Routes */}
        <View style={styles.press_container}>
            <Redirect
            navigation={navigation}
            text_style={{ color: 'black' }}
            text="Title"
            about={task.name}
            container_style={{ borderTopWidth: 0 }}
            />
            <Redirect
            navigation={navigation}
            text_style={{ color: 'black' }}
            text="Objective"
            about={task.description}
            />
            {/* <Redirect
            navigation={navigation}
            text_style={{ color: 'black' }}
            text="Status"
            about={task.stage.toString()}
            /> */}
            <PickerWithModel
            task={task}
            />
            <Redirect
            navigation={navigation}
            text_style={{ color: 'black' }}
            text="Scheduled at"
            about={formatAMPM(new Date(task.date))}
            container_style={{ borderBottomWidth: 0 }}
            onPress={()=>setOpenDate(!openDate)}
            />
        </View>

    </View>
  )
}

export default TaskEdits