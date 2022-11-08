import { theme } from "../../style/theme";
import { animationVariants } from "../../types/animation";

export const avatarVariant: animationVariants = {
    show: {
        boxShadow: `0 0 0 0px ${theme.colors.primary.Default}`,
    },
    hover: {
        boxShadow: `0 0 0 2px ${theme.colors.primary.Default}`,
    },
};
