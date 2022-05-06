import React, { useEffect, useRef, useState } from 'react'
import { View, Text, ScrollView, FlatList, Animated, Dimensions, Pressable } from 'react-native'
import ServiceCart from '../../components/ServiceCart'
import styles from './styles'
import { Nav, Service, Static_Service } from '../../Types'
import PServicesHeader from '../../components/PServicesHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import IconBack from 'react-native-vector-icons/AntDesign'
import SModal from '../../components/SModal'
import { useQuery } from 'react-query'
import axios from 'axios'
import { DB_URL } from '../../global'

const useServiceLogQuery = (fn: number) => {
    // fetching services data
    const SERVICE_LOG_QUERY = `
    {
        servicelogsByFilenumber(filenumber: ${fn}) {
          id
          service_id
          patient_id
          filenumber
          assignee_id
          date
          createdAt
          updatedAt
        }
    }
    `;
    const res = useQuery("srvslg", () => {
        return axios({
        url: DB_URL,
        method: "POST",
        data: {
            query: SERVICE_LOG_QUERY
        }
        }).then(response => response.data.data);
    });

    return res;
}

const useServiceQuery = (sid: number) => {
    // fetching original services data
    const SERVICE_QUERY = `
    {
        service(service_id: 2) {
            id
            name
            type
            description
            createdAt
            updatedAt
        }
    }
    `;
    const res = useQuery("srvnm", () => {
        return axios({
        url: DB_URL,
        method: "POST",
        data: {
            query: SERVICE_QUERY
        }
        }).then(response => response.data.data);
    });
    console.log(res)

    return res;
}

const HEADER_HEIGHT = 135

const PServicesScreen = ({navigation, route}: Nav) => {
    const [Services, setServices] = useState([]);

    const cred = route.params.cred
    // const Services = route.params.services

    const {
        data: serviceLogData,
        error: serviceLogError,
        isLoading: serviceLogIsLoading
    } = useServiceLogQuery(1);

    const {
        data: serviceData,
        error: serviceError,
        isLoading: serviceIsLoading
    } = useServiceQuery(2);
    
    useEffect(() => {
        !serviceLogError &&
        serviceLogData &&
        setServices(serviceLogData.servicelogsByFilenumber);
    }, [serviceLogData]);

    const [text, setText] = useState('')
    const [closed, setClosed] = useState(true)
    const [newTask, setNewTask] = useState({})
    const [newTaskName, setNewTaskName] = useState('')
    const [newTaskDesc, setNewTaskDesc] = useState('')
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


    const renderList = ({item}) => {
        return (
            <ServiceCart navigation={navigation} service={item} />
        )
    }

    return (
        <View style={{ flex: 1 }}>
            {/* header */}
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
                <PServicesHeader text={text} setText={setText} navigation={navigation} name={cred.name} profile_pic={cred.profile_pic_url}/>
            </Animated.View>

            {/* list of services */}
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
            style={styles.scroll_view}
            showsVerticalScrollIndicator={false}
            >
                <View style={{ height: 200 }}></View>
                {/* {
                    Services.map((service, index) => (
                        service.service.name.toLowerCase().includes(text.toLowerCase()) &&
                        <View style={{}}>
                            <ServiceCart
                            key={index}
                            service={service}
                            navigation={navigation}
                            setNewTask={setNewTask}
                            newTask={newTask}
                            setClosed={setClosed}
                            />
                        </View>
                    ))
                } */}
            </Animated.ScrollView>

            {!closed && (
                <SModal
                setClosed={setClosed}
                setNewTask={setNewTask}
                newTask={newTask}
                newTaskName={newTaskName}
                setNewTaskName={setNewTaskName}
                newTaskDesc={newTaskDesc}
                setNewTaskDesc={setNewTaskDesc}
                />
            )}

        </View>
    )
}

export default PServicesScreen
