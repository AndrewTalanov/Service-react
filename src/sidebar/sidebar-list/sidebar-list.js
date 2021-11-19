import './sidebar-list.css'; 
import SidebarListItem from '../sidebar-list-item/sidebar-list-item';
import SidebarListButton from '../sidebar-list-button/sidebar-list-button';

const SidebarList = ({data}) => {

  const items = data.map(item => {
    return (
      <SidebarListItem key={item.id} {...item}/>
    )
  })

  return (
    <div className="sidebar-list">
      <SidebarListButton/>
      <div className="sidebar-list-items">
        {items}
      </div>
    </div>
  )
}

export default SidebarList;