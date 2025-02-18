// Import necessary functions and reducers
import { createStore, combineReducers } from 'redux';
import newsItemsReducer from './reducers/newsItemsReducer'; // Assuming you have this file for the newsItemsReducer
import tickerMessagesReducer from './reducers/tickerMessagesReducer'; // Assuming you have this file for the tickerMessagesReducer
import quickLinksReducer from './reducers/quickLinksReducer'; // Similarly, for other reducers
import policiesReducer from './reducers/policiesReducer';
import safetyPoliciesCarouselImagesReducer from './reducers/safetyPoliciesCarouselImagesReducer';
import carouselImages1Reducer from './reducers/carouselImages1Reducer';
import carouselImages2Reducer from './reducers/carouselImages2Reducer';

// Combine all reducers into one rootReducer
const rootReducer = combineReducers({
  newsItems: newsItemsReducer,
  tickerMessages: tickerMessagesReducer,
  quickLinks: quickLinksReducer,
  policies: policiesReducer,
  carouselImages1: carouselImages1Reducer,
  carouselImages2: carouselImages2Reducer,
  safetyPoliciesCarouselImages: safetyPoliciesCarouselImagesReducer
});

// Create Redux store
const store = createStore(rootReducer);

// Export the store
export default store;
