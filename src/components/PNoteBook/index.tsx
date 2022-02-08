import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, TextBase } from 'react-native'
import PServicesScreen from '../../screens/PServicesScreen'
import styles from './styles'

type RootStackParamList = {
    Home: undefined;
    Profile: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
  };
type Nav = StackScreenProps<RootStackParamList, 'Profile'>;

const PNoteBook = ({navigation, route}: Nav) => {
    const cred = route.params.cred

    const [visible, setVisible] = useState('Services')

    const renderScreen = () => {
        switch (visible) {
            case 'Services':
                return (<PServicesScreen/>)

            case 'Data':
                return (<Text>Hi</Text>)

            default:
                return (<PServicesScreen/>)
                break;
        }
    }

    useEffect(() => {
        navigation.setOptions({ title: cred.name })
        setVisible('Services')
    }, [])

    return (
        <View style={styles.root}>
            {/* Buttons */}
            <View style={styles.butContainer}>
                <View style={{ width: 10, borderBottomWidth: 1 }}></View>

                <Pressable style={visible!='Services'?styles.button:styles.selectedButton} onPress={() => setVisible('Services')}>
                    <Text>Services</Text>
                </Pressable>

                <Pressable style={visible!='Data'?styles.button:styles.selectedButton} onPress={() => setVisible('Data')}>
                    <Text>Patient Data</Text>
                </Pressable>

                <View style={{ flex: 1, borderBottomWidth: 1 }}></View>
            </View>

            {/* Screen */}
            { renderScreen() }

        </View>
    )
}

export default PNoteBook
