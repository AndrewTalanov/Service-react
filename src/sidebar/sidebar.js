import './sidebar.css';
import SidebarList from './sidebar-list/sidebar-list';

const Sidebar = () => {

  const data = [
    {id: 1, icon: "./images/one.png"},
    {id: 2, icon: "./images/two.png"},
    {id: 3, icon: "./images/three.png"}
  ]

  return (
    <div className="sidebar">
      <img className="logo" src="./images/logo.png" alt="logo" />
      <SidebarList data={data}/>
    </div>
  )
}

export default Sidebar;