const ADD_NOTE = "ADD_NOTE";
const DELETE_NOTE = "DELETE_NOTE";

const defaultStore = {
  notes: [],
};

export let notesReducer = (state = defaultStore, action) => {
  switch (action.type) {
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    case ADD_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };

    default:
      return state;
  }
};

export const deleteNote = (payload) => ({
  type: DELETE_NOTE,
  payload: payload,
});

export const addNote = (payload) => ({ type: ADD_NOTE, payload: payload });
