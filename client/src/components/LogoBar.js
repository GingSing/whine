import React, { Component } from 'react';

class LogoBar extends Component{
  constructor(props){
    super(props);
    this.dropdown=this.dropdown.bind(this);

    this.state={
      dropdown: false
    }
  }

  dropdown(){
    this.setState({
      dropdown: !this.state.dropdown
    })
  }


  render(){
    return(
      <div className="logo-bar">
        <div className="logo-text-wrapper">
          <h3 className="logo"> Whine </h3>
          <button onClick={this.dropdown} className="options"> V </button>
        </div>
      </div>
    );
  }
}

//put logobar css in here from home
export default LogoBar;
