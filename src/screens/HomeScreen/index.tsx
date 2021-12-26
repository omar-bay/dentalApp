import React from 'react'
import { View, Text } from 'react-native'
import HomeHeader from '../../components/HomeHeader'
import AppCart from '../../components/AppCart'
import Apps from './Apps'
import styles from './styles'
import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
};
type Nav = StackScreenProps<RootStackParamList, 'Profile'>;

const HomeScreen = ({ navigation, route }: Nav) => {

    return (
        <View>
            {/* header */}
            <HomeHeader />

            {/* body */}
            <View style={styles.body}>
                {/* Apps */}
                <View style={styles.apps}>
                    {
                        Apps.map(app => (
                            <View key={app.id} style={styles.appcart}>
                                <AppCart key={app.id} cred={app} navigation={navigation} />
                            </View>
                        ))
                    }
                </View>
            </View>

        </View>
    )
}

export default HomeScreen
