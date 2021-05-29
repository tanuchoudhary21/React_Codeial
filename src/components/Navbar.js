import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import ProtoTypes from 'prop-types';

class Navbar extends Component {
    render() {
        return (
        <nav className="nav">
          <div className="left-div">
            <Link to = "/" >
              <img
                className="logo"
                src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="search-container">
            <img
              className="search-icon"
              src="https://image.flaticon.com/icons/png/512/622/622669.png"
              alt="search-icon"
            />
            <input placeholder="Search" />

            <div className="search-results">
              <ul>
                <li className="search-results-row">
                  <img
                    src="https://image.flaticon.com/icons/png/512/3667/3667193.png"
                    alt="avatar-icon"
                  />
                  <span>Lakshay Yadav</span>
                </li>

                <li className="search-results-row" >
                  <img
                    src="https://image.flaticon.com/icons/png/512/3667/3667193.png"
                    alt="avatar-icon"
                  />
                  <span>Manu Choudhary</span>
                </li>
                
              </ul>
            </div>
          </div>
          <div className="right-nav">
            <div className="user">
              <img
                src="https://image.flaticon.com/icons/png/512/3667/3667256.png"
                alt="avatar-icon"
                id="user-dp"
              />

              <span>Tanu Choudhary</span>
            </div>
            <div className="nav-links">
              <ul>
                <li>
                  <Link to = "/login" >LogIn</Link>
                </li>
                <li>
                  <Link to = "/logout" >LogOut</Link>
                </li>
                <li>
                  <Link to = "/signup" >Register</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
}

// Navbar.propTypes = {
//     posts : PropTypes.array.isRequired,
// };

export default Navbar;