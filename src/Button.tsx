import type { ComponentProps } from "react";

type ButtonProps = {
  outline?: boolean;
} & ComponentProps<"button">;

function Button({ outline, ...props }: ButtonProps) {
  return (
    <button
      style={{ border: outline ? "1px solid blue" : undefined }}
      {...props}
    ></button>
  );
}

export default Button;
