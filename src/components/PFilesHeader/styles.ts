import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    root: {},
    container: {
        backgroundColor: '#e9f9fc',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    title: {
        fontSize: 24,
        fontFamily: 'monospace',
        padding: 20,
        flex: 2,
    },
    addButton: {
        padding: 20,
        alignItems: 'center',
        flex: 1
    },
})

export default styles