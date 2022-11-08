import { motion } from "framer-motion";
import styled from "styled-components";
import { br } from "../../../utils/Device";

const Button = styled(motion.button)`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: #ffffff;
    border-radius: 50px;
    z-index: 0;
    cursor: pointer;
`;
const Next = styled(Button)`
    right: 1vw;
    ${br.md} {
        right: -20px;
    }
`;
const Prev = styled(Button)`
    left: 1vw;
    ${br.md} {
        left: -20px;
    }
`;

export { Button, Next, Prev };
