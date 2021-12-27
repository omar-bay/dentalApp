import React from 'react'
import { View, Text, Pressable } from 'react-native'
import FileCart from '../FileCart'
import RTaskCart from '../RTaskCart'
import styles from './styles'

const ServiceCart = () => {
    return (
        <Pressable style={styles.root}>
            <View style={styles.body}>
                {/* name */}
                <Text numberOfLines={1} style={styles.name}>Tooth Replacement</Text>

                {/* recent task */}
                <View style={styles.taskcontainer}>
                    <RTaskCart/>
                </View>
                
            </View>
        </Pressable>
    )
}

export default ServiceCart
