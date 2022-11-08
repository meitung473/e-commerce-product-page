import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { theme } from "../../../style/theme";
import { withModal } from "../../../types/global";
import { br } from "../../../utils/Device";

const List = styled(motion.ul)`
    display: flex;
    align-items: center;
    gap: 1.875rem;
    ${br.md} {
        height: 100%;
        gap: 0.75rem;
    }
`;
const ListItem = styled(motion.li)`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    a {
        width: 100%;
        height: 100%;
        font-family: "Kumbh Sans", sans-serif;
        color: ${({ theme }) => theme.typo.link};
        text-transform: capitalize;
    }
    ${br.md} {
        height: 100%;
        a {
            span {
                // avoid font-weight animation break layout to make CLS problem
                display: inline-flex;
                width: 100%;
                height: 100%;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                padding: 1.5rem 8px;
                &::after {
                    content: attr(data-text);
                    content: attr(data-text) / "";
                    height: 0;
                    visibility: hidden;
                    overflow: hidden;
                    user-select: none;
                    pointer-events: none;
                    font-weight: 700;
                }
            }
        }
    }
`;

const ItemIndicator = styled(motion.span)`
    position: absolute;
    display: inline-block;
    height: 4px;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.primary.Default};
    transform-origin: center left;
`;

const modalContainer = css`
    z-index: 10;
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
    background-color: ${theme.colors.grayScale.black_0};
    margin-right: auto;
    padding: 1.5rem 0 0 2.25rem;
    ${List} {
        margin-top: 2.25rem;

        align-items: flex-start;
        flex-direction: column;
        padding: 0;
        gap: 0;
    }
    ${ListItem} {
        width: 100%;
        flex: 1 1 auto;
        padding: 0 1rem 0 0;
        cursor: pointer;
        justify-content: flex-start;
        a {
            padding: 0.938rem 1rem 0.938rem 0;
            font-weight: 700;
        }
    }
`;
const Container = styled(motion.nav)<withModal>`
    ${({ $isModal }) => ($isModal ? modalContainer : null)};
`;
export { Container, List, ListItem, ItemIndicator };
