import { actions } from "../store";

const defaultStore = {
  tags: "",
  items: [],
};

export let Rule34Reducer = (state = defaultStore, action) => {
  switch (action.type) {
    case actions.resetRule34:
      return { ...state, items: [] };

    case actions.searchRule34:
      debugger;
      return { ...state, items: action.items };

    default:
      return state;
  }
};
