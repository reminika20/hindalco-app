const quickLinksReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_QUICK_LINK':
        return [...state, action.payload];
      case 'DELETE_QUICK_LINK':
        return state.filter(link => link.id !== action.payload);
      default:
        return state;
    }
  };
  
  export default quickLinksReducer;
  