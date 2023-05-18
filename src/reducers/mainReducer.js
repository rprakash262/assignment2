// import { cloneDeep } from 'lodash';

const TOGGLE_LOADING_DATA = 'main/TOGGLE_LOADING_DATA';

const toggleLoadingData = bool => ({ type: TOGGLE_LOADING_DATA, loadingData: bool });

const defaultState = {
  view: 'main',
};

const init = () => dispatch => {
}

export const ACTIONS = {
  init,
}

function mainReducer (state = defaultState, action) {
  switch (action.type) {
    case TOGGLE_LOADING_DATA:
      return Object.assign({}, state, { loadingData: action.loadingData});
    default:
      return state
  }
}

export default mainReducer;