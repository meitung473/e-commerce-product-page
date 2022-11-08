import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "../../style/theme";
import { adjustAlpha } from "../../utils/themeMethod";

const Overlay = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: ${adjustAlpha(theme.colors.grayScale.black_1000, 0.75)};
`;
const ModalBox = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
`;

export { Overlay, ModalBox };
