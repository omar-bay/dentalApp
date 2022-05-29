import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { useAddServiceMutation, useUpdateTaskMutation } from '../../../libs/generated/graphql'
import ServicePicker from '../ServicePicker'

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

    const [addServiceMutation] = useAddServiceMutation()

    const handleSubmit = () => {
        addServiceMutation({
            variables: {
                input: {
                    service_id: idInputValue,
                    patient_id,
                    filenumber: file_number,
                    assignee_id,
                    date: new Date()
                }
            }
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