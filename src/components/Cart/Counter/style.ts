import { motion } from "framer-motion";
import styled from "styled-components";
import { br } from "../../../utils/Device";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2em 1em;
    background: #f7f8fd;
    border-radius: 10px;
    ${br.md} {
        width: 160px;
    }
`;
const Box = styled(motion.div)`
    display: flex;
    align-items: center;
    cursor: pointer;
`;
const Text = styled.span`
    flex: 1 1 auto;
    text-align: center;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.25rem;
    letter-spacing: -0.025em;
`;

export { Container, Text, Box };
