// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const initialState = {
  basket: [],
  user: null,
};

// Data layer is known as state,
// The Data layer is manipulated by actions
function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Logic for adding item to basket
      return {
        ...state,
        // include whatever we had in the current basket as well as the action.item
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      // Logic for removing item from basket

      // Cloned the basket
      let newBasket = [...state.basket];

      // We checked to see if product exists
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        //item exists in basket, remove it...
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket! `
        );
      }

      return { ...state, basket: newBasket };
    // If we don't know what to do with it, return the state the data layer was in
    default:
      return { state };
  }
}

export default reducer;
