import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const Info = () => {
  return (
    <ScrollView
    style={styles.root}
    showsVerticalScrollIndicator={false}
    >
      <View style={styles.left}>
        <Text style={styles.label}>Work Info</Text>
        <Row
        title="Position"
        data="Doctor"
        />
        <Row
        title="Work Phone"
        data="999 99 999 99"
        />
        <Row
        title="Work Email"
        data="adminperson@email.com"
        />
        <Row
        title="Contracts"
        data="1"
        />
        <Row
        title="Services Done"
        data="9"
        />
        <Row
        title="Last Appraisal"
        data="15/3/2020"
        />
        <Row
        title="Next Appraisal"
        data="9/12/2023"
        />
        <Row
        title="Department"
        data="Dentistry"
        />
        <Row
        title="Company"
        data="BAU"
        />
        <Row
        title="Work Location"
        data="Main blg. F2"
        />
        <Row
        title="Employed Since"
        data="12/1/2018"
        />
      </View>
      <View style={styles.right}>
        <Text style={styles.label}>Private Info</Text>
          <Row
          title="Name"
          data="Omar Bay"
          />
          <Row
          title="Home Address"
          data="Personal St. Safe Square. One Blg"
          />
          <Row
          title="Email"
          data="adminperson@email.com"
          />
          <Row
          title="Nationality"
          data="Lebanese"
          />
          <Row
          title="Home Number"
          data="99 999 999"
          />
          <Row
          title="SSN"
          data="123456789"
          />
          <Row
          title="Birth"
          data="9/12/1998"
          />
          <Row
          title="Status"
          data="Single"
          />
      </View>
    </ScrollView>
  )
}

interface RowProps {
  title: string
  data: string
}

const Row = ({ title, data }: RowProps) => {
  return (
    <View style={styles.rowContainer}>
      <Text
      style={styles.title}
      numberOfLines={1}
      >{title}</Text>
      <Text
      style={styles.cred}
      numberOfLines={1}
      >{data}</Text>
    </View>
  )
}

export default Info

const styles = StyleSheet.create({
  root: {
    height: '60%'
  },
  left: {
    width: '80%',
    alignSelf: 'center',
  },
  right: {
    marginTop: 30,
    width: '80%',
    alignSelf: 'center',
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderBottomWidth: 0.5,
    paddingVertical: 8
  },
  label: {
    fontSize: 18,
    marginLeft: 8
  },
  title: {
    flex: 1,
    fontSize: 16,
    backgroundColor: 'white',
    borderRadius: 50,
    paddingLeft: 5,
    fontWeight: 'bold',
  },
  cred: {
    flex: 1.5,
    fontSize: 16
  }
})