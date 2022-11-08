import { createGlobalStyle, css } from "styled-components";
import { ResetStyle } from "./ResetStyle";
import { theme } from "./theme";

const GlobalStyle = css`
    html,
    body {
        font-family: "Kumbh Sans", sans-serif;
    }
    h1,
    h4 {
        font-weight: 700;
    }
    h1 {
        font-size: clamp(2rem, 1.6479rem + 1.5023vw, 3rem);
        line-height: 105.02%;
        letter-spacing: -0.03em;
    }
    h4 {
        font-weight: 700;
        font-size: 1rem;
        line-height: 20px;
        letter-spacing: -0.01em;
        text-transform: uppercase;
        color: ${theme.colors.primary.Default};
    }
`;
const BasedStyles = createGlobalStyle`
    ${ResetStyle}
    ${GlobalStyle}
`;

export default BasedStyles;
