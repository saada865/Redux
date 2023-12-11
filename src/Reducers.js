import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {
  c: 0,
};

export const increment = createAction("increment");
export const decrement = createAction("decrement");

export const customReducer = createReducer({ c: 0 }, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.c += 1;
    })
    .addCase(decrement, (state) => {
      state.c -= 1;
    });
});

// {
//     increment: (state) => {
//       state.c += 1;
//     },

//     incrementByValue: (state, action) => {
//       state.c += 1;
//       state.c += action.payload;
//     },

//     decrement: (state) => {
//       state.c -= 1;
//     },
//   }
