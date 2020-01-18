import React from 'react'
import gql from 'graphql-tag';
import '../styles/userinfo.css'
import { Query } from 'react-apollo';


const GET_USERS = gql`{
    getUsers{
        name
        email
        id
    }
}`
const GetUsers = () => {
    return (
        <Query query={GET_USERS} pollInterval={3000}>{
            ({ loading, data }) => {
                if (loading) {
                    return <h1>Hello</h1>
                }
                console.log(data);
                return data.getUsers.map(p => {
                    return <h1 key={p.id}>{p.name}</h1>
                })




            }
        }

        </Query>
    )
}

export default GetUsers;