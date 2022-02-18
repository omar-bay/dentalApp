import { View, Text, Switch, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import IconFor from 'react-native-vector-icons/AntDesign'
import { Nav } from '../../Types'

interface SwitchCartProps {
    text: string,
    style?: { color: string }
}

const SwitchCart = ({ text, style }: SwitchCartProps) => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.root}>
        <View style={styles.text_container}>
                <Text numberOfLines={1} style={[styles.text, style]}>{text}</Text>
                <View style={styles.icon_container}>
                <Switch
                    trackColor={{ false: "lightgrey", true: "#82E8FB" }}
                    thumbColor={isEnabled ? "white" : "white"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
                </View>
        </View>

        </View>
    )
}

export default SwitchCart