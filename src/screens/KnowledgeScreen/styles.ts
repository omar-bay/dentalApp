import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f4f5fa',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 40,
        borderBottomLeftRadius: 65,
        zIndex: 0
    },
    title: {
        fontSize: 24,
        marginLeft: 45
    },
    searchContainer: {
        position: 'absolute',
        right: 0,
        width: '70%'
    },
    search: {},
    featuredContainer: {
        backgroundColor: '#ffffff',
        paddingTop: 100,
        paddingBottom: 45,
        marginTop: -65,
        borderBottomLeftRadius: 65,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: -1
    },
    bau: {
        flex: 1,
        height: 140,
        width: 40,
    },
    logo: {
        flex: 1,
        height: 140,
        width: 100,
    },
    blogContainer: {
        backgroundColor: '#bfeff8',
        paddingTop: 90,
        paddingBottom: 40,
        marginTop: -65,
        borderBottomLeftRadius: 65,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: -2
    },
    wrapper: {
        paddingHorizontal: 50
    },
    author: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        fontSize: 18
    },
    date: {
        fontSize: 12
    },
    profilepic: {
        alignSelf: 'center',
        height: 50,
        width: 50,
        borderRadius: 40,
        marginTop: 0.5,
    },
    postContainer: {
        marginTop: 15
    },
    post: {}
})

export default styles