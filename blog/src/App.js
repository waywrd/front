import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import "semantic-ui-css/semantic.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./pages/Home";
import Toolbar from "./components/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import AuthContext from "./context/auth-context";
import Auth from "./pages/Auth";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  state = {
    userId: null,
    token: null
  };

  login = (userId, token) => {
    this.setState({
      token: token,
      userId: userId
    });
  };

  render() {
    return (
      <div>
        <AuthContext.Provider
          value={{
            userId: this.state.userId,
            token: this.state.token,
            login: this.login,
            logout: this.logout
          }}
        >
          <ApolloProvider client={client}>
            <Router>
              <Toolbar />
              <SideDrawer />
              <main style={{ marginTop: "84px" }}>
                <Switch>
                  {!this.state.token && <Redirect from="/" to="/auth" exact />}
                  {this.state.token && <Redirect from="/auth" to="/" />}
                  <Route exact path="/" component={Home} />
                  <Route exact path="/auth" component={Auth} />
                </Switch>
              </main>
            </Router>
          </ApolloProvider>
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;
