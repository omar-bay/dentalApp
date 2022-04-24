import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import IconSearch from 'react-native-vector-icons/Feather'
import styles from './styles'

const KnowledgeScreen = () => {
    return (
        <ScrollView>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Blog</Text>
                <IconSearch name="search" size={30} />
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
