// newsItemsReducer.js

const newsItemsReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_NEWS_ITEM':
        return [...state, action.payload];  // Add a new news item to the state
      case 'DELETE_NEWS_ITEM':
        return state.filter(item => item.id !== action.payload);  // Delete the news item with the matching id
      default:
        return state;  // Return the current state if no action matches
    }
  };
  
  export default newsItemsReducer;
  