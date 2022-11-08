import { theme } from "../../../style/theme";
import { animationVariants } from "../../../types/animation";
export const pathVariants: animationVariants = {
    show: {
        scale: 1,
        stroke: theme.colors.secondary.Dark,
    },
    hover: {
        stroke: theme.colors.primary.Default,
    },
    tap: {
        scale: 0.8,
        stroke: theme.colors.primary.Default,
    },
};
