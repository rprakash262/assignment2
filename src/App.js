import { connect } from 'react-redux';

import './App.css';
import Taskbar from './components/Taskbar';
import ControlsPane from './components/ControlsPane';
import ContentPane from './components/ContentPane';

import { ACTIONS } from './reducers/mainReducer';

function App({
  selectMenu,
  taskbarItems,
  allMenuItems,
  controlsPaneView,
  selectedTaskbarItem,
  selectTaskbarItem,
  setTaskbarItem,
  controlsPaneItems,
  tempTaskbarItem,
  // pinnedItems,
  pin,
  unpin,
}) {
  return (
    <div id="layout">
      <Taskbar
        selectMenu={selectMenu}
        taskbarItems={taskbarItems}
        // allMenuItems={allMenuItems}
        setTaskbarItem={setTaskbarItem}
        selectedTaskbarItem={selectedTaskbarItem}
        selectTaskbarItem={selectTaskbarItem}
        tempTaskbarItem={tempTaskbarItem}
        // pinnedItems={pinnedItems}
        pin={pin}
        unpin={unpin}
      />
      <ControlsPane
        controlsPaneView={controlsPaneView}
        taskbarItems={taskbarItems}
        allMenuItems={allMenuItems}
        controlsPaneItems={controlsPaneItems}
        selectedTaskbarItem={selectedTaskbarItem}
        selectTaskbarItem={selectTaskbarItem}
        selectMenu={selectMenu}
      />
      <ContentPane />
    </div>
  );
}

const mapState = state => {
  const {
    controlsPaneView,
    taskbarItems,
    allMenuItems,
    selectedTaskbarItem,
    controlsPaneItems,
    tempTaskbarItem,
    // pinnedItems,
  } = state.main;

  return {
    controlsPaneView,
    taskbarItems,
    allMenuItems,
    selectedTaskbarItem,
    controlsPaneItems,
    tempTaskbarItem,
    // pinnedItems,
  }
}

const mapDispatch = {
  selectMenu: ACTIONS.selectMenu,
  selectTaskbarItem: ACTIONS.selectTaskbarItem,
  setTaskbarItem: ACTIONS.setTaskbarItem,
  pin: ACTIONS.pin,
  unpin: ACTIONS.unpin,
}

export default connect(mapState, mapDispatch)(App);
