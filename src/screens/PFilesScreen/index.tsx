import React from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native'
import FileCart from '../../components/FileCart'
import styles from './styles'
import PFiles from '../../data/PFiles'
import { StackScreenProps } from '@react-navigation/stack'
import { Patient, Nav, PFile } from '../Types'
import { usePatientsQuery } from '../../../libs/generated/graphql'
// import { gql, useQuery } from '@apollo/client'
import axios from "axios";
import { useQuery } from "react-query";

const PFilesScreen = ({navigation, route}: Nav) => {
    // fetching patients data
    const PATIENTS_QUERY = `
    {
      patients {
        id
        file_number
        name
        gender
        dateOfBirth
        cat_id
        profile_pic_url
        createdAt
        updatedAt
      }
    }
  `;
    const { data, isLoading, error } = useQuery("launches", () => {
      return axios({
        url: "http://192.168.18.214:4000/graphql",
        method: "POST",
        data: {
          query: PATIENTS_QUERY
        }
      }).then(response => response.data.data);
    });
    console.log(data)
    // const {
    //     data: patientsData,
    //     loading: isPatientsLoading,
    //     error: patientsError,
    // } = usePatientsQuery();
    
    return (
        <View style={styles.root}>
            <ScrollView
            style={styles.file_carts}
            showsVerticalScrollIndicator={false}
            >
            {/* {
                PFiles.map((PFile: PFile) => (
                    <FileCart key={PFile.id} cred={PFile.patient} services={PFile.services} navigation={navigation}/>
                ))
            } */}
            {/* {isPatientsLoading ? (
                <Text>Loading..</Text>
              ) : (
                !patientsError &&
                patientsData && (
                  <>
                    {patientsData.patients.map((PFile) => (
                      <Text>{PFile}</Text>
                    ))}
                  </>
                )
              )} */}
            </ScrollView>
        </View>
    )
}

export default PFilesScreen
