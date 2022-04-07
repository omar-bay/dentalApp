import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
} from 'react-native'
import React, { useState } from 'react'
import SegmentedControlTab from 'react-native-segmented-control-tab';

const SegmentedControlTest = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedIndices, setSelectedIndices] = useState([0]);
    const [customStyleIndex, setCustomStyleIndex] = useState(0);

    const handleSingleIndexSelect = (index) => {
        // For single Tab Selection SegmentedControlTab
        setSelectedIndex(index);
    };

    const handleMultipleIndexSelect = (index) => {
        // For multi Tab Selection SegmentedControlTab
        if (selectedIndices.includes(index)) {
            // Included in the selected array then remove
            setSelectedIndices(
            selectedIndices.filter((i) => i !== index)
            );
        } else {
            // Not included in the selected array then add
            setSelectedIndices([...selectedIndices, index]);
        }
    };

    const handleCustomIndexSelect = (index) => {
        // Tab selection for custom Tab Selection
        setCustomStyleIndex(index);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                {/* Simple Segmented with Custom Styling*/}
                <SegmentedControlTab
                values={['one', 'two']}
                selectedIndex={customStyleIndex}
                onTabPress={handleCustomIndexSelect}
                borderRadius={0}
                tabsContainerStyle={{
                height: 50,
                backgroundColor: '#F2F2F2'
                }}
                tabStyle={{
                backgroundColor: '#F2F2F2',
                borderWidth: 0,
                borderColor: 'transparent',
                }}
                activeTabStyle={{backgroundColor: 'white', marginTop: 2}}
                tabTextStyle={{color: '#444444', fontWeight: 'bold'}}
                activeTabTextStyle={{color: '#888888'}}
                />
                {customStyleIndex === 0 && (
                <Text style={styles.tabContent}> Tab one</Text>
                )}
                {customStyleIndex === 1 && (
                <Text style={styles.tabContent}> Tab two</Text>
                )}
            </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 10,
    },
    headerText: {
      padding: 8,
      fontSize: 14,
      color: '#444444',
      textAlign: 'center',
    },
    tabContent: {
        height: '100%',
        width: '100%',
      color: '#444444',
      fontSize: 18,
      margin: 24,
    },
    seperator: {
      marginHorizontal: -10,
      alignSelf: 'stretch',
      borderTopWidth: 1,
      borderTopColor: '#888888',
      marginTop: 24,
    },
    tabStyle: {
      borderColor: '#D52C43',
    },
    activeTabStyle: {
      backgroundColor: '#D52C43',
    },
});

export default SegmentedControlTest