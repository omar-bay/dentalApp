import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { Patient, Nav, Service } from '../../Types';
import styles from './styles'
import IconRight from 'react-native-vector-icons/AntDesign'
import { useQuery } from 'react-query';
import { DB_URL } from '../../global';
import axios from 'axios';

interface FileCartProps {
    cred: Patient,
    navigation: Nav['navigation'],
    services: Service[]
}

const FileCart = ({ cred, navigation, services }: FileCartProps) => {

    const handlePress = (navigation: Nav['navigation']) => {
        navigation.navigate("PServicesScreen", { cred: cred, services: services })
    }

    return (
        <Pressable style={styles.root} onPress={() => handlePress(navigation)}>
            {/* Bar */}
            <View style={[styles.profileImgContainer, { borderColor: 'green', borderWidth:0 }]}>
                <Image
                source={{
                    uri: cred.profile_pic_url
                }}
                style={styles.profileImg}
                />
            </View>

            {/* info */}
            <View style={styles.info}>
                {/* Patient Name */}
                <View>
                    <Text numberOfLines={1} style={styles.pat_name}>{cred.name}</Text>
                    <Text numberOfLines={1} style={styles.status}>VIP</Text>
                </View>
            </View>

            {/* Icon */}
            <View style={styles.iconContainer}>
                <IconRight name="right" size={30}/>
            </View>

        </Pressable>
    )
}

export default FileCart
