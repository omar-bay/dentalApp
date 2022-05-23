import { Button, Dimensions, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Gender, useCreateFileMutation, useCreatePatientMutation } from '../../../libs/generated/graphql';

interface PFilesModalProps {
    setClosed: Dispatch<SetStateAction<boolean>>
}

const PFilesModal = ({ setClosed }: PFilesModalProps) => {
    const [text, setText] = useState('');
    const [pic, setPic] = useState('');
    const [gen, setGen] = useState(Gender.Male)

    const [createFileMutation, { data:newFileData, loading:newFileLoading, error:newFileError }] = useCreateFileMutation();
    const [createPatient] = useCreatePatientMutation();

    const handleSubmit = () => {
        // console.log({
        //     name: text,
        //     profile_pic: pic,
        //     gender: gen
        // })
        createFileMutation({
            variables: {
                input: {
                    assignee_id: 1,
                    status: "alive"
                }
            }
        })
        newFileData &&
        createPatient({
            variables: {
                input: {
                    file_number: newFileData.createFile.file?.file_number,
                    name: text,
                    profile_pic_url: pic,
                    gender: gen,
                    cat_id: 1,
                }
            }
        })
        setClosed(true)
        setText('')
        setPic('')
        setGen(Gender.Male)
    }

    const handleCancel = () => {
        setClosed(true)
        setText('')
        setPic('')
        setGen(Gender.Male)
    }

    const chooseColor = () => {
        return '#bfeff8'
    }

    const handleGenPress = (gen: Gender) => {
        setGen(gen)
    }

    useEffect(() => {
        console.log(newFileData)
    }, [newFileData])
    

  return (
    <Pressable style={styles.root} onPress={handleCancel}>
      <Pressable style={styles.container}>
          <Text style={styles.title}>Add Patient</Text>
          <View style={styles.item}>
              <Text style={styles.label}>Name</Text>
              <TextInput
              style={styles.input}
              onChangeText={setText}
              value={text}
              />
          </View>
          <View style={styles.item}>
              <Text style={styles.label}>Profile Pic</Text>
              <TextInput
              style={styles.input}
              onChangeText={setPic}
              value={pic}
              />
          </View>
          <View style={styles.item}>
              <View style={styles.genPicker}>
                  <Pressable style={styles.genButton}
                  onPress={() => handleGenPress(Gender.Male)}
                  >
                      <Text style={styles.genTitle}>Male</Text>
                  </Pressable>
                  <Pressable style={styles.genButton}
                  onPress={() => handleGenPress(Gender.Female)}
                  >
                      <Text style={styles.genTitle}>Female</Text>
                  </Pressable>
              </View>
          </View>
          <Pressable
          style={[styles.button, { backgroundColor: chooseColor() }]}
          onPress={handleSubmit}
          ><Text style={styles.buttonTitle}>ADD</Text></Pressable>
      </Pressable>
    </Pressable>
  )
}

export default PFilesModal

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        display: 'flex',
        position: 'absolute',
        height: Dimensions.get("window").height,
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
        fontSize: 18,
    },
    item: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        flex: 0.5,
        fontFamily: 'serif'
    },
    input: {
        width: '100%',
        flex: 1,
        borderBottomWidth: 0.2
    },
    genPicker: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingVertical: 15
    },
    genButton: {
        alignItems: 'center',
        padding: 15,
        flex: 1,
        borderRadius: 5
    },
    genTitle: {
        fontFamily: 'serif',
        fontSize: 16
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