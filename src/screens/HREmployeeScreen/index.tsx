import { View, Text } from 'react-native'
import React from 'react'
import HREmployeeHeader from '../../components/HREmployeeHeader'
import { Nav } from '../../Types'

const HREmployeeScreen = ({navigation, route}: Nav) => {
  return (
    <View>
      <HREmployeeHeader
      navigation={navigation}
      name="Omar Bay"
      hr_type='Student'
      phone="77 777 777"
      email="thisemail2@email.com"
      profile_pic='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'
      />
    </View>
  )
}

export default HREmployeeScreen