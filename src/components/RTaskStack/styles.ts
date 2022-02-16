import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        width: 100,
        backgroundColor: '#51CE72',
        marginBottom: 10,
        borderWidth: 0,
        alignSelf: 'center',
        borderRadius: 3,
        paddingHorizontal: 7,
        paddingVertical: 5
    },
    stage_container: {
        borderWidth: 0,
        height: 25,
        backgroundColor: '#D2FFE3',
        alignItems: 'center',
        borderRadius: 8,
        justifyContent: 'center'
    },
    tasks: {
        marginTop: 5,
        paddingVertical: 5
    },
    task: {
        borderWidth: 0,
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 8,
        justifyContent: 'center'
    }
})

export default styles