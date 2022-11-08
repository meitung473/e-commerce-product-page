import { theme } from "../../../style/theme";
import { animationVariants } from "../../../types/animation";
import { adjustAlpha } from "../../../utils/themeMethod";

export const pathVariants: animationVariants = {
    show: {
        scale: 1,
        fill: theme.colors.primary.Default,
    },
    hover: {
        fill: adjustAlpha(theme.colors.primary.Default, 0.3),
    },
    tap: {
        scale: 0.8,
    },
};
