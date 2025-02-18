// tickerMessagesReducer.js

const tickerMessagesReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TICKER_MESSAGE':
        return [...state, action.payload];  // Add a new ticker message to the state
      case 'DELETE_TICKER_MESSAGE':
        return state.filter((message, index) => index !== action.payload);  // Delete the ticker message at the given index
      default:
        return state;  // Return the current state if no action matches
    }
  };
  
  export default tickerMessagesReducer;
  