import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PFilesScreen from '../screens/PFilesScreen'
import PNoteBook from '../components/PNoteBook'

const Stack = createStackNavigator()

const PFileStackNav = () => {
  return (
    <Stack.Navigator>
        {/* PFiles */}
        <Stack.Screen name="PFilesScreen" component={PFilesScreen}
        options={{
            title: 'Patient Files',
            headerStyle: { backgroundColor: '#d4f4fa' }
        }}
        />

        {/* Patient File */}
        <Stack.Screen name="PNotebook" component={PNoteBook}
        options={{
            title: 'Patient File',
            headerStyle: { backgroundColor: '#d4f4fa' }
        }}
        />
    </Stack.Navigator>
  )
}

export default PFileStackNav