import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import ServiceCart from '../../components/ServiceCart'
import styles from './styles'
import Services from '../../data/Services'

const PServicesScreen = () => {
    return (
        <View style={styles.root}>
            <ScrollView style={styles.lista} showsVerticalScrollIndicator={false}>
                {
                    Services.map( service => (
                        <ServiceCart key={service.id} service={service} />
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default PServicesScreen
