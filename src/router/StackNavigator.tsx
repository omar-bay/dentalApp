import React from 'react'
import { View, Text } from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import PFilesScreen from '../screens/PFilesScreen';
import HRScreen from '../screens/HRScreen';
import KnowledgeScreen from '../screens/KnowledgeScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* Home */}
                <Stack.Screen name="HomeScreen" component={HomeScreen}
                options={{ headerShown: false }}
                />

                {/* PFiles */}
                <Stack.Screen name="PFilesScreen" component={PFilesScreen}
                options={{
                    title: 'Patient Files',
                    headerStyle: { backgroundColor: '#d4f4fa' }
                }}
                />

                {/* HR */}
                <Stack.Screen name="HRScreen" component={HRScreen}
                options={{
                    title: 'Human Resources',
                    headerStyle: { backgroundColor: '#d4f4fa' }
                }}
                />

                {/* Knowledge */}
                <Stack.Screen name="KnowledgeScreen" component={KnowledgeScreen}
                options={{
                    title: 'Knowledge Base',
                    headerStyle: { backgroundColor: '#d4f4fa' }
                }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator
