import { connect } from 'react-redux';

import './App.css';
import Taskbar from './components/Taskbar';
import ControlsPane from './components/ControlsPane';
import ContentPane from './components/ContentPane';

function App({  view}) {
  console.log({view})
  return (
    <div id="layout">
      <Taskbar />
      <ControlsPane />
      <ContentPane />
    </div>
  );
}

const mapState = state => {
  const { view } = state.main;

  return {
    view
  }
}

const mapDispatch = {

}

export default connect(mapState, mapDispatch)(App);
