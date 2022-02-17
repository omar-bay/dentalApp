import { View, Text, TouchableHighlight, Image, InteractionManager, Keyboard, Pressable } from 'react-native'
import styles from './styles'
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { Input, SearchBar } from 'react-native-elements'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import IconBack from 'react-native-vector-icons/AntDesign'
import { Nav } from '../../Types'

interface PServicesHeaderProps {
    navigation: Nav,
    name: string,
    profile_pic: string,
    text: string,
    setText: Dispatch<SetStateAction<string>>
}

const TaskScreenHeader = ({ navigation, name, profile_pic, text, setText }: TaskScreenHeaderProps) => {
    const mySearchBar = useRef()

    const handleChange = (txt: string) => {
        setText(txt)
    }
    const focus = () => {
        mySearchBar?.current.blur()
    }
    const handleDetails = () => {}

    return (
        <View style={styles.root}>
            {/* Top */}
            <View style={styles.top}>
                <Pressable onPress={() => navigation.goBack()} style={styles.back}><IconBack name="left" size={25} /><Text style={{ fontSize: 18 }}>Back</Text></Pressable>
                <Pressable onPress={() => handleDetails}><Text style={{ fontSize: 18 }}>Edit</Text></Pressable>
            </View>
            
            {/* Task Stage & Service Name */}
            <View style={styles.profile}>
                <Text>Pending</Text>
                <Text style={styles.service_name}>Tarbsho</Text>
            </View>

        </View>
    )
}

export default TaskScreenHeader