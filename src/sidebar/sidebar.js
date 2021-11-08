import './sidebar.css';
import SidebarList from './sidebar-list/sidebar-list';
import SidebarListItem from './sidebar-list-item/sidebar-list-item';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img className="logo" src="./images/logo.png" alt="logo" />
      <SidebarList/>
      <SidebarListItem/>
    </div>
  )
}

export default Sidebar;