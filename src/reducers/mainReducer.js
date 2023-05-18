// import { cloneDeep } from 'lodash';

const SET_TASKBAR_ITEMS = 'main/SET_TASKBAR_ITEMS'
const SET_TEMP_TASKBAR_ITEMS = 'main/SET_TEMP_TASKBAR_ITEMS'
const SET_CONTROLSPANE_VIEW = 'main/SET_CONTROLSPANE_VIEW'
const SET_SELECTED_TASKBAR_ITEM = 'main/SET_SELECTED_TASKBAR_ITEM';
const SET_CONTROLSPANE_ITEMS = 'main/SET_CONTROLSPANE_ITEMS';
// const SET_SELECTED_CONTROSPANE_ITEM = 'main/SET_SELECTED_CONTROSPANE_ITEM';

const setTaskbarItem = items => ({ type: SET_TASKBAR_ITEMS, items });
const setTempTaskbarItem = item => ({ type: SET_TEMP_TASKBAR_ITEMS, item });
const setControlspaneView = view => ({ type: SET_CONTROLSPANE_VIEW, view });
const setSelectedTaskbarItem = item => ({ type: SET_SELECTED_TASKBAR_ITEM, item });
const setControlsPaneItems = items => ({ type: SET_CONTROLSPANE_ITEMS, items });
// const setSelectedControlsPaneItem = item => ({ type: SET_SELECTED_CONTROSPANE_ITEM, item });

const mainItems = {
  'file': ['create', 'open', 'share', 'download', 'print'],
  'edit': ['undo', 'redo', 'cut', 'paste', 'select_all'],
  'insert': ['image', 'video', 'link', 'table', 'drawing', 'chart', 'code'],
  'format': ['text', 'paragraph', 'table', 'alignment', 'borders', 'lists']
}

const defaultState = {
  controlsPaneView: '',
  taskbarItems: Object.keys(mainItems),
  allMenuItems: Object.keys(mainItems),
  tempTaskbarItem: '',
  // pinnedItems: [],
  selectedTaskbarItem: '',
  controlsPaneItems: [],
  selectedControlsPaneItem: ''
};

const init = () => dispatch => {
}

const selectMenu = () => dispatch => {
  // dispatch(setSelectedTaskbarItem(''));
  dispatch(setControlsPaneItems(Object.keys(mainItems)));
  dispatch(setTempTaskbarItem(''));
  dispatch(setControlspaneView('menus'));
}

const selectTaskbarItem = item => (dispatch, getState) => {
  const { taskbarItems } = getState().main;
  const controlsPaneItems = mainItems[item];

  dispatch(setTempTaskbarItem(''));

  if (!taskbarItems.includes(item)) {
    dispatch(setTempTaskbarItem(item));
  }

  dispatch(setSelectedTaskbarItem(item));
  dispatch(setControlsPaneItems(controlsPaneItems));
  dispatch(setControlspaneView('controls'));
}

// const selectControlsPaneItem = (e, item) => dispatch => {
//   e.preventDefault();
//   dispatch(setSelectedControlsPaneItem(item))
// }

const pin = item => (dispatch, getState) => {
  const { taskbarItems } = getState().main;

  dispatch(setTaskbarItem([...taskbarItems, item]));
  dispatch(setTempTaskbarItem(''));
}

const unpin = item => (dispatch, getState) => {
  const { taskbarItems } = getState().main;

  console.log({item})

  dispatch(setTaskbarItem(taskbarItems.filter(i => i !== item)));
}

export const ACTIONS = {
  init,
  selectMenu,
  selectTaskbarItem,
  setTaskbarItem,
  pin,
  unpin,
  // selectControlsPaneItem,
}

function mainReducer (state = defaultState, action) {
  switch (action.type) {
    case SET_TASKBAR_ITEMS:
      return Object.assign({}, state, { taskbarItems: action.items });
    case SET_TEMP_TASKBAR_ITEMS:
      return Object.assign({}, state, { tempTaskbarItem: action.item });
    case SET_CONTROLSPANE_VIEW:
      return Object.assign({}, state, { controlsPaneView: action.view });
    case SET_SELECTED_TASKBAR_ITEM:
      return Object.assign({}, state, { selectedTaskbarItem: action.item });
    case SET_CONTROLSPANE_ITEMS:
      return Object.assign({}, state, { controlsPaneItems: action.items });
    // case SET_SELECTED_CONTROSPANE_ITEM:
    //   return Object.assign({}, state, { selectedControlsPaneItem: action.item });
    default:
      return state
  }
}

export default mainReducer;