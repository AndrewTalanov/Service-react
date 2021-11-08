import './sidebar-list.css'; 
import SidebarListItem from '../sidebar-list-item/sidebar-list-item';

const SidebarList = () => {
  return (
    <div className="sidebar-list">
      <div className="sidebar-list__active">
        <div className="block-one"></div>
        <div className="block-two"></div>
        <div className="border-one"></div>
        <div className="border-two"></div>
        <div className="sidebar-list__btn"></div>
      </div>
      <div className="sidebar-list-items">
        <SidebarListItem/>
        <div className="sidebar-list-item">
          <img src='./images/one.png' alt="" />
        </div>
        <div className="sidebar-list-item">
          <img src='./images/two.png' alt="" />
        </div>
        <div className="sidebar-list-item">
          <img src='./images/three.png' alt="" />
        </div>
      </div>
    </div>
  )
}

export default SidebarList;