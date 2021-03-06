import React, { useEffect, useRef, useState } from 'react'
import { View, Text, Keyboard, ScrollView } from 'react-native'
import { SearchBar } from 'react-native-elements'
import styles from './styles'
import SegmentControl from '../../components/SegmentControl'
import HRCard from '../../components/HRCard'
import { HR_Type, Nav } from '../../Types'
import Assignees from '../../data/Assignees'
import { useHrAssigneesQuery } from '../../../libs/generated/graphql'
import { useQuery } from 'react-query'
import axios from 'axios'
import { DB_URL } from '../../global'

const HRScreen = ({ navigation, route }: Nav) => {
    const [text, setText] = useState('')
    const mySearchBar = useRef()

    const focus = () => {
        mySearchBar?.current.blur()
    }

    const segments = [{
        title: 'ALL',
        view: ()=>(<List all={true} navigation={navigation} text={text}/>)
    }, {
        title: 'EMPLOYEE',
        view: ()=>(<List hr_type={HR_Type.Employee} navigation={navigation} text={text}/>)
    }, {
        title: 'DOCTOR',
        view: ()=>(<List hr_type={HR_Type.Doctor} navigation={navigation} text={text}/>)
    }, {
        title: 'STUDENT',
        view: ()=>(<List hr_type={HR_Type.Student} navigation={navigation} text={text}/>)
    }]

    return (
        <View style={styles.root}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Human Resources</Text>
                <SearchBar
                ref={mySearchBar}
                lightTheme
                round={true}
                containerStyle= {{ backgroundColor: 'transparent', borderTopWidth: 0, borderBottomWidth: 0 }}
                inputContainerStyle= {{ backgroundColor: 'white', height: 39 }}
                inputStyle= {{ color: 'black' }}
                placeholder="Name..."
                showCancel
                onChangeText={(txt)=>setText(txt)}
                value={text}
                onPressIn={focus}
                onClear={() => Keyboard.dismiss()}
                />
            </View>

            <SegmentControl
            style={styles.segments}
            segments={segments}
            />

        </View>
    )
}

interface ListProps {
    all?: boolean
    hr_type?: HR_Type
    text: string
    navigation: Nav['navigation']
}

const List = ({ all, hr_type, text, navigation }: ListProps) => {
    // fetching hr_assignees data
    const HR_QUERY = `
    {
        hrAssignees {
            id
            name
            password
            email
            phone_number
            home_number
            home_address
            SSN
            martial_status
            nationality
            profile_pic_url
            hr_type
            updatedAt
            createdAt
        }
    }
  `;
    const { data, isLoading, error } = useQuery("launches", () => {
      return axios({
        url: DB_URL,
        method: "POST",
        data: {
          query: HR_QUERY
        }
      }).then(response => response.data.data);
    });

    const [assignees, setAssignees] = useState([]);
    
    useEffect(() => {
        if(all) {
            setAssignees(data?.hrAssignees)
        } else {
            switch (hr_type) {
                case HR_Type.Employee:
                    setAssignees(data?.hrAssignees?.filter(assignee => assignee.hr_type == HR_Type.Employee))
                    break;
                case HR_Type.Doctor:
                    setAssignees(data?.hrAssignees?.filter(assignee => assignee.hr_type == HR_Type.Doctor))
                    break;
                case HR_Type.Student:
                    setAssignees(data?.hrAssignees?.filter(assignee => assignee.hr_type == HR_Type.Student))
                    break;
                default:
                    break;
            }
        }
    }, [data]);

    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
            {isLoading?
            <Text>Loading..</Text>:
            assignees?.map((assignee: any, index: number) => (
                assignee?.name.toLowerCase().includes(text.toLowerCase()) &&
                <HRCard
                key={assignee?.id}
                assignee={assignee}
                navigation={navigation}
                />
            ))}
            <View style={{ height: 456 }}/>
        </ScrollView>
    )
}

export default HRScreen
