import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, ScrollView, Pressable } from 'react-native'
import FileCart from '../../components/FileCart'
import styles from './styles'
import PFiles from '../../data/PFiles'
import { StackScreenProps } from '@react-navigation/stack'
import { Patient, Nav } from '../../Types'
// import { gql, useQuery } from '@apollo/client'
import axios from "axios";
import { useQuery } from "react-query";
import { DB_URL } from "../../global"
import { createIconSetFromFontello } from 'react-native-vector-icons'
import PFilesHeader from '../../components/PFilesHeader'

const usePatientsQuery = () => {
  // fetching patients data
  const PATIENTS_QUERY = `
  {
    patients {
      id
      file_number
      name
      profile_pic_url
      gender
      dateOfBirth
      cat_id
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
      errors {
        field
        message
      }
      files {
        file_number
        patient_id
        createdAt
        updatedAt
        assignee_id
        status
      }
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
    const [PFiles, setPFiles] = useState([]);

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

    useEffect(() => {
      let PFiles: never[] = [];
      !filesError && filesData && filesData.files.files.forEach((file:any) => {
        let PFile = {...file}
        PFile['patient'] = patientsData && patientsData.patients.filter((pat:any) => pat.file_number==file.file_number)[0]
        PFile['services'] = []
        PFiles.push(PFile)
      })
      setPFiles(PFiles);
    }, [filesData, patientsData]);

    return (
        <View style={styles.root}>
            {/* Header */}
            <PFilesHeader/>

            <ScrollView
            style={styles.file_carts}
            showsVerticalScrollIndicator={false}
            >
            {
                filesIsLoading && <Text>Loading..</Text> ||
                !filesError && filesData &&
                PFiles.map((PFile: any) => (
                    <FileCart
                    key={PFile.file_number}
                    file_number={PFile.file_number}
                    cred={PFile.patient}
                    services={PFile.services}
                    navigation={navigation}
                    />
                ))
            }
            </ScrollView>
        </View>
    )
}

export default PFilesScreen
