import { Variants } from "framer-motion";
import { theme } from "../style/theme";
import { animationVariants } from "../types/animation";

// for container only use propagation
export const EMPTYVARIANTS: animationVariants = {};

export const buttonVariants: animationVariants = {
    show: {
        scale: 1,
    },
    hover: {
        opacity: 0.75,
        boxShadow: `0px 12px 20px 9px ${theme.colors.primary.Tint}`,
    },
    tap: {
        scale: 0.8,
    },
};

export const defaultScaleAnimationVariant: animationVariants = {
    hidden: { scale: 0 },
    show: {
        scale: 1,
    },
    exit: { scale: 0 },
};
