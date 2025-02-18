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

export const addSafetyPolicyCarouselImage = (image) => ({
  type: 'ADD_SAFETY_POLICY_CAROUSEL_IMAGE',
  payload: image,
});

export const deleteSafetyPolicyCarouselImage = (id) => ({
  type: 'DELETE_SAFETY_POLICY_CAROUSEL_IMAGE',
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
