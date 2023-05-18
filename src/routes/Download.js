const Download = ({ menuItem, control, currentRoute }) => {
  return (
    <div>
      <h1>Content Pane</h1>
      <h2>Menu: {menuItem}</h2>
      <h2>Control: {control}</h2>
      <h3>Route: {currentRoute}</h3>
    </div>
  )
}

export default Download;