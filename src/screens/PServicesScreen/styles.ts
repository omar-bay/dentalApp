import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: -1,
        zIndex: 1
    },
    scroll_view: {
        flexGrow: 1,
        width: '100%',
    },
    new_service_button: {
        backgroundColor: 'white',
        borderRadius: 3,
        height: 50,
        width: '94%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8
    }
})

export default styles