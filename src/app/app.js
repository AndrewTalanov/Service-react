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
      visibleModal: false
    }

    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal(bool) {
    this.setState({ visibleModal: bool })
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
            toggleModal={this.toggleModal}
          />
          <Modal
            toggleModal={this.toggleModal}
            visibleModal={this.state.visibleModal}
          />
        </div>
      </div>
    )
  }
}

export default App;