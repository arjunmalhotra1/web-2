import { useState } from 'react'

import './App.css'


export const counterAtom =atom({
  default: 0,
  key: "counter"
})

const even = selector ({
  key: "isEvenSelector",
  // default: 0 selector cannot have this since this s a derived state
  get: function({get}) {
    const currentcount = get(counterAtom);
  }
})