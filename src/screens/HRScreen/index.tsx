import React, { useRef, useState } from 'react'
import { View, Text, Keyboard } from 'react-native'
import { SearchBar } from 'react-native-elements'
import styles from './styles'

const HRScreen = () => {
    const [text, setText] = useState('')
    const mySearchBar = useRef()

    const focus = () => {
        mySearchBar?.current.blur()
    }

    return (
        <View style={styles.root}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Human Resources</Text>
            </View>

            <SearchBar
            ref={mySearchBar}
            lightTheme
            round={true}
            containerStyle= {{ backgroundColor: 'transparent', borderTopWidth: 0, borderBottomWidth: 0 }}
            inputContainerStyle= {{ backgroundColor: 'white', height: 39 }}
            inputStyle= {{ color: 'black' }}
            placeholder="Service..."
            showCancel
            onChangeText={(txt)=>setText(txt)}
            value={text}
            onPressIn={focus}
            onClear={() => Keyboard.dismiss()}
            />

        </View>
    )
}

export default HRScreen
