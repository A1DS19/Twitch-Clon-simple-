import React, { Component } from 'react';

export class GoogleAuth extends Component {
  state = {
    isSignedIn: null,
  };
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: 'Buscar en dkt',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    this.isSignedIn = this.state.isSignedIn;
    return (
      <div>
        {this.isSignedIn === null ? null : this.isSignedIn === false ? (
          <button onClick={this.onSignIn} className='ui red google button'>
            {' '}
            <i className='google icon' /> Logearse con Google
          </button>
        ) : (
          this.isSignedIn && (
            <button onClick={this.onSignOut} className='ui red google button'>
              {' '}
              <i className='google icon' /> Deslogearse
            </button>
          )
        )}
      </div>
    );
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
