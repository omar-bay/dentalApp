import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { Task } from '../../Types'

interface RTaskCart {
    task: Task
}

const RTaskCart = ({ task }: RTaskCart) => {

    return (
        <View style={styles.root}>
        </View>
    )
}

export default RTaskCart
