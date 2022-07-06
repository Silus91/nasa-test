export const storeReducer = (state, action) => {
    switch (action.type) {
      case "FETCH_DATA":
        return { ...state, data: action.payload };
        case "LOADING_UI":
          return { ...state, loading: true };
      case "STOP_LOADING_UI":
        return {
          ...state,
          loading: false,
        };
      default:
        return state;
    }
  };
  