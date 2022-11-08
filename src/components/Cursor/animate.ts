import { theme } from "../../style/theme";
import useMouse from "./hooks/useMouse";

type cursorPos = ReturnType<typeof useMouse>;

const cursorVariant = {
    default: ({ x, y }: cursorPos) => ({
        opacity: 1,
        height: 0,
        width: 0,
        x: y - 5,
        y: x - 5,
        transition: {
            type: "spring",
            mass: 0.6,
        },
    }),
    carousel: ({ x, y }: cursorPos) => ({
        color: theme.colors.grayScale.black_0,
        height: 80,
        width: 80,
        fontSize: "18px",
        x: y - 40,
        y: x - 40,
        backgroundColor: theme.colors.primary.Tint,
        opacity: 0.9,
    }),
};

export { cursorVariant };
