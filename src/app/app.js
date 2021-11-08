import Header from '../header/header';
import Main from '../main/main';
import Sidebar from '../sidebar/sidebar';
import './app.css'

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <div className="content-page">
        <Header/>
        <Main/>
      </div>
    </div>
  );
}

export default App;