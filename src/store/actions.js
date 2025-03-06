// action.js

export const addNewsItem = (news) => ({
  type: 'ADD_NEWS_ITEM',
  payload: news,
});

export const deleteNewsItem = (id) => ({
  type: 'DELETE_NEWS_ITEM',
  payload: id,
});

export const addTickerMessage = (message) => ({
  type: 'ADD_TICKER_MESSAGE',
  payload: message,
});

export const deleteTickerMessage = (id) => ({  // Use 'id' instead of 'index' to be consistent
  type: 'DELETE_TICKER_MESSAGE',
  payload: id,
});

export const addQuickLink = (link) => ({
  type: 'ADD_QUICK_LINK',
  payload: link,
});

export const deleteQuickLink = (id) => ({
  type: 'DELETE_QUICK_LINK',
  payload: id,
});

export const addPolicy = (policy) => ({
  type: 'ADD_POLICY',
  payload: policy,
});

export const deletePolicy = (id) => ({
  type: 'DELETE_POLICY',
  payload: id,
});

export const addSafetySnapshot = (image) => ({
  type: 'ADD_SAFETY_SNAPSHOT',
  payload: image,
});

export const deleteSafetySnapshot = (id) => ({
  type: 'DELETE_SAFETY_SNAPSHOT',
  payload: id,
});

export const addCarouselImage1 = (image) => ({
  type: 'ADD_CAROUSEL_IMAGE1',
  payload: image,
});

export const deleteCarouselImage1 = (id) => ({
  type: 'DELETE_CAROUSEL_IMAGE1',
  payload: id,
});

export const addCarouselImage2 = (image) => ({
  type: 'ADD_CAROUSEL_IMAGE2',
  payload: image,
});

export const deleteCarouselImage2 = (id) => ({
  type: 'DELETE_CAROUSEL_IMAGE2',
  payload: id,
});

// Birthday actions
export const addBirthday = (birthday) => ({
  type: 'ADD_BIRTHDAY',
  payload: birthday,
});

export const deleteBirthday = (id) => ({
  type: 'DELETE_BIRTHDAY',
  payload: id,
});

// Video actions
export const addVideo = (video) => ({
  type: 'ADD_VIDEO',
  payload: video,
});

export const deleteVideo = (id) => ({
  type: 'DELETE_VIDEO',
  payload: id,
});

// Leaders board actions
export const addLeader = (leader) => ({
  type: 'ADD_LEADER',
  payload: leader,
});

export const deleteLeader = (id) => ({
  type: 'DELETE_LEADER',
  payload: id,
});

// Safety SOP actions
export const addSafetySOP = (sop) => ({
  type: 'ADD_SAFETY_SOP',
  payload: sop,
});

export const deleteSafetySOP = (id) => ({
  type: 'DELETE_SAFETY_SOP',
  payload: id,
});

// Wellness Wave actions
export const addWellnessWave = (item) => ({
  type: 'ADD_WELLNESS_WAVE',
  payload: item,
});

export const deleteWellnessWave = (id) => ({
  type: 'DELETE_WELLNESS_WAVE',
  payload: id,
});

// Wellness Tips actions
export const addWellnessTip = (item) => ({
  type: 'ADD_WELLNESS_TIP',
  payload: item,
});

export const deleteWellnessTip = (id) => ({
  type: 'DELETE_WELLNESS_TIP',
  payload: id,
});

// Victory Vault actions
export const addVictoryVault = (item) => ({
  type: 'ADD_VICTORY_VAULT',
  payload: item,
});

export const deleteVictoryVault = (id) => ({
  type: 'DELETE_VICTORY_VAULT',
  payload: id,
});

// CSR Initiatives actions
export const addCSRInitiative = (item) => ({
  type: 'ADD_CSR_INITIATIVE',
  payload: item,
});

export const deleteCSRInitiative = (id) => ({
  type: 'DELETE_CSR_INITIATIVE',
  payload: id,
});

// Welcome Onboard actions
export const addWelcomeOnboard = (item) => ({
  type: 'ADD_WELCOME_ONBOARD',
  payload: item,
});

export const deleteWelcomeOnboard = (id) => ({
  type: 'DELETE_WELCOME_ONBOARD',
  payload: id,
});

// Best Kaizens actions
export const addBestKaizen = (item) => ({
  type: 'ADD_BEST_KAIZEN',
  payload: item,
});

export const deleteBestKaizen = (id) => ({
  type: 'DELETE_BEST_KAIZEN',
  payload: id,
});

// Main Hoon Zimedaar actions
export const addMainHoonZimedaar = (item) => ({
  type: 'ADD_MAIN_HOON_ZIMEDAAR',
  payload: item,
});

export const deleteMainHoonZimedaar = (id) => ({
  type: 'DELETE_MAIN_HOON_ZIMEDAAR',
  payload: id,
});

// Crown Collection actions
export const addCrownCollection = (item) => ({
  type: 'ADD_CROWN_COLLECTION',
  payload: item,
});

export const deleteCrownCollection = (id) => ({
  type: 'DELETE_CROWN_COLLECTION',
  payload: id,
});

// Bosstomer actions
export const addBosstomer = (item) => ({
  type: 'ADD_BOSSTOMER',
  payload: item,
});

export const deleteBosstomer = (id) => ({
  type: 'DELETE_BOSSTOMER',
  payload: id,
});

// Elevate IQ actions
export const addElevateIQ = (item) => ({
  type: 'ADD_ELEVATE_IQ',
  payload: item,
});

export const deleteElevateIQ = (id) => ({
  type: 'DELETE_ELEVATE_IQ',
  payload: id,
});
