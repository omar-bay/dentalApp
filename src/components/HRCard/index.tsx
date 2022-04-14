import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'

interface HRCardProps {
    image: String,
    name: String,
    status: String
}

const HRCard = ({ image, name, status }: HRCardProps) => {
    return (
        <View style={styles.root}>
            <View style={styles.left}>
                <Image
                style={styles.image}
                source={{ uri: image }}
                />
            </View>
            <View style={styles.right}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.status}>{status}</Text>
            </View>
        </View>
    )
}

export default HRCard