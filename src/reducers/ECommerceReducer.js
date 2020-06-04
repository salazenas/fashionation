import { SET_CATALOG } from '../helpers/ActionsConstants';

const initialState = {
  catalog: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case SET_CATALOG:
    return { ...state, catalog: payload }
  default:
    return state
  }
}
