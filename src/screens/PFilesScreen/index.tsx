import React, { useState } from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native'
import FileCart from '../../components/FileCart'
import styles from './styles'
import PFiles from '../../data/PFiles'
import { StackScreenProps } from '@react-navigation/stack'
import { Patient, Nav, PFile } from '../Types'
// import { gql, useQuery } from '@apollo/client'
import axios from "axios";
import { useQuery } from "react-query";
import { DB_URL } from "../../global"
import { createIconSetFromFontello } from 'react-native-vector-icons'

const usePatientsQuery = () => {
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
  const res = useQuery("pats", () => {
    return axios({
      url: DB_URL,
      method: "POST",
      data: {
        query: PATIENTS_QUERY
      }
    }).then(response => response.data.data);
  });

  return res;
}

const useFilesQuery = () => {
  // fetching files data
  const FILES_QUERY = `
  {
    files {
      file_number
      patient_id
      status
      assignee_id
      createdAt
      updatedAt
    }
  }
  `;
  const res = useQuery("fils", () => {
    return axios({
      url: DB_URL,
      method: "POST",
      data: {
        query: FILES_QUERY
      }
    }).then(response => response.data.data);
  });

  return res;
}

const PFilesScreen = ({navigation, route}: Nav) => {
    const {
      data: filesData,
      error: filesError,
      isLoading: filesIsLoading
    } = useFilesQuery();
    const {
      data: patientsData,
      error: patientsError,
      isLoading: patientsIsLoading
    } = usePatientsQuery();

    !filesError && filesData && console.log(filesData)
    
    return (
        <View style={styles.root}>
            <ScrollView
            style={styles.file_carts}
            showsVerticalScrollIndicator={false}
            >
            {
                PFiles.map((PFile: PFile) => (
                    <FileCart key={PFile.id} cred={PFile.patient} services={PFile.services} navigation={navigation}/>
                ))
            }
            {/* {isLoading ? (
                <Text>Loading..</Text>
              ) : (
                !error &&
                data && (
                  <>
                    {data.patients.map((PFile:any) => (
                      <FileCart
                      key={PFile.id}
                      cred={PFile}
                      services={PFile.services}
                      navigation={navigation}
                      />
                    ))}
                  </>
                )
              )} */}
            </ScrollView>
        </View>
    )
}

export default PFilesScreen
