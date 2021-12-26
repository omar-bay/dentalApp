import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

interface FileCartProps {
    Pname: String
}

const FileCart = (props: FileCartProps) => {
    const { Pname } = props

    return (
        <Pressable style={styles.root}>
            {/* Mark Bar */}
            <View style={styles.bar}></View>

            {/* info */}
            <View style={styles.info}>
                {/* Patient Name */}
                <View>
                    <Text numberOfLines={1} style={styles.pat_name}>{Pname}</Text>
                </View>

                {/* Patient Status */}
                <Text numberOfLines={1}>Alive</Text>
            </View>

        </Pressable>
    )
}

export default FileCart
