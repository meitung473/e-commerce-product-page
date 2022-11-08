import { animationVariants } from "../../../types/animation";

export const containerVariant: animationVariants = {
    hidden: {
        x: "-100vw",
    },
    show: {
        x: 0,
        transition: {
            type: "tween",
            ease: "easeInOut",
        },
    },
    exit: {
        x: "-100vw",
        transition: {
            type: "tween",
            ease: "easeInOut",
        },
    },
};
export const listItemVariants: animationVariants = {
    show: { fontWeight: 400 },
    hover: {
        fontWeight: 700,
    },
};
export const indicatorVariants: animationVariants = {
    hidden: {
        scale: 0,
    },
    show: { scale: 0 },
    hover: {
        scale: 1,
    },
};
