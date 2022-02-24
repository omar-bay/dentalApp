import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import IconFor from 'react-native-vector-icons/AntDesign'
import { Nav } from '../../Types'

interface RedirectProps {
    navigation: Nav
    text: string,
    about?: string,
    style?: { color: string },
    onPress?: () => void
}

const Redirect = ({ navigation, text, about, style, onPress }: RedirectProps) => {

  return (
    <Pressable style={styles.root} onPress={onPress? ()=>onPress() : ()=>{}}>
      <View style={styles.text_container}>
            <Text numberOfLines={1} style={[styles.text, style]}>{text}</Text>
            <View style={styles.icon_container}>
              { about && (<Text numberOfLines={1} style={styles.about_text}>{about}</Text>) }
              <IconFor name="right" size={25}/>
            </View>
      </View>

    </Pressable>
  )
}

export default Redirect