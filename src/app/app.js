import { Component } from 'react';
import SidebarMobile from '../sidebar/sidebar-mobile/sidebar-mobile';
import Header from '../header/header';
import Main from '../main/main';
import Modal from '../modal/modal';
import Sidebar from '../sidebar/sidebar';
import './app.css'
import restData from '../data.json' 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      widthBool: null,
      visibleModal: false,
    }

    this.toggleModal = this.toggleModal.bind(this)
  }

  // включение/выключение модального окна
  toggleModal(bool) {
    this.setState({ visibleModal: bool })
  }

  // отслеживаем ширину экрана 
  resize() {
    this.setState({ widthBool: window.innerWidth > 600 });
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
        {this.state.widthBool && <Sidebar />}
        <div className="content-page">      
          {!this.state.visibleModal && <Header/>}
          {!this.state.visibleModal && <Main toggleModal={this.toggleModal} restData={restData}/>}
          {this.state.visibleModal && <Modal
            toggleModal={this.toggleModal}
            visibleModal={this.state.visibleModal}
          />}
        </div>
        {!this.state.widthBool && !this.state.visibleModal && <SidebarMobile/>}
      </div>
    )
  }
}

export default App;