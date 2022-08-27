import { actions } from "../store";

const defaultStore = {
  theme: "night",
};

export let themeReducer = (state = defaultStore, action) => {
  switch (action.type) {
    case actions.switchTheme:
      return { ...state, theme: action.payload };

    default:
      return state;
  }
};
