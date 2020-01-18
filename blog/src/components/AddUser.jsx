import React, { useState } from 'react'
import { Mutation } from "react-apollo";
import gql from 'graphql-tag';
import { Button, Form } from 'semantic-ui-react'

const REGISTER = gql`
mutation Register($name:String!,$email:String!,$password:String!){
    register(
        name:$name,
        email:$email
        password:$password
        ){
            name
        }
}`;


const AddUser = () => {

    const [name, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')




    return (
        <Mutation mutation={REGISTER}>
            {(registerUser, { data }) => (
                <div className="form-container">
                    <Form onSubmit={e => {
                        e.preventDefault();

                        registerUser({
                            variables: {
                                name: name,
                                email: email,
                                password: password
                            }
                        })

                    }}>
                        <Form.Field>
                            <label>Username</label>
                            <input onChange={(e) => setUsername(e.target.value)} />
                        </Form.Field>
                        <Form.Field>
                            <label>Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} />
                        </Form.Field>
                        <Button type='submit'>Add user</Button>
                    </Form>

                </div>
            )}
        </Mutation>

    );
}



export default AddUser;