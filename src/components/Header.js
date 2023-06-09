import React from "react";
import "../styles/Header.css"

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }

  render() {
    return (
      <div id="header">
        <span className="header-title">
          {"Winston C. Dennis-Masi"}
        </span>
        <div className="header-desc">
          I'm a student at the University of Essex based in Colchester.I have great
          interest in full-stack development, artificial intelligence,
          game development and everything to do with computers.
        </div>
        <a href="mailto:winstondennismasi@gmail.com" className="header-contact">
          {"Email"}
        </a>
      </div>

    );
  }
}

export default Header;

