import React, {Component} from 'react'
import AuthService from "../../services/AuthService";
import Loader from 'react-loader-advanced';
import history from '../../history.js'

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
      if (AuthService.loggedIn()) {

        switch (AuthService.getRole()) {
          case 'admin':
          case 'superadmin':
            return history.push('/admin');
          case 'member':
            if (localStorage.getItem('onboarded') === "false")
              return history.push('/member/onboarding');
            else
              return history.push('/member');
          default:
            return this.setState({ isLoading: false });
        }
      } else {
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
