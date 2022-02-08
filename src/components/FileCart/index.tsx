import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

type RootStackParamList = {
    Home: undefined;
    Profile: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
  };
type Nav = StackScreenProps<RootStackParamList, 'Profile'>;

interface FileCartProps {
    cred: {
        id: number,
        name: String,
        age: number,
        gender: String,
        cat_id: number,
    },
    navigation: Nav['navigation']
}

const FileCart = ({ cred, navigation }: FileCartProps) => {

    const handlePress = (navigation: Nav['navigation']) => {
        navigation.navigate("PNotebook", { cred })
    }

    return (
        <Pressable style={styles.root} onPress={() => handlePress(navigation)}>
            {/* Mark Bar */}
            <View style={styles.bar}></View>

            {/* info */}
            <View style={styles.info}>
                {/* Patient Name */}
                <View>
                    <Text numberOfLines={1} style={styles.pat_name}>{cred.name}</Text>
                </View>

                {/* Patient Status */}
                <Text numberOfLines={1}>Alive</Text>
            </View>

        </Pressable>
    )
}

export default FileCart
