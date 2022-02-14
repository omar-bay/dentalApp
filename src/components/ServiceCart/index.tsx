import React from 'react'
import { View, Text, Pressable } from 'react-native'
import FileCart from '../FileCart'
import RTaskCart from '../RTaskCart'
import styles from './styles'
import { Service } from '../Types'
import Services from '../../data/Services'

interface ServiceCartProps {
    service: Service
}

const ServiceCart = ({ service }: ServiceCartProps) => {

    return (
        <Pressable style={styles.root}>
            <View style={styles.body}>
                {/* name */}
                <Text numberOfLines={1} style={styles.name}>{service.name}</Text>

                {/* recent task */}
                <View style={styles.taskcontainer}>
                    <RTaskCart task={service.tasks[0]} />
                </View>
                
            </View>
        </Pressable>
    )
}

export default ServiceCart
