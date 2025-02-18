const policiesReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_POLICY':
        return [...state, action.payload];
      case 'DELETE_POLICY':
        return state.filter(policy => policy.id !== action.payload);
      default:
        return state;
    }
  };
  
  export default policiesReducer;
  