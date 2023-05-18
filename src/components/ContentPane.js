import { useLocation } from 'react-router-dom';

const ContentPane = ({ selectedTaskbarItem }) => {
  const location = useLocation()
  const currentRoute = location.pathname;
  const control = currentRoute.slice(currentRoute.lastIndexOf('/') + 1)

  return (
    <div id="contentPane">
      <h1>Content Pane</h1>
      <h2>Menu: {selectedTaskbarItem}</h2>
      <h2>Control: {control}</h2>
      <h3>Route: {currentRoute}</h3>
    </div>
  )
}

export default ContentPane;