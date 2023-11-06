/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export const usePrevious = (value: any) => {
  const [current, setCurrent] = useState(value);
  const [previous, setPrevious] = useState(null);

  if (value !== current) {
    setPrevious(current);
    setCurrent(value);
  }

  return previous;
}