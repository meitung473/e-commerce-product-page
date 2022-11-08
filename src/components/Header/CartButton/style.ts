import { motion } from "framer-motion";
import styled from "styled-components";
import { theme } from "../../../style/theme";

const Container = styled.div`
    position: relative;
    cursor: pointer;
`;

const Number = styled(motion.div)`
    position: absolute;
    line-height: 0.8rem;
    border-radius: 10px;
    top: -0.35rem;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 1px 8px;
    background: ${theme.colors.primary.Default};

    span {
        display: inline-block;
        text-align: center;
        font-weight: 700;
        font-size: 8px;
        letter-spacing: -0.025em;
        color: ${theme.colors.primary.Tint};
    }
`;

export { Container, Number };
