export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

const initialState = {
  isLoading: false,
  personData: null,
  personError: null
};

export const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
        personData: null,
        personError: null
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        personData: action.payload,
        personError: null
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        personData: null,
        personError: action.payload
      };
    default:
      return state;
  }
};
