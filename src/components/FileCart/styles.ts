import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        alignSelf: "center",
        // alignItems: 'center',
        backgroundColor: '#d4f4fa',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#bfeff8',
        width: '96%', 
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 3,
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    bar: {
        width: '3%',
        height: '100%',
        backgroundColor: '#bfeff8'
    },
    info: {
        paddingVertical: 20,
        marginLeft: 12,
        flex: 1
    },
    pat_name: {
        fontSize: 18,
        fontFamily: 'serif'
    },
    status: {
        fontFamily: 'sans-serif-medium'
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        // paddingHorizontal: 15
    },
    profileImgContainer: {
        alignSelf: 'center',
        height: 80,
        width: 80,
        borderRadius: 40,
        marginTop: 0.5,
    },
    profileImg: {
        height: 80,
        width: 80,
        borderRadius: 40,
    },
})

export default styles