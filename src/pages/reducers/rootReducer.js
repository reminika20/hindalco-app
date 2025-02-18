// rootReducer.js

import { combineReducers } from 'redux';
import newsItemsReducer from './newsItemsReducer';  // Import the newsItemsReducer
import tickerMessagesReducer from './tickerMessagesReducer';  // Import the tickerMessagesReducer
// You can import other reducers here if needed

const rootReducer = combineReducers({
  newsItems: newsItemsReducer,  // Mapping state.newsItems to newsItemsReducer
  tickerMessages: tickerMessagesReducer,  // Mapping state.tickerMessages to tickerMessagesReducer
  // Add other reducers here as needed
});

export default rootReducer;
