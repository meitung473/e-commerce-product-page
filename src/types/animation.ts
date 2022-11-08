import { CSSProperties } from "react";
import { Variants } from "framer-motion";

// custom  variant label
export type VariantsName =
    | "hidden"
    | "show"
    | "exit"
    | "tap"
    | "hover"
    | "drag";

// framer motion Variants based structure
export type animationVariants =
    | Variants
    | Record<VariantsName, { [key: string]: CSSProperties }>;
