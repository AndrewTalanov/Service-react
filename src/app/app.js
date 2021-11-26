import { Component } from 'react';

import Header from '../header/header';
import Main from '../main/main';
import Modal from '../modal/modal';
import Sidebar from '../sidebar/sidebar';
import './app.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null,
    }
  }

  resize() {
    this.setState({ width: window.innerWidth > 600 });
  }
  
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this));
  }

  render() {
    return (
      <div className="app">
        {this.state.width && <Sidebar />}
        <div className="content-page">
          <Header />
          <Main
          // onModal={onModal}
          />
          <Modal
          // modal={modal}
          // active = {modalActive} 
          // setActive = {setModalActive}
          />
        </div>
      </div>
    )
  }
}

export default App;