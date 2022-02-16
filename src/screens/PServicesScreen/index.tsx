import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, FlatList, Animated } from 'react-native'
import ServiceCart from '../../components/ServiceCart'
import styles from './styles'
import Services from '../../data/Services'
import { Nav } from '../../Types'
import PServicesHeader from '../../components/PServicesHeader'

const HEADER_HEIGHT = 100

const PServicesScreen = ({navigation, route}: Nav) => {
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

    const cred = route.params.cred

     // useEffect(() => {
    //     navigation.setOptions({ title: cred.name })
    // }, [])

    return (
        <View>
            {/* header */}
            <Animated.View style={[styles.header, {
                transform: [{translateY: navbarTranslate}]
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
                <PServicesHeader navigation={navigation} name={cred.name} profile_pic={cred.profile_pic}/>
            </Animated.View>

            {/* list of services */}
            <Animated.ScrollView
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
            showsVerticalScrollIndicator={false}
            style={{ paddingTop: 186 }}
            >
                {
                    Services.map( service => (
                        <ServiceCart key={service.id} service={service} />
                    ))
                }
            </Animated.ScrollView>
        </View>
    )
}

export default PServicesScreen
