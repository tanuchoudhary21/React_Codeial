import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { startSingup, signup, clearAuthState } from '../actions/auth';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      confirmPassword: '',
    };
  }

  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }
  

  handleInputChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, name } = this.state;

    if (email && password && confirmPassword && name) {
      this.props.dispatch(startSingup());
      this.props.dispatch(signup(email, password, confirmPassword, name));
    }
  };

  render() {
    const { inProgress, error, isLoggedin } = this.props.auth;

    if(isLoggedin) {
      return <Redirect to = '/' />;
    }

    return (
      <form className="login-form">
        <span className="login-signup-header"> Signup</span>
        {error && <div className="alert error-dailog">{error}</div>}
        <div className="field">
          <input
            placeholder="Name"
            type="text"
            required
            onChange={(e) => this.handleInputChange('name', e.target.value)}
          />
        </div>
        <div className="field">
          <input
            placeholder="Email"
            type="email"
            required
            onChange={(e) => this.handleInputChange('email', e.target.value)}
          />
        </div>
        <div className="field">
          <input
            placeholder="Confirm password"
            type="password"
            required
            onChange={(e) =>
              this.handleInputChange('confirmPassword', e.target.value)
            }
          />
        </div>
        <div className="field">
          <input
            placeholder="Password"
            type="password"
            required
            onChange={(e) => this.handleInputChange('password', e.target.value)}
          />
        </div>
        <div className="field">
          <button onClick={this.onFormSubmit} disabled={inProgress}>
            Signup
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(Signup);



// import React, { Component } from 'react';

// class Signup extends Component {
//   render() {
//     return (
//       <form className="login-form" action="">
//         <span className="login-signup-header">Sign Up</span>
//         <div className="field">
//             <input type="text" placeholder = "Your Name" required />
//         </div>
//         <div className="field">
//             <input type="email" placeholder = "Email" required />
//         </div>
//         <div className="field">
//             <input type="password" placeholder = "Password" required />
//         </div>
//         <div className="field">
//             <input type="password" placeholder = "Confirm Password" required />
//         </div>
//         <div className="field">
//             <button>Sign Up</button>
//         </div>
//       </form>
//     );
//   }
// }

// export default Signup;
