import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logoutUser } from '../actions/auth';
import { searchUsers } from '../actions/search';

class Navbar extends React.Component {
  logOut = () => {
    localStorage.removeItem('token');
    this.props.dispatch(logoutUser());
  };

  handleSearch = (e) => {
    const searchText = e.target.value;

    this.props.dispatch(searchUsers(searchText));
  };

  render() {
    const { auth, results } = this.props;
    return (
      <nav className="nav">
        <div className="left-div">
          <Link to="/">
            <img
              src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="search-container">
          <img
            className="search-icon"
            src="https://image.flaticon.com/icons/png/512/751/751463.png"
            alt="search-icon"
          />
          <input placeholder="Search" onChange={this.handleSearch} />

          {results.length > 0 && (
            <div className="search-results">
              <ul>
                {results.map((user) => (
                  <li className="search-results-row" key={user._id}>
                    <Link to={`/user/${user._id}`}>
                      <img
                        src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                        alt="user-dp"
                      />
                      <span>{user.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {/* RIGHT NAV */}
        <div className="right-nav">
          {auth.isLoggedin && (
            <div className="user">
              <Link to="/settings">
                <img
                  src="https://image.flaticon.com/icons/png/512/924/924915.png"
                  alt="user-dp"
                  id="user-dp"
                />
              </Link>
              <span>{auth.user.name}</span>
            </div>
          )}

          <div className="nav-links">
            <ul>
              {!auth.isLoggedin && (
                <li>
                  <Link to="/login">Log in</Link>
                </li>
              )}

              {auth.isLoggedin && <li onClick={this.logOut}>Log out</li>}

              {!auth.isLoggedin && (
                <li>
                  <Link to="/signup">Register</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    results: state.search.results,
  };
}
export default connect(mapStateToProps)(Navbar);

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// // import ProtoTypes from 'prop-types';

// class Navbar extends Component {
//     render() {
//         return (
//         <nav className="nav">
//           <div className="left-div">
//             <Link to = "/" >
//               <img
//                 className="logo"
//                 src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
//                 alt="logo"
//               />
//             </Link>
//           </div>
//           <div className="search-container">
//             <img
//               className="search-icon"
//               src="https://image.flaticon.com/icons/png/512/622/622669.png"
//               alt="search-icon"
//             />
//             <input placeholder="Search" />

//             <div className="search-results">
//               <ul>
//                 <li className="search-results-row">
//                   <img
//                     src="https://image.flaticon.com/icons/png/512/3667/3667193.png"
//                     alt="avatar-icon"
//                   />
//                   <span>Lakshay Yadav</span>
//                 </li>

//                 <li className="search-results-row" >
//                   <img
//                     src="https://image.flaticon.com/icons/png/512/3667/3667193.png"
//                     alt="avatar-icon"
//                   />
//                   <span>Manu Choudhary</span>
//                 </li>

//               </ul>
//             </div>
//           </div>
//           <div className="right-nav">
//             <div className="user">
//               <img
//                 src="https://image.flaticon.com/icons/png/512/3667/3667256.png"
//                 alt="avatar-icon"
//                 id="user-dp"
//               />

//               <span>Tanu Choudhary</span>
//             </div>
//             <div className="nav-links">
//               <ul>
//                 <li>
//                   <Link to = "/login" >LogIn</Link>
//                 </li>
//                 <li>
//                   <Link to = "/logout" >LogOut</Link>
//                 </li>
//                 <li>
//                   <Link to = "/signup" >Register</Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       );
//     }
// }

// // Navbar.propTypes = {
// //     posts : PropTypes.array.isRequired,
// // };

// export default Navbar;
