const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};

const actionType = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      localStorage.setItem("user", JSON.stringify(action.user));
      return { ...state, user: action.user };
    default:
      return state;
  }
};

export { initialState, actionType, reducer };
