import { View, Text } from 'react-native'
import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import PFilesScreen from '../screens/PFilesScreen'
import KnowledgeScreen from '../screens/KnowledgeScreen'

const Stack = createStackNavigator()

const KBStackNav = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      gestureEnabled: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
    >
        {/* Knowledge */}
        <Stack.Screen name="KnowledgeScreen" component={KnowledgeScreen}
        options={{
            headerShown: false
        }}
        />

    </Stack.Navigator>
  )
}

export default KBStackNav