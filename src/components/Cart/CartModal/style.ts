import styled from "styled-components";
import { motion } from "framer-motion";
import { adjustAlpha } from "../../../utils/themeMethod";
import { theme } from "./../../../style/theme";

const Container = styled(motion.div)`
    position: absolute;
    z-index: 1;
    top: 2.5rem;
    right: -2rem;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    gap: 12px;
    background-color: ${theme.colors.grayScale.black_0};
    box-shadow: 0px 18px 2.5rem
        ${adjustAlpha(theme.colors.grayScale.black_1000, 0.4)};
    border-radius: 10px;
`;
const Header = styled.header`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 1.25rem 2rem;
    background: ${theme.colors.grayScale.black_0};
    box-shadow: 0px 0.5px 0px ${({ theme }) => theme.colors.secondary.Tint};
    font-weight: 700;
    border-radius: 10px 10px 0 0;
`;

const CTAButton = styled(motion.button)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    min-width: 300px;
    cursor: pointer;
    align-items: center;
    padding: 1rem 0.75rem;
    gap: 16px;

    background: ${({ theme }) => theme.colors.primary.Default};
    border-radius: 10px;
    text-transform: capitalize;

    font-weight: 700;
    font-size: 1rem;
    line-height: 1.25em;
    letter-spacing: -0.025em;

    a {
        color: ${theme.colors.grayScale.black_0};
    }
`;

const Item = styled(motion.li)`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.75rem 0;
    gap: 0.75rem;

    background-color: ${theme.colors.grayScale.black_0};

    img {
        width: 50px;
        height: 50px;
        object-fit: contain;
    }
`;
const Name = styled.span`
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.25em;
    white-space: nowrap;
`;
const Empty = styled(motion.span)`
    display: inline-block;
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 0.03em;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.secondary.Default};
    padding: 1.5rem 0;
    text-align: center;
    min-width: 300px;
`;

const Price = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 6px;
    // total price
    span:nth-child(3) {
        font-weight: 700;
    }
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem 1.25rem;
`;

export { Container, Header, CTAButton, Item, Name, Empty, Price, Body };
