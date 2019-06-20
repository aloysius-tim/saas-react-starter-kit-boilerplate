import React, {Component} from 'react'
import AuthService from "../../services/AuthService";

export default function withMemberAuth(AuthComponent) {
  const Auth = new AuthService();

  return class Authenticated extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true
      };
    }

    componentDidMount () {
      if (!AuthService.loggedIn()) {
        console.log('not logged');
        window.location = '/auth/login'
      }
      else {
        let role = AuthService.getRole();

        if (role !== 'member')
          window.location = '/';
        else
          this.setState({ isLoading: false })
      }
    }

    render() {
      return (
        <div>
          {this.state.isLoading ? (
            <div className="loading">Loading&#8230;</div>
          ) : (
            <AuthComponent {...this.props}  auth={Auth} />
          )}
        </div>
      )
    }
  }
}
