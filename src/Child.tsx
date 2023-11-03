import type { ReactNode } from "react";
// ReactNode is a type specifically for anything that can be a React child.
// 'import type' for types.

type ChildProps = {
  //   name: string;
  //   children: string;
  // .? if optional
  children?: ReactNode;
  name?: string;
};

// using function - cleaner and easier to work with
// export default function Child({ name }: ChildProps) {
//   return <h1>{name}</h1>;
// }

// using React Function Component - declares that this component is a function component
// const Child: React.FC<ChildProps> = ({ name }) => {
//   return <h1>{name}</h1>;
// };

//working with CHILDREN
function Child({ children }: ChildProps) {
  return <h1>{children}</h1>;
}

export default Child;
