import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Add an item to the cart
    addItem: (state, action) => {
      const { name, cost, image, quantity } = action.payload;

      // Check if item already exists in the cart
      const existingItem = state.items.find((item) => item.name === name);
      
      if (existingItem) {
        // If item exists, increase its quantity
        existingItem.quantity += quantity;
      } else {
        // If item does not exist, add it to the cart
        state.items.push({
          name,
          cost,
          image,
          quantity,
        });
      }
    },

    // Remove an item from the cart
    removeItem: (state, action) => {
      const { name } = action.payload;

      // Filter out the item with the given name
      state.items = state.items.filter((item) => item.name !== name);
    },

    // Update the quantity of an item in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      // Find the item in the cart
      const existingItem = state.items.find((item) => item.name === name);

      if (existingItem) {
        // Update the quantity of the item
        existingItem.quantity = quantity;
      }
    },
  },
});

// Export action creators
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer as default
export default CartSlice.reducer;
