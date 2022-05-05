import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNav from './BottomTabNav';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
    ApolloClient,
    ApolloProvider,
    HttpLink,
    InMemoryCache,
    from
} from '@apollo/client';
import { onError } from '@apollo/client/link/error/'
import { QueryClient, QueryClientProvider } from 'react-query';
import { DB } from '@env'

import PFileStackNav from './PFileStackNav';
import HRStackNav from './HRStackNav';
import KBStackNav from './KBStackNav';

import IconPF from 'react-native-vector-icons/Ionicons'
import IconHR from 'react-native-vector-icons/Feather'
import IconKB from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator()
const client = new ApolloClient({
    uri: DB,
    cache: new InMemoryCache(),
    credentials: 'include',
  });
const queryClient = new QueryClient()

const Router = () => {
    return (
        <NavigationContainer>
            <ApolloProvider client={client}>
            <QueryClientProvider client={queryClient}>

            <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: {fontSize: 18},
                tabBarActiveTintColor: 'cyan',
                tabBarStyle: { backgroundColor: '#e9f9fc' },
                tabBarHideOnKeyboard: true
            }}
            >
                <Tab.Screen
                name="PFiles"
                component={PFileStackNav}
                options={{
                    headerShown: false,
                    tabBarIcon: (({color}) => <IconPF name="file-tray-full-outline" color={color} size={25} />)
                }}
                />
                <Tab.Screen
                name="HR"
                component={HRStackNav}
                options={{
                    headerShown: false,
                    tabBarIcon: (({color}) => <IconHR name="users" color={color} size={25} />)
                }}
                />
                <Tab.Screen
                name="Knowledge"
                component={KBStackNav}
                options={{
                    headerShown: false,
                    tabBarIcon: (({color}) => <IconKB name="brain" color={color} size={25} />)
                }}
                />
            </Tab.Navigator>

            </QueryClientProvider>
            </ApolloProvider>
        </NavigationContainer>
    )
}

export default Router
