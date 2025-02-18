const carouselImages1Reducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_CAROUSEL_IMAGE1':
        return [...state, action.payload];
      case 'DELETE_CAROUSEL_IMAGE1':
        return state.filter(image => image.id !== action.payload);
      default:
        return state;
    }
  };
  
  export default carouselImages1Reducer;
  