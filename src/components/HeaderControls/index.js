import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

const HeaderControls = (props) => {
    const { onPress } = props

    return (
        <View style={styles.container}>
            {/* refresh icon */}
            <Pressable onPress={()=>onPress("refresh")}><Icon name="refresh-cw" style={styles.icon}/></Pressable>
            <View style={styles.controlsC}>
                {/* search icon */}
                <Pressable onPress={()=>onPress("search")}><Icon name="search" style={styles.icon}/></Pressable>

                {/* grid icon */}
                <Pressable onPress={()=>onPress("grid")}><Icon name="grid" style={styles.icon}/></Pressable>

                {/* list icon */}
                <Pressable onPress={()=>onPress("list")}><Icon name="list" style={styles.icon}/></Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2d0ec',
        padding: 10,
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row'
    },
    titleContainer: {
        flex: 1
    },
    title: {
        fontSize: 20
    },
    controlsC: {
        flex: 2,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginRight: 0,
        justifyContent: 'flex-end'
    },
    icon: {
        paddingHorizontal: 10,
        fontSize: 23,
    }
})

export default HeaderControls;
