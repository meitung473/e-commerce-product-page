import { motion } from "framer-motion";
import { theme } from "../../style/theme";
import { EMPTYVARIANTS } from "../../utils/animateVaraints";
import { ModalProp } from "../OverlayComponent/type";

const pathVariants = {
    show: {
        scale: 1,
        fill: theme.colors.grayScale.black_0,
    },
    hover: {
        fill: theme.colors.primary.Default,
    },
    tap: {
        scale: 0.8,
    },
};
type closeIconProp = Pick<ModalProp, "handleModal">;

export default function CloseIcon({ handleModal }: closeIconProp) {
    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            variants={EMPTYVARIANTS}
            animate="show"
            whileHover="hover"
            onTap={() => {
                if (typeof handleModal === "function") {
                    handleModal(false)();
                }
            }}
            whileTap="tap"
            style={{
                cursor: "pointer",
            }}
        >
            <motion.path
                variants={pathVariants}
                d="M 16.841 0 L 20 3.159 L 13.156 9.999 L 19.998 16.841 L 16.84 20 L 10 13.156 L 3.16 19.999 L 0.001 16.84 L 6.841 10 L 0 3.159 L 3.159 0 L 9.999 6.841 Z"
            ></motion.path>
        </motion.svg>
    );
}
