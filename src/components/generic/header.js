import React from 'react'
import logo from '../../images/logo.png'
import MoreAction from '../myaccount/moreAction'

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="nav-item nav-item-header" href="#">
          <img src={logo} />
        </div>
        <div>
          <nav className="navbar">
            <a href="\home" className="nav-item nav-link">Home</a>

            <a href="\group" className="nav-item nav-link">Group</a>
          </nav>
        </div>
        <MoreAction />
      </nav>
    )
  }
}

export default Header;