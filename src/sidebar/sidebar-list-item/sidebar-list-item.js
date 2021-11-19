import './sidebar-list-item.css';

const SidebarListItem = (props) => {
  return (
      <div className="sidebar-list-item">
        <img src={props.icon} alt="" />
      </div>
  )
}

export default SidebarListItem;