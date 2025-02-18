import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Initial state
const initialState = {
  carouselImages1: [],
  carouselImages2: [],
  newsItems: [],
  quickLinks: [
    { id: '1', text: 'Google', url: 'https://www.google.com' },
    { id: '2', text: 'Facebook', url: 'https://www.facebook.com' },
    { id: '3', text: 'Twitter', url: 'https://www.twitter.com' },
    { id: '4', text: 'LinkedIn', url: 'https://www.linkedin.com' },
    { id: '5', text: 'GitHub', url: 'https://www.github.com' }
  ],
  policies: [
    { id: '1', title: 'Privacy Policy', url: 'https://www.example.com/privacy-policy.pdf' },
    { id: '2', title: 'Terms of Service', url: 'https://www.example.com/terms-of-service.pdf' },
    { id: '3', title: 'Cookie Policy', url: 'https://www.example.com/cookie-policy.pdf' }
  ],
  safetyPoliciesCarouselImages: [],
  tickerMessages: []
};

// Reducers
const newsItemsReducer = (state = initialState.newsItems, action) => {
  switch (action.type) {
    case 'ADD_NEWS_ITEM':
      return [...state, action.payload];
    case 'DELETE_NEWS_ITEM':
      return state.filter(item => item.id !== action.payload);
    case 'SYNC_NEWSITEMS':
      return action.payload;
    default:
      return state;
  }
};

const tickerMessagesReducer = (state = initialState.tickerMessages, action) => {
  switch (action.type) {
    case 'ADD_TICKER_MESSAGE':
      return [...state, action.payload];
    case 'DELETE_TICKER_MESSAGE':
      return state.filter((_, index) => index !== action.payload);
    case 'SYNC_TICKERMESSAGES':
      return action.payload;
    default:
      return state;
  }
};

const quickLinksReducer = (state = initialState.quickLinks, action) => {
  switch (action.type) {
    case 'ADD_QUICK_LINK':
      return [...state, action.payload];
    case 'DELETE_QUICK_LINK':
      return state.filter(link => link.id !== action.payload);
    case 'SYNC_QUICKLINKS':
      return action.payload;
    default:
      return state;
  }
};

const policiesReducer = (state = initialState.policies, action) => {
  switch (action.type) {
    case 'ADD_POLICY':
      return [...state, action.payload];
    case 'DELETE_POLICY':
      return state.filter(policy => policy.id !== action.payload);
    case 'SYNC_POLICIES':
      return action.payload;
    default:
      return state;
  }
};

const safetyPoliciesCarouselImagesReducer = (state = initialState.safetyPoliciesCarouselImages, action) => {
  switch (action.type) {
    case 'ADD_SAFETY_POLICY_CAROUSEL_IMAGE':
      return [...state, action.payload];
    case 'DELETE_SAFETY_POLICY_CAROUSEL_IMAGE':
      return state.filter(image => image.id !== action.payload);
    case 'SYNC_SAFETYPOLICIESCAROUSELIMAGES':
      return action.payload;
    default:
      return state;
  }
};

const carouselImages1Reducer = (state = initialState.carouselImages1, action) => {
  switch (action.type) {
    case 'ADD_CAROUSEL_IMAGE1':
      return [...state, action.payload];
    case 'DELETE_CAROUSEL_IMAGE1':
      return state.filter(image => image.id !== action.payload);
    case 'SYNC_CAROUSELIMAGES1':
      return action.payload;
    default:
      return state;
  }
};

const carouselImages2Reducer = (state = initialState.carouselImages2, action) => {
  switch (action.type) {
    case 'ADD_CAROUSEL_IMAGE2':
      return [...state, action.payload];
    case 'DELETE_CAROUSEL_IMAGE2':
      return state.filter(image => image.id !== action.payload);
    case 'SYNC_CAROUSELIMAGES2':
      return action.payload;
    default:
      return state;
  }
};

const persistConfig = {
  key: 'root',
  storage,
};
// Combine reducers
const rootReducer = combineReducers({
  newsItems: newsItemsReducer,
  tickerMessages: tickerMessagesReducer,
  quickLinks: quickLinksReducer,
  policies: policiesReducer,
  safetyPoliciesCarouselImages: safetyPoliciesCarouselImagesReducer,
  carouselImages1: carouselImages1Reducer,
  carouselImages2: carouselImages2Reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Needed for redux-persist
    }),
  devTools: true
});

export const persistor = persistStore(store);
export default store;
