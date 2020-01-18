import React, { Component } from 'react'
import gql from 'graphql-tag';
import { ApolloConsumer } from 'react-apollo';
import AuthContext from '../context/auth-context'
import { Button, Form } from 'semantic-ui-react'

const LOGIN = gql`
   query login($email:String!,$password:String!){
       login(email:$email,password:$password){
        userId
        token
       }
    }
`

class Auth extends Component {
    static contextType = AuthContext;
    constructor(props) {
        super(props);

        this.emailE = React.createRef();
        this.passwordE = React.createRef();
    }


    render() {
        return (
            <ApolloConsumer>{

                client => (
                    <Form onSubmit={async (e) => {
                        e.preventDefault()
                        const { data } = await client.query({
                            query: LOGIN,
                            variables: { email: this.emailE.current.value, password: this.passwordE.current.value }
                        });
                        this.context.login(data.login.userId, data.login.token);
                    }}>
                        <Form.Field>
                            <label>Username</label>
                            <input type="text" ref={this.emailE} />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input type="password" ref={this.passwordE} />
                        </Form.Field>
                        <Button type='submit'>Login</Button>
                    </Form>
                )
            }

            </ApolloConsumer>
        )
    }
}

export default Auth;

