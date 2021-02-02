// ACTION TYPES
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

// ACTIONS

export const addProduct = (newProduct) => ({
  type: ADD_PRODUCT,
  payload: { newProduct },
});

export const deleteProduct = (productId) => ({
  type: DELETE_PRODUCT,
  payload: { productId: productId },
});

export const updateProduct = (updatedProduct) => {
  console.log(
    "🚀 ~ file: actions.js ~ line 19 ~ updatedProduct",
    updatedProduct
  );
  return {
    type: UPDATE_PRODUCT,
    payload: { updatedProduct: updatedProduct },
  };
};
