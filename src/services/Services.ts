import { useCreateHrAssigneeMutation, Hr_Type } from '../../libs/generated/graphql'
import { useMutation } from '@apollo/client'

const example = `
const [createHrAssignee] = useCreateHrAssigneeMutation()

createHrAssignee({
    variables: {
        input: {
            name: "Ali Zaart",
            password: "123123",
            email: "alizaart@bau.com",
            phone_number: "70 834 321",
            home_number: "01 788 993",
            home_address: "Beirut, After Dinner",
            SSN: "1234567890",
            martial_status: "married",
            nationality: "Lebanese",
            profile_pic_url: "https://www.bau.edu.lb/BAUUpload/Staff/Images/Science/dr-ali-elzaart.jpg",
            hr_type: Hr_Type.Doctor
        }
    }
})
`





const example_get_hr = `
// fetching hr_assignees data
const HR_QUERY = ``
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
``;
const { data, isLoading, error } = useQuery("launches", () => {
    return axios({
    url: DB_URL,
    method: "POST",
    data: {
        query: HR_QUERY
    }
    }).then(response => response.data.data);
});
`