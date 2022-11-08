import { motion, Variants } from "framer-motion";
import styled from "styled-components";
import { br } from "../../utils/Device";

const Wrapper = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0.75rem 1.5rem 0.75rem 2.25rem;
    background: #ffffff;
    box-shadow: 0 1px 0 #e7e7e9;
    ${br.md} {
        align-items: stretch;
        padding: 0;
    }
`;

const LogoLink = styled.a`
    flex: 0 0 140px;
    margin: 0 0.75rem;
    display: flex;
    align-items: center;
    ${br.md} {
        margin-left: 0;
    }
`;
// avatar
const Action = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0px;
    gap: 1rem;
    margin-left: auto;
    position: relative;
    margin-right: 1.5rem;
    ${br.md} {
        gap: 1rem;
    }
    ${br.xl} {
        gap: 2.25rem;
    }
`;
const AvatarWrapper = styled(motion.div)`
    cursor: pointer;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    ${br.md} {
        width: 50px;
        height: 50px;
    }
    img {
        object-fit: contain;
        width: 100%;
        height: 100%;
        vertical-align: middle;
    }
`;
export { Wrapper, Action, LogoLink, AvatarWrapper };
