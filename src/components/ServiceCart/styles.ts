import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    root: {
        height: '19%',
        width: '100%',
        backgroundColor: 'transparent',
        marginBottom: 10
    },
    body: {
        borderWidth: 2,
        borderColor: '#bfeff8',
        backgroundColor: '#d4f4fa',
        alignSelf: 'center',
        marginHorizontal: 10,
        borderRadius: 3,
        padding: 2
    },
    name: {
        paddingHorizontal: 3,
        marginTop: 3,
        marginBottom: 3,
        fontWeight: "bold"
    },
    taskcontainer: {
        width: '100%',
        height: '65%',
        padding: 5
    }
})

export default styles