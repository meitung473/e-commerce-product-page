import { animationVariants } from "../../types/animation";

type animateType = "default";

// combine more variants type with motion component
type overlayTypeVariant = {
    [key in animateType]: animationVariants;
};

export const OverlayVariants: overlayTypeVariant = {
    default: {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
        },
        exit: {
            opacity: 0,
        },
    },
};
