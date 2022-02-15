import React, { useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import ServiceCart from '../../components/ServiceCart'
import styles from './styles'
import Services from '../../data/Services'
import { Nav } from '../../Types'
import PServicesHeader from '../../components/PServicesHeader'

const PServicesScreen = ({navigation, route}: Nav) => {
    const cred = route.params.cred

    useEffect(() => {
        navigation.setOptions({ title: cred.name })
    }, [])

    return (
        <View style={styles.root}>
            {/* header */}
            <PServicesHeader navigation={navigation} name={cred.name} profile_pic={cred.profile_pic} style={{ marginTop: 0 }} />

            {/* list of services */}
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
