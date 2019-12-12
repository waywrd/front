import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag';


const GET_USERS = gql`{
    getUsers{
        name
        email
        id
    }
}`



const GetUsers = () => {
    const { loading, data } = useQuery(GET_USERS, {
        pollInterval: 500
    });


    if (loading) {
        return (
            <h1>Loading</h1>
        )
    }
    else {
        const users = data.getUsers.map((user) =>
            <li key={user.id}>{user.name}-{user.email}</li>
        );

        return <ul>{users}</ul>
    }

}



export default GetUsers;