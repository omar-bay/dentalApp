import React, { useEffect, useRef, useState } from 'react'
import { View, Text, Image, ScrollView, Keyboard, Pressable, Animated, Dimensions } from 'react-native'
import { SearchBar } from 'react-native-elements'
import IconSearch from 'react-native-vector-icons/Feather'
import styles from './styles'
import { request, gql } from "graphql-request";
import { CreateHrAssigneeDocument, CreatePatientDocument, CreatePatientMutation, Gender, usePatientsQuery } from '../../../libs/generated/graphql'
import { useCreateHrAssigneeMutation, Hr_Type } from '../../../libs/generated/graphql'
import { useMutation } from '@apollo/client'

const HEADER_HEIGHT = 135

const KnowledgeScreen = () => {
    // creating HR
    const [createHrAssignee] = useCreateHrAssigneeMutation()

    const [text, setText] = useState('')
    const [closeSearch, setCloseSearch] = useState(true)
    const [scrollAnim] = useState(new Animated.Value(0));
    const [offsetAnim] = useState(new Animated.Value(0));
    const [clampedScroll, setClampedScroll] = useState(Animated.diffClamp(
        Animated.add(
            scrollAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
                extrapolateLeft: 'clamp'
            }), offsetAnim
        ), 0, 1
    ));

    const navbarTranslate = clampedScroll.interpolate({
        inputRange: [0, HEADER_HEIGHT],
        outputRange: [0, -HEADER_HEIGHT],
        extrapolate: 'clamp'
    })

    const mySearchBar = useRef()

    const focus = () => {
        mySearchBar?.current.blur()
    }

    const iconPressed = () => {
        setCloseSearch(false)
    }

    return (
        <View style={{flex:1}}>
            {/* Header */}
            <Animated.View
            style={[styles.header, {
                transform: [{ translateY: navbarTranslate }]
            }]}
            onLayout={(event) => {
                let {height} = event.nativeEvent.layout;
                setClampedScroll(Animated.diffClamp(
                Animated.add(
                    scrollAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                    extrapolateLeft: 'clamp'
                    }),
                    offsetAnim
                ), 0, height)
                );
            }}
            >
                <Text style={styles.title}>Blog</Text>
                {closeSearch ? (
                    <Pressable
                    onPress={iconPressed}
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
            </Animated.View>

            <Animated.ScrollView
            bounces={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
            [
                {
                nativeEvent: {
                    contentOffset: { y: scrollAnim }
                }
                }
            ],
            { useNativeDriver: true }
            )}
            style={{ flexGrow: 1, width: '100%' }}
            showsVerticalScrollIndicator={false}
            >

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
                {[1,1,1,1,1].map((blog, index) => (
                    <BlogCard
                    key={index}
                    style={{ zIndex: -2-index, backgroundColor: blogColor(index) }}
                    />
                ))}

            </Animated.ScrollView>
        </View>
    )
}

const blogColor = (number: number) => {
    switch (number%3) {
        case 0:
            return '#f4f5fa'
        case 1:
            return '#bfeff8'
        default:
            return '#ffffff'
    }
}

interface BlogCardProps {
    style: {}
}

const BlogCard = ({ style }: BlogCardProps) => {
    return (
        <View style={[styles.blogContainer, style]}>
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
                    <Text
                    style={styles.post}
                    numberOfLines={5}
                    >
                        Hello, i've been in this University since
                        as long as i can remember. I don't age and
                        like being held by hand and taken down to the
                        dance floor with the one person that learns how
                        to ride a bike with my cousins last summer
                    </Text>
                </View>
            </View>
            <View style={styles.keywordContainer}>
                <Text
                style={styles.keyword}
                >Scelestical</Text>
            </View>
        </View>
    )
}

export default KnowledgeScreen
