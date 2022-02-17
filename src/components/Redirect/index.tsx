import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import IconFor from 'react-native-vector-icons/AntDesign'

interface RedirectProps {
    text: string
}

const Redirect = ({ text }: RedirectProps) => {
  return (
    <Pressable style={styles.root}>
      <View style={styles.text_container}>
            <Text numberOfLines={1} style={styles.text}>{text}</Text>
            <IconFor name="right" size={25}/>
      </View>

    </Pressable>
  )
}

export default Redirect