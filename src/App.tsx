// import Child from "./Child";
// import Button from "./Button";
// import { useState, useRef } from "react";
import { useReducer } from "react";

// export default function App() {
//   // setting state in typescript, need to declare type.
//   const [value, setValue] = useState<number[]>([]);
//   const inputRef = useRef<HTMLInputElement>(null);
//   const refCurrent = useRef<number>(2);
//   inputRef.current?.focus();
//   refCurrent.current = 10;
//   return (
//     <>
//       <h1>Hi</h1>
//       <div>ref is {refCurrent.current}</div>
//       {/* <Child name={22} /> */}
//       <Child>
//         <div>Children</div>
//       </Child>
//       <Button outline={true}>Hi I am a Button</Button>
//       {value}
//       <input
//         ref={inputRef}
//         type="text"
//         onChange={() =>
//           setValue(arr => [...arr, Math.round(Math.random() * 10)])
//         }
//       />
//     </>
//   );
// }

// using typescript with useReducer hook.

//declare types here:

type State = {
  count: number;
};

type Action =
  | {
      type: "INCREMENT";
      increaseBy: number;
    }
  | { type: "DECREMENT"; decreaseBy: number };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.increaseBy };
    case "DECREMENT":
      return { ...state, count: state.count - action.decreaseBy };
    default:
      throw new Error("Error!");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <button onClick={() => dispatch({ type: "DECREMENT", decreaseBy: 1 })}>
        -
      </button>
      {state.count}
      <button onClick={() => dispatch({ type: "INCREMENT", increaseBy: 1 })}>
        +
      </button>
    </div>
  );
}
