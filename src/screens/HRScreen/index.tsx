import React, { useRef, useState } from 'react'
import { View, Text, Keyboard, ScrollView } from 'react-native'
import { SearchBar } from 'react-native-elements'
import styles from './styles'
import SegmentControl from '../../components/SegmentControl'
import HRCard from '../../components/HRCard'
import { Nav } from '../../Types'

const HRScreen = ({ navigation, route }: Nav) => {
    const [text, setText] = useState('')
    const mySearchBar = useRef()

    const focus = () => {
        mySearchBar?.current.blur()
    }

    const segments = [{
        title: 'ALL',
        view: ()=>(<List navigation={navigation}/>)
    }, {
        title: 'EMPLOYEE',
        view: ()=>(<List navigation={navigation}/>)
    }, {
        title: 'DOCTOR',
        view: ()=>(<List navigation={navigation}/>)
    }, {
        title: 'STUDENT',
        view: ()=>(<List navigation={navigation}/>)
    }]

    return (
        <View style={styles.root}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Human Resources</Text>
                <SearchBar
                ref={mySearchBar}
                lightTheme
                round={true}
                containerStyle= {{ backgroundColor: 'transparent', borderTopWidth: 0, borderBottomWidth: 0 }}
                inputContainerStyle= {{ backgroundColor: 'white', height: 39 }}
                inputStyle= {{ color: 'black' }}
                placeholder="Name..."
                showCancel
                onChangeText={(txt)=>setText(txt)}
                value={text}
                onPressIn={focus}
                onClear={() => Keyboard.dismiss()}
                />
            </View>

            <SegmentControl
            style={styles.segments}
            segments={segments}
            />

        </View>
    )
}

interface ListProps {
    navigation: Nav['navigation']
}

const List = ({ navigation }: ListProps) => {
    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
            {[0,1,2,3,4,5,6,7,,8,9,10,11].map((x,i) =>
                <HRCard
                name="Madilyn Manson"
                status="HR Manager"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmNdSL0wetARyMZVIRgtl2yPZyzXSJQx4EzA&usqp=CAU"
                navigation={navigation}
                />
            )}
            <View style={{ height: 456 }}/>
        </ScrollView>
    )
}

export default HRScreen
