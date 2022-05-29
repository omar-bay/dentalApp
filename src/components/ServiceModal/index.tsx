import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import MyDatePicker from '../MyDatePicker'
import { formatDate } from '../../screens/TaskScreen'
import { Stage, Task } from '../../Types'
import { useUpdateTaskMutation } from '../../../libs/generated/graphql'
import ServicePicker from '../ServicePicker'
import Task_List from '../../data/TaskList'

interface ServiceModalProps {
    setClosed: Dispatch<SetStateAction<boolean>>
    file_number: number
    assignee_id: number
    patient_id: number
}

const ServiceModal = ({ setClosed, file_number, assignee_id, patient_id }: ServiceModalProps) => {
    const [text, setText] = useState('');
    const [textInputValue, setTextInputValue] = useState("");
    const [idInputValue, setIdInputValue] = useState(1);

    const [updateTask] = useUpdateTaskMutation()

    const handleSubmit = () => {
        console.log({
            file_number,
            assignee_id,
            patient_id,
            service_id: idInputValue,
        })        
        setClosed(true)
        setText('')
    }

    const handleCancel = () => {
        setClosed(true)
        setText('')
    }

    const chooseColor = () => {
        return '#bfeff8'
    }

  return (
    <Pressable style={styles.root} onPress={handleCancel}>
      <Pressable style={styles.container}>
          <Text style={styles.title}>Service</Text>
          <View style={styles.item}>
              <ServicePicker
              setIdInputValue={setIdInputValue}
              setTextInputValue={setTextInputValue}
              textInputValue={textInputValue}
              />
          </View>
          <Pressable
          style={[styles.button, { backgroundColor: chooseColor() }]}
          onPress={handleSubmit}
          ><Text style={styles.buttonTitle}>ADD</Text></Pressable>
      </Pressable>
    </Pressable>
  )
}

export default ServiceModal

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        display: 'flex',
        position: 'absolute',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99
    }, 
    container: {
        width: '80%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        borderRadius: 20
    },
    title: {
        fontSize: 18
    },
    item: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {},
    input: {
        width: '100%',
        borderBottomWidth: 0.2
    },
    dateHolder: {
        width: '100%',
        borderBottomWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        padding: 10
    },
    button: {
        backgroundColor: '#bfeff8',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        height: 45,
        borderRadius: 20,
        marginTop: 8,
    },
    buttonTitle: {
        color: 'white',
        fontWeight: 'bold'
    }
})