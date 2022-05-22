import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import IconPlus from 'react-native-vector-icons/FontAwesome5'
import styles from './styles'
import PFilesModal from '../PFilesModal'

const PFilesHeader = () => {
    const [closed, setClosed] = useState(false);

  return (
    <View style={styles.root}>
        <View style={styles.container}>
            <Text style={styles.title}>PFiles</Text>
            <Pressable
            style={styles.addButton}
            ><IconPlus name="plus" size={20}/></Pressable>
        </View>

        {!closed && (
            <PFilesModal
            setClosed={setClosed}
            />
        )}

    </View>
  )
}

export default PFilesHeader