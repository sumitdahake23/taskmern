const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };

    // case "ADJUST_QTY":
    //  const itemIndex=state.cart.findIndex(
    //   cartitem=>cartitem.id === action.payload.id
    //  )
    //  if(state.cart(itemIndex).cartquantity>1){}

    // state.cart(itemIndex).cartQuantity-1;

    return {};

    // case actionTypes.LOAD_CURRENT_ITEM :
    //     return{}

    default:
      return state;
  }
};

export default cartReducer;
