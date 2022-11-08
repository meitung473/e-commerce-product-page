import styled from "styled-components";
import { theme } from "../../style/theme";
import { br } from "../../utils/Device";
const Container = styled.div`
    display: flex;
    flex-direction: row;

    ${br.md} {
        flex-direction: column;
    }
`;
const Sale = styled.span`
    font-weight: 700;
    font-size: 2rem;
    line-height: 148.52%;
    letter-spacing: -0.02em;
`;
const Box = styled.div`
    display: flex;
    align-items: center;
    padding: 0px;
    gap: 0.75rem;
`;

const Discount = styled(Sale)`
    font-size: 1rem;
    line-height: 148.52%;
    letter-spacing: 0.03em;
    text-decoration-line: line-through;
    color: ${theme.colors.secondary.Tint};
    align-self: center;
    margin-left: auto;
    ${br.md} {
        margin-left: 0;
        align-self: flex-start;
    }
`;
const DiscountTag = styled.span`
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-weight: 700;
    background-color: ${({ theme }) => theme.colors.primary.Tint};
    color: ${({ theme }) => theme.colors.primary.Default};
`;

export { Container, Box, Discount, DiscountTag, Sale };
