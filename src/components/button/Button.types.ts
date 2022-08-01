import type { HTMLAttributes } from "react";
import type { CommonProps } from "~/types";

export interface ButtonProps
  extends CommonProps,
    HTMLAttributes<HTMLButtonElement> {}
