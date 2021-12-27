import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        alignSelf: "center",
        alignItems: 'center',
        backgroundColor: '#d4f4fa',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#bfeff8',
        width: '100%', 
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 3
    },
    bar: {
        width: '3%',
        height: '100%',
        backgroundColor: '#bfeff8'
    },
    info: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '97%',
        padding: 5
    },
    pat_name: {
        fontSize: 12
    }
})

export default styles