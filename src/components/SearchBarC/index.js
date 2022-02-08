import React, { useEffect, useRef } from 'react';
import {View, StyleSheet, InteractionManager} from 'react-native';
import { SearchBar } from 'react-native-elements'

const SearchBarC = ({ search, setSearch, setIsSearchHeader }) => {

    const inputRef = useRef()
    useEffect(() => {
        focusInputWithKeyboard()
    }, []);
    const focusInputWithKeyboard = () => {
        InteractionManager.runAfterInteractions(() => {
            inputRef.current.focus()
        })
    }

    return (
        <View style={styles.searchbarContainer}>
            <SearchBar
            ref={inputRef}
            lightTheme
            round = {true}
            containerStyle= {{ padding: 2, backgroundColor: '#f2d0ec' }}
            inputContainerStyle= {{ backgroundColor: '#f7edf6', height: 40 }}
            inputStyle= {{ color: '#24011f' }}
            placeholder="Search task..."
            onChangeText={text => setSearch(text)}
            value={search}
            onCancel={()=>setIsSearchHeader(false)}
            onClear={()=>setIsSearchHeader(false)}
            showCancel
            />
        </View>
    );
}

const styles = StyleSheet.create({
    searchbarContainer: {
        width: '100%',
    }
})

export default SearchBarC;
