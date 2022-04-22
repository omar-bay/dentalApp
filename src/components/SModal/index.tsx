import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SModal = () => {
  return (
    <View style={styles.root}>
      <Text>SModal</Text>
    </View>
  )
}

export default SModal

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'grey',
        display: 'flex',
        position: 'absolute',
        height: '100%',
        width: '100%',
        zIndex: 99
    }
})