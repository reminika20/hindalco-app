import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Initial state
const initialState = {
  carouselImages1: [],
  carouselImages2: [],
  newsItems: [],
  birthdays: [],
  videoBytes: [],
  leadersBoard: [],
  safetySOPs: [
    { id: '1', title: 'Fire Safety Protocol', url: 'https://www.example.com/fire-safety.pdf', icon: 'https://cdn-icons-png.flaticon.com/512/785/785116.png' },
    { id: '2', title: 'Chemical Handling Guidelines', url: 'https://www.example.com/chemical-handling.pdf', icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055183.png' },
    { id: '3', title: 'Emergency Evacuation Plan', url: 'https://www.example.com/evacuation.pdf', icon: 'https://cdn-icons-png.flaticon.com/512/5553/5553922.png' }
  ],
  quickLinks: [
    { id: '1', text: 'Google', url: 'https://www.google.com', icon: 'https://cdn.jsdelivr.net/npm/feather-icons/dist/icons/search.svg' },
    { id: '2', text: 'Facebook', url: 'https://www.facebook.com', icon: 'https://cdn.jsdelivr.net/npm/feather-icons/dist/icons/facebook.svg' },
    { id: '3', text: 'Twitter', url: 'https://www.twitter.com', icon: 'https://cdn.jsdelivr.net/npm/feather-icons/dist/icons/twitter.svg' },
    { id: '4', text: 'LinkedIn', url: 'https://www.linkedin.com', icon: 'https://cdn.jsdelivr.net/npm/feather-icons/dist/icons/linkedin.svg' },
    { id: '5', text: 'GitHub', url: 'https://www.github.com', icon: 'https://cdn.jsdelivr.net/npm/feather-icons/dist/icons/github.svg' }
  ],
  policies: [
    { id: '1', title: 'Safety', url: 'https://www.example.com/safety-policy.pdf', icon: 'https://cdn-icons-png.flaticon.com/512/1995/1995470.png' },
    { id: '2', title: 'IT Policy', url: 'https://www.example.com/it-policy.pdf', icon: 'https://cdn-icons-png.flaticon.com/512/1086/1086741.png' },
    { id: '3', title: 'Sustainability', url: 'https://www.example.com/sustainability-policy.pdf', icon: 'https://cdn-icons-png.flaticon.com/512/2971/2971419.png' },
    { id: '4', title: 'HR Policy', url: 'https://www.example.com/hr-policy.pdf', icon: 'https://cdn-icons-png.flaticon.com/512/1256/1256650.png' },
    { id: '5', title: 'Quality Policy', url: 'https://www.example.com/quality-policy.pdf', icon: 'https://cdn-icons-png.flaticon.com/512/3176/3176366.png' },
    { id: '6', title: 'Health Policy', url: 'https://www.example.com/health-policy.pdf', icon: 'https://cdn-icons-png.flaticon.com/512/2966/2966334.png' }
  ],
  safetySnapshots: [],
  tickerMessages: [],
  wellnessWave: [],
  wellnessTips: [],
  victoryVault: [],
  csrInitiatives: [],
  welcomeOnboard: [],
  bestKaizens: [],
  mainHoonZimedaar: [],
  crownCollection: [],
  bosstomer: [],
  elevateIQ: [],
  happyRetirement: [],
  anniversaries: [],
  festiveMode: [],
  employeeMoments: []
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

const safetySnapshotsReducer = (state = initialState.safetySnapshots, action) => {
  switch (action.type) {
    case 'ADD_SAFETY_SNAPSHOT':
      return [...state, action.payload];
    case 'DELETE_SAFETY_SNAPSHOT':
      return state.filter(image => image.id !== action.payload);
    case 'SYNC_SAFETYSNAPSHOTS':
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

// Safety SOPs reducer
const safetySOPsReducer = (state = initialState.safetySOPs, action) => {
  switch (action.type) {
    case 'ADD_SAFETY_SOP':
      return [...state, action.payload];
    case 'DELETE_SAFETY_SOP':
      return state.filter(sop => sop.id !== action.payload);
    case 'SYNC_SAFETYSOPS':
      return action.payload;
    default:
      return state;
  }
};

// Birthdays reducer
const birthdaysReducer = (state = initialState.birthdays, action) => {
  switch (action.type) {
    case 'ADD_BIRTHDAY':
      return [...state, action.payload];
    case 'DELETE_BIRTHDAY':
      return state.filter(birthday => birthday.id !== action.payload);
    case 'SYNC_BIRTHDAYS':
      return action.payload;
    default:
      return state;
  }
};

// Videos reducer
const videoBytesReducer = (state = initialState.videoBytes, action) => {
  switch (action.type) {
    case 'ADD_VIDEO':
      return [...state, action.payload];
    case 'DELETE_VIDEO':
      return state.filter(video => video.id !== action.payload);
    case 'SYNC_VIDEOBYTES':
      return action.payload;
    default:
      return state;
  }
};

// Leaders board reducer
const leadersBoardReducer = (state = initialState.leadersBoard, action) => {
  switch (action.type) {
    case 'ADD_LEADER':
      return [...state, action.payload];
    case 'DELETE_LEADER':
      return state.filter(leader => leader.id !== action.payload);
    case 'SYNC_LEADERSBOARD':
      return action.payload;
    default:
      return state;
  }
};

// Wellness Wave reducer
const wellnessWaveReducer = (state = initialState.wellnessWave, action) => {
  switch (action.type) {
    case 'ADD_WELLNESS_WAVE':
      return [...state, action.payload];
    case 'DELETE_WELLNESS_WAVE':
      return state.filter(item => item.id !== action.payload);
    case 'SYNC_WELLNESSWAVE':
      return action.payload;
    default:
      return state;
  }
};

// Wellness Tips reducer
const wellnessTipsReducer = (state = initialState.wellnessTips, action) => {
  switch (action.type) {
    case 'ADD_WELLNESS_TIP':
      return [...state, action.payload];
    case 'DELETE_WELLNESS_TIP':
      return state.filter(item => item.id !== action.payload);
    case 'SYNC_WELLNESSTIPS':
      return action.payload;
    default:
      return state;
  }
};

// Victory Vault reducer
const victoryVaultReducer = (state = initialState.victoryVault, action) => {
  switch (action.type) {
    case 'ADD_VICTORY_VAULT':
      return [...state, action.payload];
    case 'DELETE_VICTORY_VAULT':
      return state.filter(item => item.id !== action.payload);
    case 'SYNC_VICTORYVAULT':
      return action.payload;
    default:
      return state;
  }
};

// CSR Initiatives reducer
const csrInitiativesReducer = (state = initialState.csrInitiatives, action) => {
  switch (action.type) {
    case 'ADD_CSR_INITIATIVE':
      return [...state, action.payload];
    case 'DELETE_CSR_INITIATIVE':
      return state.filter(item => item.id !== action.payload);
    case 'SYNC_CSRINITIATIVES':
      return action.payload;
    default:
      return state;
  }
};

// Welcome Onboard reducer
const welcomeOnboardReducer = (state = initialState.welcomeOnboard, action) => {
  switch (action.type) {
    case 'ADD_WELCOME_ONBOARD':
      return [...state, action.payload];
    case 'DELETE_WELCOME_ONBOARD':
      return state.filter(item => item.id !== action.payload);
    case 'SYNC_WELCOMEONBOARD':
      return action.payload;
    default:
      return state;
  }
};

// Best Kaizens reducer
const bestKaizensReducer = (state = initialState.bestKaizens, action) => {
  switch (action.type) {
    case 'ADD_BEST_KAIZEN':
      return [...state, action.payload];
    case 'DELETE_BEST_KAIZEN':
      return state.filter(item => item.id !== action.payload);
    case 'SYNC_BESTKAIZENS':
      return action.payload;
    default:
      return state;
  }
};

// Main Hoon Zimedaar reducer
const mainHoonZimedaarReducer = (state = initialState.mainHoonZimedaar, action) => {
  switch (action.type) {
    case 'ADD_MAIN_HOON_ZIMEDAAR':
      return [...state, action.payload];
    case 'DELETE_MAIN_HOON_ZIMEDAAR':
      return state.filter(item => item.id !== action.payload);
    case 'SYNC_MAINHOONZIMEDAAR':
      return action.payload;
    default:
      return state;
  }
};

// Crown Collection reducer
const crownCollectionReducer = (state = initialState.crownCollection, action) => {
  switch (action.type) {
    case 'ADD_CROWN_COLLECTION':
      return [...state, action.payload];
    case 'DELETE_CROWN_COLLECTION':
      return state.filter(item => item.id !== action.payload);
    case 'SYNC_CROWNCOLLECTION':
      return action.payload;
    default:
      return state;
  }
};

// Bosstomer reducer
const bosstomerReducer = (state = initialState.bosstomer, action) => {
  switch (action.type) {
    case 'ADD_BOSSTOMER':
      return [...state, action.payload];
    case 'DELETE_BOSSTOMER':
      return state.filter(item => item.id !== action.payload);
    case 'SYNC_BOSSTOMER':
      return action.payload;
    default:
      return state;
  }
};

// Elevate IQ reducer
const elevateIQReducer = (state = initialState.elevateIQ, action) => {
  switch (action.type) {
    case 'ADD_ELEVATE_IQ':
      return [...state, action.payload];
    case 'DELETE_ELEVATE_IQ':
      return state.filter(item => item.id !== action.payload);
    case 'SYNC_ELEVATEIQ':
      return action.payload;
    default:
      return state;
  }
};

// Happy Retirement reducer
const happyRetirementReducer = (state = initialState.happyRetirement, action) => {
  switch (action.type) {
    case 'ADD_HAPPY_RETIREMENT':
      return [...state, action.payload];
    case 'DELETE_HAPPY_RETIREMENT':
      return state.filter(item => item.id !== action.payload);
    case 'SYNC_HAPPYRETIREMENT':
      return action.payload;
    default:
      return state;
  }
};

// Anniversaries reducer
const anniversariesReducer = (state = initialState.anniversaries, action) => {
  switch (action.type) {
    case 'ADD_ANNIVERSARY':
      return [...state, action.payload];
    case 'DELETE_ANNIVERSARY':
      return state.filter(item => item.id !== action.payload);
    case 'SYNC_ANNIVERSARIES':
      return action.payload;
    default:
      return state;
  }
};

// Festive Mode reducer
const festiveModeReducer = (state = initialState.festiveMode, action) => {
  switch (action.type) {
    case 'ADD_FESTIVE_MODE':
      return [...state, action.payload];
    case 'DELETE_FESTIVE_MODE':
      return state.filter(item => item.id !== action.payload);
    case 'SYNC_FESTIVEMODE':
      return action.payload;
    default:
      return state;
  }
};

// Employee Moments reducer
const employeeMomentsReducer = (state = initialState.employeeMoments, action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE_MOMENT':
      return [...state, action.payload];
    case 'DELETE_EMPLOYEE_MOMENT':
      return state.filter(item => item.id !== action.payload);
    case 'SYNC_EMPLOYEEMOMENTS':
      return action.payload;
    default:
      return state;
  }
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'newsItems', 'tickerMessages', 'quickLinks', 'policies', 
    'safetySnapshots', 'carouselImages1', 'carouselImages2', 
    'birthdays', 'videoBytes', 'leadersBoard', 'safetySOPs',
    'wellnessWave', 'wellnessTips', 'victoryVault', 'csrInitiatives',
    'welcomeOnboard', 'bestKaizens', 'mainHoonZimedaar', 'crownCollection',
    'bosstomer', 'elevateIQ', 'happyRetirement', 'anniversaries', 
    'festiveMode', 'employeeMoments'
  ]
};

const rootReducer = combineReducers({
  newsItems: newsItemsReducer,
  tickerMessages: tickerMessagesReducer,
  quickLinks: quickLinksReducer,
  policies: policiesReducer,
  safetySnapshots: safetySnapshotsReducer,
  carouselImages1: carouselImages1Reducer,
  carouselImages2: carouselImages2Reducer,
  birthdays: birthdaysReducer,
  videoBytes: videoBytesReducer,
  leadersBoard: leadersBoardReducer,
  safetySOPs: safetySOPsReducer,
  wellnessWave: wellnessWaveReducer,
  wellnessTips: wellnessTipsReducer,
  victoryVault: victoryVaultReducer,
  csrInitiatives: csrInitiativesReducer,
  welcomeOnboard: welcomeOnboardReducer,
  bestKaizens: bestKaizensReducer,
  mainHoonZimedaar: mainHoonZimedaarReducer,
  crownCollection: crownCollectionReducer,
  bosstomer: bosstomerReducer,
  elevateIQ: elevateIQReducer,
  happyRetirement: happyRetirementReducer,
  anniversaries: anniversariesReducer,
  festiveMode: festiveModeReducer,
  employeeMoments: employeeMomentsReducer
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
