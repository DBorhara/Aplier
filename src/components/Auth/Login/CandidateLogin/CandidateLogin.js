import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

class CandidateLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isCandidateLoggedIn: false,
    };
  }

  async componentDidMount() {
    try {
      await Auth.currentUserInfo();
    } catch (error) {
      console.log(error);
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { isCandidateLoggedIn, email, password } = this.state;
    try {
      let signedIn = await Auth.signIn({
        username: email,
        password: password,
      });

      if (isCandidateLoggedIn === false) {
        await signedIn;
        this.setState({
          isCandidateLoggedIn: true,
        });

        this.props.history.push('/positions');
        window.location.reload();
      } else if (isCandidateLoggedIn === true) {
      } else {
        await Auth.confirmSignIn(email);
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { isCandidateLoggedIn } = this.state;

    if (isCandidateLoggedIn) {
      return null;
    } else {
      return (
        <div>
          <div className="logInContainer">
            <img
              className="loginGif"
              src="https://gophonebox.com/images/Phobby_WaveAnimation.gif"
              alt="CandidateImage"
              type="image"
            />{' '}
            <br />
            <form onSubmit={this.handleSubmit}>
              <label className="Clabel">Email Address</label>
              <input
                className="Cinput"
                value={this.email}
                onChange={event => this.setState({ email: event.target.value })}
                type="text"
              />
              <br /> <br />
              <label className="Clabel">Password</label>
              <input
                className="Cinput"
                value={this.password}
                onChange={event =>
                  this.setState({ password: event.target.value })
                }
                type="password"
              />
              <br /> <br />{' '}
              <button className="customeButton" type="submit">
                Login!
              </button>{' '}
            </form>
          </div>
        </div>
      );
    }
  }
}

export default CandidateLogin;
