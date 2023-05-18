import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const linkStyle = {
  display: "flex",
  textDecoration: "none",
  color: '#fff',
  width: '100%',
  height: '45px',
  justifyContent: 'center',
  alignItems: 'center',
  textTransform: 'capitalize',
  borderBottom: '1px solid #413e3e'
};

const ControlsPane = ({
  controlsPaneView,
  taskbarItems,
  allMenuItems,
  controlsPaneItems,
  selectedTaskbarItem,
  selectTaskbarItem,
  selectMenu,
}) => {
  return (
    <div
      id="controlsPane"
      style={{ display: controlsPaneItems.length > 0 ? 'block' : 'none' }}
    >
      {controlsPaneView === 'controls' && (
        <span id="backBtn" onClick={selectMenu}>
          <AiOutlineArrowLeft />
          &nbsp;&nbsp;{selectedTaskbarItem}
        </span>
      )}
      {controlsPaneView === 'menus' && allMenuItems.map(item => (
        <div
          key={item}
          className="linkStyle"
          onClick={() => selectTaskbarItem(item)}
        >
          {item}
        </div>
      ))}
      {controlsPaneView === 'controls' &&
       controlsPaneItems.length > 0 &&
       controlsPaneItems.map(item => (
        <Link
          key={item}
          style={linkStyle}
          to={`/${selectedTaskbarItem}/${item}`}
        >
          {item}
        </Link>
      ))}
    </div>
  )
}

export default ControlsPane;