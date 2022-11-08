import styled from "styled-components";
import { theme } from "./style/theme";
import { br } from "./utils/Device";

const Container = styled.div`
    margin: 0 auto;
    max-width: 1440px;
    min-width: 375px;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;

    ${br.md} {
        padding: 0 8rem;
    }

    ${br.xl} {
        padding: 0 10rem;
        height: 100%;
        min-height: 100vh;
        max-height: 100%;
    }
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    height: 100%;
    flex-grow: 1;
    width: 100%;
    gap: 1.5rem;
    margin-bottom: 1.5rem;

    ${br.md} {
        justify-content: flex-start;
        padding: 2rem 0;
    }
    ${br.xl} {
        padding: 0;
        flex-direction: row;
        align-items: center;
        padding: 4rem 0rem;
    }
`;

const Content = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px;
    gap: 30px;
    padding: 0 1.5rem;
    ${br.md} {
        padding: 0;
    }
    h4 {
        margin-bottom: 12px;
    }
    p {
        ${theme.typo.body};
    }
`;

const ButtonGroup = styled.div`
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

export { Container, Main, Content, ButtonGroup };
