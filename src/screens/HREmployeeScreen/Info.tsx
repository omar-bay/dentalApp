import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import React from 'react'

const Info = () => {
  const work_info = [{
    title: 'Position',
    data: 'Doctor'
  }, {
    title: 'Work Phone',
    data: '99 999 999'
  }, {
    title: 'Work Email',
    data: 'working@email.com'
  }, {
    title: 'Contracts',
    data: '1'
  }, {
    title: 'Services Done',
    data: '9'
  }, {
    title: 'Last Appraisal',
    data: '15/3/2020'
  }, {
    title: 'Next Appraisal',
    data: '15/2/2022'
  }, {
    title: 'Department',
    data: 'Dentistry'
  }, {
    title: 'Company',
    data: 'BAU'
  }, {
    title: 'Work Location',
    data: 'Main blg. F2'
  }, {
    title: 'Employed Since',
    data: '12/1/2019'
  }]
  const priv_info = [{
    title: 'Name',
    data: 'Omar Bay'
  }, {
    title: 'Home Address',
    data: 'Personal St. Safe Square.'
  }, {
    title: 'Email',
    data: 'me_myself@email.coim'
  }, {
    title: 'Nationality',
    data: 'Lebanese'
  }, {
    title: 'Home Number',
    data: '99 999 999'
  }, {
    title: 'SSN',
    data: '1234567890'
  }, {
    title: 'Birth',
    data: '11/11/2011'
  }, {
    title: 'Status',
    data: 'Single'
  }]

  return (
    <ScrollView
    style={styles.root}
    showsVerticalScrollIndicator={false}
    >
      <View style={styles.left}>
        <Text style={styles.label}>Work Info</Text>
        {work_info.map((inf, index) => (
          <Row
          title={inf.title}
          data={inf.data}
          key={index}
          />
        ))}
      </View>
      <View style={styles.right}>
        <Text style={styles.label}>Private Info</Text>
          {priv_info.map((inf, index) => (
            <Row
            title={inf.title}
            data={inf.data}
            key={index}
            />
          ))}
      </View>
      <View style={{ height: 330 }}></View>
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
    height: 40
  },
  label: {
    fontSize: 18,
    marginLeft: 8,
    marginBottom: 8
  },
  title: {
    flex: 1,
    fontSize: 16,
    backgroundColor: 'white',
    paddingLeft: 5,
    fontWeight: 'bold',
  },
  cred: {
    flex: 1.5,
    fontSize: 16
  }
})