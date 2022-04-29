import { View, Text } from 'react-native'
import React from 'react'
import HREmployeeHeader from '../../components/HREmployeeHeader'
import { Nav } from '../../Types'
import SegmentControl from '../../components/SegmentControl'
import Resume from './Resume'
import Info from './Info'
import Settings from './Settings'
import styles from './styles'

const HREmployeeScreen = ({navigation, route}: Nav) => {
  const assignee = route.params.assignee

  const segments = [
    {
      title: "RESUME",
      view: () => <Resume cv={assignee.cv}/>
    },
    {
      title: "INFO",
      view: () => <Info assignee={assignee}/>
    },
    {
      title: "Settings",
      view: () => <Settings/>
    }
  ]

  return (
    <View style={{ height: '100%' }}>
      <HREmployeeHeader
      navigation={navigation}
      name={assignee.name}
      hr_type={assignee.hr_type}
      phone={assignee.phone_num}
      email={assignee.email}
      profile_pic={assignee.profile_pic}
      />

      <SegmentControl
      style={styles.segment}
      segments={segments}
      />

    </View>
  )
}

export default HREmployeeScreen