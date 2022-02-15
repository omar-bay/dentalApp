import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import FileCart from '../FileCart'
import RTaskCart from '../RTaskCart'
import styles from './styles'
import { Service } from '../Types'
import Services from '../../data/Services'
import IconEdit from 'react-native-vector-icons/AntDesign'

interface ServiceCartProps {
    service: Service
}

const ServiceCart = ({ service }: ServiceCartProps) => {

    return (
        <Pressable style={styles.root}>
            <View style={styles.body}>
                {/* assignee_pic & edit_button */}
                <View style={styles.ppNedit}>
                    <View style={[styles.profileImgContainer, { borderColor: 'green', borderWidth:1 }]}>
                        <Image
                        source={{
                            uri: `data:image/png;base64,${service.assignee.profile_pic}`
                        }}
                        style={styles.profileImg}
                        />
                    </View>
                    <Pressable style={styles.edit}>
                        <IconEdit name="edit" size={20} />
                        <Text style={{ fontSize: 14 }}>Edit</Text>
                    </Pressable>
                </View>

                {/* Service Name & description */}
                <View>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>{service.name}</Text>
                </View>

                {/* Recent Task Carts */}
                <RTaskCart task={service.tasks[0]} />
                
            </View>
        </Pressable>
    )
}

export default ServiceCart
