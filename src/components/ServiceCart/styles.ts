import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    root: {
        height: 90,
        width: '100%',
        backgroundColor: 'transparent',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    body: {
        width: '100%',
        borderWidth: 2,
        borderColor: '#bfeff8',
        backgroundColor: 'white',
        alignSelf: 'center',
        marginHorizontal: 10,
        borderRadius: 3,
        padding: 2
    },
    profileImgContainer: {
        alignSelf: 'center',
        height: 40,
        width: 40,
        borderRadius: 20,
        marginTop: 0.5,
    },
    profileImg: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    ppNedit: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 5,
        marginBottom: 8
    },
    edit: {
        display: 'flex',
        flexDirection: 'row',
        // borderWidth: 0.5,
        backgroundColor: '#d4f4fa',
        borderRadius: 20,
        alignItems: 'center',
        padding: 5
    },
})

export default styles