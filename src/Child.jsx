import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "@reduxjs/toolkit";
import { increment } from "./Reducers";
import { decrement } from "./Reducers";

const Child = () => {
  const dispatch = useDispatch();

  const { c } = useSelector((state) => state.custom);

  const addBtn = () => {
    dispatch(increment());
  };

  const subBtn = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>{c}</h1>
      <button onClick={addBtn}>Increment</button>
      <button onClick={subBtn}>Decrement</button>
    </div>
  );
};

export default Child;
