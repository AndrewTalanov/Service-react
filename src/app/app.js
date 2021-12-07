import { Component } from 'react'
import SidebarMobile from '../sidebar/sidebar-mobile/sidebar-mobile'
import Header from '../header/header'
import Main from '../main/main'
import Modal from '../modal/modal'
import Sidebar from '../sidebar/sidebar'
import './app.css'
import restData from '../data.json' 

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      widthBool: null,
      visibleModal: false,
      openCard: 0,
      dataOpenCard: {},
      term: ''
    }

    this.toggleModal = this.toggleModal.bind(this)
    this.isOpenCard = this.isOpenCard.bind(this)
    this.isDataOpenCard = this.isDataOpenCard.bind(this)
    this.searchEmp = this.searchEmp.bind(this)
    this.onUpdateSearch = this.onUpdateSearch.bind(this)
  }

  // изменение состояния значения строки поиска
  onUpdateSearch(term) {
    this.setState({ term })
  }
  // поиск по названию карточки
  searchEmp(items, term){
    if (term.lenght === 0) {
      return items
    } 

    return items.filter(item => {
      return item.name.toLowerCase().indexOf(term) > -1 
    })
  }

  // включение/выключение модального окна
  toggleModal(bool) {
    this.setState({ visibleModal: bool })
  }

  // получаем id карточки, которую надо раскрыть
  isOpenCard(id) {
    this.setState({ openCard: id })

    setTimeout( ()=> {
      this.isDataOpenCard()
    })
  }
  // находим данные карточки в массиве
  isDataOpenCard() {
    this.setState({
      dataOpenCard: restData.restorans.find(item => {
        if (item.id === this.state.openCard) {
          return item
        }
      })
    })
  }

  // отслеживаем ширину экрана 
  resize() {
    this.setState({ widthBool: window.innerWidth > 600 })
  } 
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this))
    this.resize()
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this))
  }

  render() {
    const visibleData = this.searchEmp(restData.restorans, this.state.term)

    return (
      <div className="app">
        {this.state.widthBool && <Sidebar/>}
        <div className="content-page">      
          {!this.state.visibleModal && <Header 
            onUpdateSearch={this.onUpdateSearch}/>}

          {!this.state.visibleModal && <Main
            toggleModal={this.toggleModal}
            isOpenCard={this.isOpenCard}
            visibleData={visibleData}/>}

          {this.state.visibleModal && <Modal
            toggleModal={this.toggleModal}
            visibleModal={this.state.visibleModal}
            dataOpenCard={this.state.dataOpenCard}
          />}
        </div>
        {!this.state.widthBool && !this.state.visibleModal && <SidebarMobile/>}
      </div>
    )
  }
}

export default App;