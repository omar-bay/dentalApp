import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    root: {
        marginTop: 5,
        width: '100%',
        height: '100%',
        display: 'flex',
        backgroundColor: 'transparent'
    },
    butContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    button: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#d4f4fa',
        paddingHorizontal: 5
    },
    selectedButton: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'transparent',
        paddingHorizontal: 5,
        borderBottomWidth: 0
    }
})

export default styles