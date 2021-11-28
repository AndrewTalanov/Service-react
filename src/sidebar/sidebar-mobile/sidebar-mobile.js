import './sidebar-mobile.css';

const SidebarMobile = () => {

  const data = [
    {id: 1, icon: "./images/one.png"},
    {id: 2, icon: "./images/two.png"},
    {id: 3, icon: "./images/three.png"}
  ]

  const items = data.map(item => {
    return (
      <div key={item.id} className="sidebar-mobile-icon">
          <img src={item.icon} alt="one" />
      </div>
    )
  })

  return (
    <div className="sidebar-mobile">
      <div className="sidebar-mobile-icons">
        <div className="sidebar-mobile-button"></div>
        {items}
      </div>
    </div>
  )
}

export default SidebarMobile;