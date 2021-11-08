import './sidebar.css';
import SidebarList from './sidebar-list/sidebar-list';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img className="logo" src="./images/logo.png" alt="logo" />
      <SidebarList/>
    </div>
  )
}

export default Sidebar;