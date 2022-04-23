import { View, Text, Dimensions, StyleSheet } from 'react-native'
import Pdf from 'react-native-pdf';
import React from 'react'

const Resume = () => {
  const source = {
    uri: 'http://www.africau.edu/images/default/sample.pdf',
    cache: true 
  };

  return (
      <View style={styles.container}>
          <Pdf
          source={source}
          onLoadComplete={(numberOfPages,filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page,numberOfPages) => {
            console.log(`Current page: ${page}`);
          }}
          onError={(error) => {
            console.log(error);
          }}
          onPressLink={(uri) => {
            console.log(`Link pressed: ${uri}`);
          }}
          style={styles.pdf}/>
          <View style={{ height: 323 }}></View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 3,
  },
  pdf: {
      flex:1,
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height,
  }
});

export default Resume