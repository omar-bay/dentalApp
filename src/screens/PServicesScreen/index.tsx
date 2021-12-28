import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import ServiceCart from '../../components/ServiceCart'
import styles from './styles'

const PServicesScreen = () => {
    return (
        <View style={styles.root}>
            <ScrollView style={styles.lista} showsVerticalScrollIndicator={false}>
                <ServiceCart/>
                <ServiceCart/>
                <ServiceCart/>
            </ScrollView>
        </View>
    )
}

export default PServicesScreen
