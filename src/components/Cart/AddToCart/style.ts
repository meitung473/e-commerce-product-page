import { motion } from "framer-motion";
import styled from "styled-components";
import { theme } from "../../../style/theme";
import { br } from "../../../utils/Device";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 0px;
    gap: 10px;
    ${br.md} {
        flex-direction: row;
        align-items: center;
    }
`;

const CTA = styled(motion.div)`
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    gap: 1rem;
    border-radius: 10px;
    background-color: ${theme.colors.primary.Default};
    flex: 1 1 auto;
    color: #fff;
    font-weight: 700;
    overflow: hidden;
    cursor: pointer;
    svg > path {
        fill: #fff;
    }
    ${br.md} {
        max-width: 300px;
    }
`;

export { CTA, Wrapper };
