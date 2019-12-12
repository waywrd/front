import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const REGISTER = gql`
mutation Register($name:String!,$email:String!){
    register(
        name:$name,
        email:$email){
            name
        }
}`;


const AddUser = () => {

    const [name, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [registerUser, { data }] = useMutation(REGISTER);

    function submitForm(e) {

        e.preventDefault();

        registerUser({
            variables: {
                name: name,
                email: email,
            }
        })
    }

    return (


        <div>
            <form onSubmit={submitForm}>
                <label>Username</label>
                <input onChange={(e) => setUsername(e.target.value)} />
                <br />

                <label>Email</label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
                <br />

                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
                <br />

                <button type='submit'>Add User</button>
            </form>
        </div>

    );
}



export default AddUser;