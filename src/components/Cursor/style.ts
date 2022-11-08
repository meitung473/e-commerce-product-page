import { motion } from "framer-motion";
import styled from "styled-components";
import { theme } from "../../style/theme";

const Container = styled(motion.div)`
    position: fixed;
    z-index: 100;
    display: flex;
    align-content: center;
    justify-content: center;
    top: 0;
    left: 0;
    height: 10px;
    width: 10px;
    border-radius: 200px;
    pointer-events: none;
    color: #fff;
    background-color: transparent;
    text-align: center;
    font-size: 16px;
    span {
        font-family: "Kumbh Sans";
        pointer-events: none;
        user-select: none;
        margin: auto;
        font-weight: 400;
        color: ${theme.colors.primary.Default};
    }
`;

export { Container };
