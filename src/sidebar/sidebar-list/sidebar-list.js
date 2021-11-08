import './sidebar-list.css'; 
import SidebarListItem from '../sidebar-list-item/sidebar-list-item';
import SidebarListButton from '../sidebar-list-button/sidebar-list-button';

const SidebarList = () => {
  return (
    <div className="sidebar-list">
      <SidebarListButton/>
      <SidebarListItem/>
    </div>
  )
}

export default SidebarList;