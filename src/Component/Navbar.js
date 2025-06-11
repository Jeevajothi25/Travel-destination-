import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";

class Navbar extends Component {
  state = { 
    clicked: false,
    showSignUp: false
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  toggleSignUp = () => {
    this.setState({ showSignUp: !this.state.showSignUp });
  };

  render() {
    return (
      <>
        <nav className="NavbarItems">
          <h1 className="navbar-logo">Trippy</h1>

          <div className="menu-icons" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={item.cName} to={item.url}>
                    <i className={item.icon}></i>{item.title}
                  </Link>
                </li>
              );
            })}
            <button className="nav-links-mobile" onClick={this.toggleSignUp}>Sign Up</button>
          </ul>
          <button className="nav-btn" onClick={this.toggleSignUp}>Sign Up</button>
        </nav>

        <SignUp 
          isOpen={this.state.showSignUp} 
          onClose={this.toggleSignUp}
        />
      </>
    );
  }
}

export default Navbar;