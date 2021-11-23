import Header from '../header/header';
import Main from '../main/main';
import Sidebar from '../sidebar/sidebar';
import './app.css'


let width = null;

function getWidth() {
  width = document.body.clientWidth;
  console.log(width);
  return width;
}

function App() {
  getWidth();
  return (
    <div className="app">
      {width > 600 && <Sidebar/>}
      <div className="content-page">
        <Header/>
        <Main/>
      </div>
    </div>
  );
}

export default App;