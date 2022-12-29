import React, { Component } from 'react';
import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';

import './App.css';
import Main from './components/main';
import MenuContent from './components/navmenu/menuContent'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }
  
  openMenu() {
    this.setState({ menuOpen: true })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  render(){
    return(
      <div>
        <div className="Menu-icon">
          <CheeseburgerMenu
            isOpen={this.state.menuOpen}
            closeCallback={this.closeMenu.bind(this)}
            transitionTime={0.5}
            width={300}
            backgroundColor={'#5D5C61'}
            topOffset={0}>
            <MenuContent closeCallback={this.closeMenu.bind(this)}/>
          </CheeseburgerMenu>
          <HamburgerMenu
            isOpen={this.state.menuOpen}
            menuClicked={this.openMenu.bind(this)}
            width={36}
            height={28}
            strokeWidth={2}
            rotate={0}
            color='white'
            borderRadius={1}
            padding={'15px'}
            animationDuration={1.5}
          />
        </div>
        <Main/>
      </div>
    );
  }
}

export default App;
