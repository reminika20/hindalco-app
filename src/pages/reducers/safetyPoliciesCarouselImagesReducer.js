const safetyPoliciesCarouselImagesReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_SAFETY_POLICY_CAROUSEL_IMAGE':
        return [...state, action.payload];
      case 'DELETE_SAFETY_POLICY_CAROUSEL_IMAGE':
        return state.filter(image => image.id !== action.payload);
      default:
        return state;
    }
  };
  
  export default safetyPoliciesCarouselImagesReducer;
  