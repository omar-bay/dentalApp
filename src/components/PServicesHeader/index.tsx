import { View, Text, TouchableHighlight, Image, InteractionManager, Keyboard, Pressable } from 'react-native'
import styles from './styles'
import React, { useEffect, useRef, useState } from 'react'
import { Input, SearchBar } from 'react-native-elements'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import IconBack from 'react-native-vector-icons/AntDesign'
import { Nav } from '../../Types'

interface PServicesHeaderProps {
    navigation: Nav
}

const PServicesHeader = ({ navigation }: PServicesHeaderProps) => {
    const [text, setText] = useState('')
    
    const mySearchBar = useRef()

    const handleChange = (txt: string) => {
        setText(txt)
    }
    const focus = () => {
        mySearchBar?.current.blur()
    }
    const handleDetails = () => {}

    return (
        <View style={styles.root}>
            {/* Top */}
            <View style={styles.top}>
                <Pressable onPress={() => navigation.goBack()} style={styles.back}><IconBack name="left" size={20} /><Text>PFiles</Text></Pressable>
                <Pressable onPress={() => handleDetails}><Text>Details</Text></Pressable>
            </View>
            
            {/* profile pic,  Name, & search */}
            <View style={styles.profile}>
                <View style={[styles.profileImgContainer, { borderColor: 'green', borderWidth:1 }]}>
                    <Image
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1mKVoDmigf1J_RHiZvKEQB98mgYGBySuJPw&usqp=CAU"
                    }}
                    style={styles.profileImg}
                    />
                </View>
                <Text style={styles.profile_name}>Perona Hooker</Text>

                <SearchBar
                ref={mySearchBar}
                lightTheme
                round={true}
                containerStyle= {{ backgroundColor: 'transparent', borderTopWidth: 0, borderBottomWidth: 0 }}
                inputContainerStyle= {{ backgroundColor: 'white', height: 39 }}
                inputStyle= {{ color: 'black' }}
                placeholder="Service..."
                showCancel
                onChangeText={handleChange}
                value={text}
                onPressIn={focus}
                onClear={() => Keyboard.dismiss()}
                />

            </View>

        </View>
    )
}

export default PServicesHeader