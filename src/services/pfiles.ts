import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const endpoint = "http://localhost:4000/graphql"

export const getAssignees = () => {
    const HRAssigneesQuery = `
    {
        hrAssignees {
            email
            updatedAt
            createdAt
            email
            hr_type
            profile_pic_url
            password
            name
            id
        }
    }  
    `;
    const { data, isLoading, error } = useQuery("launches", () => {
        return axios({
            url: endpoint,
            method: "POST",
            data: {
            query: HRAssigneesQuery
            }
        }).then(response => response.data.data);
    });
    return data.hrAssignees
}