import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import { HR_Assignee, Nav } from '../../Types'

interface HRCardProps {
    navigation: Nav['navigation']
    assignee: HR_Assignee
}

const HRCard = ({ navigation, assignee }: HRCardProps) => {
    return (
        <Pressable
        style={styles.root}
        onPress={() => {
            navigation.navigate("HREmployeeScreen", { assignee: assignee })
        }}
        >
            <View style={styles.left}>
                <Image
                style={styles.image}
                source={{ uri: assignee.profile_pic }}
                />
            </View>
            <View style={styles.right}>
                <Text style={styles.title}>{assignee.name}</Text>
                <Text style={styles.status}>{assignee.hr_type}</Text>
            </View>
        </Pressable>
    )
}

export default HRCard