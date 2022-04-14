import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'

const HRCard = () => {
    return (
        <View style={styles.root}>
            <View style={styles.left}>
                <Image
                style={styles.image}
                resizeMode="contain"
                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuZ9k0a58JfVhJt69eL2ajiaasscYV6L5P2Yu9OMo_YrG3J-OIPw1H4TI6lXRP-6U6vLA&usqp=CAU" }}
                />
            </View>
            <View style={styles.right}>
                <Text style={styles.title}>Madilyn Manson</Text>
                <Text style={styles.status}>HR Manager</Text>
            </View>
        </View>
    )
}

export default HRCard