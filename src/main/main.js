import MainCardList from './main-card-list/main-card-list';
import './main.css';

const Main = ({toggleModal}) => {
  
  const data = [
    {id: 1, src: "./images/restaurant_1.png", name: "Полли", adress: "Молодогвардейцев, 84", time: "12:00 - 22:00"},
    {id: 2, src: "./images/restaurant_1.png", name: "Vолли", adress: "Ленина, 84", time: "12:00 - 22:00"},
    {id: 3, src: "./images/restaurant_1.png", name: "Молли", adress: "Молодогвардейцев, 84", time: "12:00 - 22:00"},
    {id: 4, src: "./images/restaurant_1.png", name: "Колли", adress: "Молодогвардейцев, 84", time: "12:00 - 22:00"},
    {id: 5, src: "./images/restaurant_1.png", name: "Толли", adress: "Молодогвардейцев, 84", time: "12:00 - 22:00"},
    {id: 6, src: "./images/restaurant_1.png", name: "Толли", adress: "Молодогвардейцев, 84", time: "12:00 - 22:00"},
    {id: 7, src: "./images/restaurant_1.png", name: "Толли", adress: "Молодогвардейцев, 84", time: "12:00 - 22:00"},
    {id: 8, src: "./images/restaurant_1.png", name: "Толли", adress: "Молодогвардейцев, 84", time: "12:00 - 22:00"},
    {id: 9, src: "./images/restaurant_1.png", name: "Толли", adress: "Молодогвардейцев, 84", time: "12:00 - 22:00"},
    {id: 10, src: "./images/restaurant_1.png", name: "Толли", adress: "Молодогвардейцев, 84", time: "12:00 - 22:00"},
    {id: 11, src: "./images/restaurant_1.png", name: "Толли", adress: "Молодогвардейцев, 84", time: "12:00 - 22:00"},
    {id: 12, src: "./images/restaurant_1.png", name: "Толли", adress: "Молодогвардейцев, 84", time: "12:00 - 22:00"},
    {id: 13, src: "./images/restaurant_1.png", name: "Толли", adress: "Молодогвардейцев, 84", time: "12:00 - 22:00"},
    {id: 14, src: "./images/restaurant_1.png", name: "Толли", adress: "Молодогвардейцев, 84", time: "12:00 - 22:00"},
    {id: 15, src: "./images/restaurant_1.png", name: "Толли", adress: "Молодогвардейцев, 84", time: "12:00 - 22:00"},
    {id: 16, src: "./images/restaurant_1.png", name: "Толли", adress: "Молодогвардейцев, 84", time: "12:00 - 22:00"},
    {id: 17, src: "./images/restaurant_1.png", name: "Толли", adress: "Молодогвардейцев, 84", time: "12:00 - 22:00"},
    {id: 18, src: "./images/restaurant_1.png", name: "Толли", adress: "Молодогвардейцев, 84", time: "12:00 - 22:00"},
  ]
  
  return (
    <div className="main">
      <MainCardList toggleModal={toggleModal} getId={id => console.log(id)} data={data}/>
    </div>
  )
}

export default Main;