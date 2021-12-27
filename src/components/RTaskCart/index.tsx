import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const RTaskCart = () => {
    return (
        <View style={styles.root}>
            {/* Mark Bar */}
            <View style={styles.bar}></View>

            {/* info */}
            <View style={styles.info}>
                {/* Task Name */}
                <View>
                    <Text numberOfLines={1} style={styles.pat_name}>Task Name</Text>
                </View>

                {/* Date Modified */}
                <Text numberOfLines={1} style={styles.pat_name}>2/3/2021</Text>

            </View>
        </View>
    )
}

export default RTaskCart
