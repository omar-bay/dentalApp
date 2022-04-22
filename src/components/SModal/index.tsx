import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Dispatch, SetStateAction, useState } from 'react'
import MyDatePicker from '../MyDatePicker'
import { formatDate } from '../../screens/TaskScreen'

interface SModalProps {
    setClosed: Dispatch<SetStateAction<boolean>>
}

const SModal = ({ setClosed }: SModalProps) => {
    const [date, setDate] = useState(new Date());
    const [openDate, setOpenDate] = useState(false);

    const handlePress = () => {
        setClosed(true)
    }

  return (
    <Pressable style={styles.root} onPress={()=>setClosed(true)}>
      <Pressable style={styles.container}>
          <Text style={styles.title}>Task</Text>
          <View style={styles.item}>
              <Text style={styles.label}>Name</Text>
              <TextInput
              style={styles.input}
              />
          </View>
          <View style={styles.item}>
              <Text style={styles.label}>Desc</Text>
              <TextInput
              style={styles.input}
              />
          </View>
          <View style={styles.item}>
              <Text style={styles.label}>Date</Text>
              <Pressable style={styles.dateHolder} onPress={()=>setOpenDate(true)}>
                  <Text>{formatDate(date)}</Text>
              </Pressable>
              <MyDatePicker
              date={date}
              setDate={setDate}
              open={openDate}
              setOpen={setOpenDate}
              />
          </View>
          <Pressable
          style={styles.button}
          onPress={handlePress}
          ><Text style={styles.buttonTitle}>ADD</Text></Pressable>
      </Pressable>
    </Pressable>
  )
}

export default SModal

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
        padding: 8
    },
    button: {
        backgroundColor: '#bfeff8',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderRadius: 20,
        marginTop: 5,
    },
    buttonTitle: {
        color: 'grey',
        fontWeight: 'bold'
    }
})