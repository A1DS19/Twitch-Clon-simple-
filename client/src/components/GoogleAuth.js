import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

export class GoogleAuth extends Component {
  state = {
    isSignedIn: null,
  };
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '596152299496-fcthdil3ktik0ve2aeu9e3p6uvniui56.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    this.isSignedIn = this.props.isSignedIn;
    return (
      <div>
        {this.isSignedIn === null ? null : this.isSignedIn === false ? (
          <button onClick={this.onSignInClick} className='ui red google button'>
            {' '}
            <i className='google icon' /> Logearse con Google
          </button>
        ) : (
          this.isSignedIn && (
            <button
              onClick={this.onSignOutClick}
              className='ui red google button'
            >
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

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
