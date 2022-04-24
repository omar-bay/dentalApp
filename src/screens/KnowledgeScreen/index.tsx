import React, { useRef, useState } from 'react'
import { View, Text, Image, ScrollView, Keyboard, Pressable } from 'react-native'
import { SearchBar } from 'react-native-elements'
import IconSearch from 'react-native-vector-icons/Feather'
import styles from './styles'

const KnowledgeScreen = () => {
    const [text, setText] = useState('')
    const [closeSearch, setCloseSearch] = useState(true)

    const mySearchBar = useRef()

    const focus = () => {
        mySearchBar?.current.blur()
    }

    return (
        <ScrollView>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Blog</Text>
                {closeSearch ? (
                    <Pressable
                    onPress={()=>setCloseSearch(false)}
                    ><IconSearch name="search" size={30}/></Pressable>
                ) : (
                    <View style={styles.searchContainer}>
                        <SearchBar
                        style={styles.search}
                        ref={mySearchBar}
                        lightTheme
                        round={true}
                        containerStyle= {{ backgroundColor: 'transparent', borderTopWidth: 0, borderBottomWidth: 0 }}
                        inputContainerStyle= {{ backgroundColor: 'white', height: 39 }}
                        inputStyle= {{ color: 'black' }}
                        placeholder="Topic..."
                        showCancel
                        onChangeText={(txt)=>setText(txt)}
                        value={text}
                        onPressIn={focus}
                        onClear={() => {
                            Keyboard.dismiss();
                            setCloseSearch(true)
                        }}
                        />
                    </View>
                )}
            </View>

            {/* Featured */}
            <View style={styles.featuredContainer}>
                <Image
                style={styles.bau}
                source={{ uri: 'https://icas.bau.edu.lb:8443/cas/files/bau-logo-big.ico' }}
                />
                <Image
                style={styles.logo}
                source={{ uri: 'https://cdn.discordapp.com/attachments/898623704974647379/967867487217668106/logo.png' }}
                />
            </View>

            {/* Blogs */}
            <View style={styles.blogContainer}>
                <View style={styles.wrapper}>
                    <View style={styles.author}>
                        <Image
                        style={styles.profilepic}
                        source={{ uri: 'https://www.kindpng.com/picc/m/187-1874123_best-pictures-for-profile-hd-png-download.png' }}
                        />
                        <View style={{ marginLeft: 12 }}>
                            <Text style={styles.name}>Perla Jaccuzi</Text>
                            <Text style={styles.date}>8/12/2021</Text>
                        </View>
                    </View>
                    <View style={styles.postContainer}>
                        <Text style={styles.post}>
                            Hello, i've been in this University since
                            as long as i can remember. I don't age and
                            like being held by hand and taken down to the
                            dance floor with the one person that learns how
                            to ride a bike with my cousins last summer
                        </Text>
                    </View>
                </View>
            </View>

        </ScrollView>
    )
}

export default KnowledgeScreen
