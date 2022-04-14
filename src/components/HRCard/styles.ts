import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    root: {
        borderWidth: 0.25,
        borderRadius: 15,
        height: 90,
        width: '90%',
        alignSelf: 'center'
    },
    left: {
        height: '100%',
        width: '30%',
        flexDirection: 'row',
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    },
    right: {}
})

export default styles