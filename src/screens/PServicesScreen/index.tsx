import React, { useEffect, useRef, useState } from 'react'
import { View, Text, ScrollView, FlatList, Animated, Dimensions, Pressable } from 'react-native'
import ServiceCart from '../../components/ServiceCart'
import styles from './styles'
import { Nav, Service, Static_Service } from '../../Types'
import PServicesHeader from '../../components/PServicesHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import IconPlus from 'react-native-vector-icons/FontAwesome5'
import SModal from '../../components/SModal'
import { useQuery } from 'react-query'
import axios from 'axios'
import { DB_URL } from '../../global'
import { useHrAssigneesQuery, useServicelogsQuery } from '../../../libs/generated/graphql'
import Service_List from '../../data/ServiceList'
import ServiceModal from '../../components/ServiceModal'

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

const HEADER_HEIGHT = 135

const PServicesScreen = ({navigation, route}: Nav) => {
    const [Services, setServices] = useState([]);
    const [text, setText] = useState('')
    const [closed, setClosed] = useState(true)
    const [newServiceClosed, setNewServiceClosed] = useState(true);
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

    const cred = route.params.cred
    const file_number = route.params.file_number
    // const Services = route.params.services

    const {
        data: serviceLogData,
        error: serviceLogError,
        isLoading: serviceLogIsLoading
    } = useServiceLogQuery(cred?.file_number);

    useEffect(() => {
        let temp = []
        if(serviceLogData != undefined) {
            serviceLogData?.servicelogsByFilenumber.map((service:any) => {
            let tem = {
                ...service,
                service: Service_List.filter(ser => ser.id==service.service_id)[0]
            }
            temp.push(tem)
            })
        }
        setServices(temp)
    }, [serviceLogData]);

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
                <Pressable
                style={styles.new_service_button}
                onPress={()=>setNewServiceClosed(false)}
                >
                    <IconPlus name="plus" size={30}/>
                </Pressable>
                {
                    Services!=[] && Services?.map((service, index) => (
                        service?.service?.name.toLowerCase().includes(text.toLowerCase()) &&
                        <View style={{}} key={index}>
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
                }
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
            {!newServiceClosed && (
                <ServiceModal
                file_number={file_number}
                setClosed={setNewServiceClosed}
                patient_id={cred.id}
                />
            )}

        </View>
    )
}

export default PServicesScreen
