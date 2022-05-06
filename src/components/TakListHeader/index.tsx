import { View, Text, TouchableHighlight, Image, InteractionManager, Keyboard, Pressable } from 'react-native'
import styles from './styles'
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { Input, SearchBar } from 'react-native-elements'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import IconBack from 'react-native-vector-icons/AntDesign'
import { Nav } from '../../Types'

interface TaskListHeaderProps {
    navigation: Nav,
    service_name: string,
    service_desc?: string
}

const TaskListHeader = ({ navigation, service_name, service_desc }: TaskListHeaderProps) => {
    const handleEdit = () => {}

    return (
        <View style={styles.root}>
            {/* Top */}
            <View style={styles.top}>
                <Pressable onPress={() => navigation?.goBack()} style={styles.back}><IconBack name="left" size={25} color='blue' /><Text style={{ fontSize: 18, color: 'blue' }}>Back</Text></Pressable>
                <Pressable onPress={() => handleEdit()}><Text style={{ fontSize: 18, color: 'blue' }}>Edit</Text></Pressable>
            </View>
            
            {/* profile pic,  Name, & search */}
            <View style={styles.profile}>
                {/* <View style={[styles.profileImgContainer, { borderColor: 'green', borderWidth:1 }]}>
                    <Image
                    source={{
                        // uri: `data:image/png;base64,${}`
                    }}
                    style={styles.profileImg}
                    />
                </View> */}
                <Text style={styles.assignee_name}>Tarek Mezriz</Text>
                <Text style={styles.service_name}>{service_name}</Text>

                {/* Space */}
                <View style={styles.text_container}>
                    <Text style={styles.text}>{service_desc || "NO DESC"}</Text>
                </View>

            </View>

        </View>
    )
}

export default TaskListHeader