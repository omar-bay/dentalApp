import React, { Dispatch, SetStateAction } from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import FileCart from '../FileCart'
import RTaskStack from '../RTaskStack'
import styles from './styles'
import { Service } from '../Types'
import Services from '../../data/Services'
import IconEdit from 'react-native-vector-icons/AntDesign'
import { Nav, Stage, Task } from '../../Types'
import { NavigationRouteContext } from '@react-navigation/native'

interface ServiceCartProps {
    service: Service
    navigation: Nav
    setNewTask: Dispatch<SetStateAction<{}>>
    newTask: Task
    setClosed: Dispatch<SetStateAction<boolean>>
}

const ServiceCart = ({ navigation, service, setNewTask, newTask, setClosed }: ServiceCartProps) => {
    const servicePressed = () => {
        navigation.navigate('TaskListScreen', {
            service_name: service.service.name,
            tasks: service.tasks,
        })
    }

    return (
        <Pressable onPress={() => servicePressed()} style={styles.root}>
            <View style={styles.body}>
                {/* assignee_pic & edit_button */}
                <View style={styles.ppNedit}>
                    <View style={[styles.profileImgContainer, { borderColor: 'green', borderWidth:1 }]}>
                        <Image
                        source={{
                            // uri: `data:image/png;base64,${service?.assignee?.profile_pic}`
                            uri: service?.assignee?.profile_pic_url
                        }}
                        style={styles.profileImg}
                        />
                    </View>
                    <Pressable style={styles.edit}>
                        <IconEdit name="edit" size={20} />
                        <Text style={{ fontSize: 14 }}> Edit</Text>
                    </Pressable>
                </View>

                {/* Service Name & description */}
                <View style={{ marginHorizontal: 8 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>{service?.service.name}</Text>
                </View>

                {/* Stages Recent Tasks */}
                <View style={styles.stages}>
                    <RTaskStack
                    setClosed={setClosed}
                    stage={Stage.New}
                    service={service}
                    setNewTask={setNewTask}
                    newTask={newTask}
                    />
                    <RTaskStack
                    setClosed={setClosed}
                    stage={Stage.Pending}
                    service={service}
                    setNewTask={setNewTask}
                    newTask={newTask}
                    />
                    <RTaskStack
                    setClosed={setClosed}
                    stage={Stage.Done}
                    service={service}
                    setNewTask={setNewTask}
                    newTask={newTask}
                    />
                </View>
                
            </View>
        </Pressable>
    )
}

export default ServiceCart
