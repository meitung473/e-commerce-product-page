import { css } from "styled-components";
import { createGrayScale } from "./../utils/themeMethod";
const grayScale = createGrayScale(10);

export const theme = {
    colors: {
        primary: {
            Default: "hsla(26, 100%, 55%, 1)",
            Tint: "hsla(25, 100%, 94%, 1)",
        },
        secondary: {
            Lighter: "hsla(223, 64%, 98%, 1)",
            Tint: "hsla(220, 14%, 75%, 1)",
            Default: "hsla(219, 9%, 45%, 1)",
            Dark: "hsla(220, 13%, 13%, 1)",
        },
        grayScale: grayScale,
    },
    typo: {
        link: css`
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.25rem;
            letter-spacing: -0.025em;
            color: ${({ theme }) => theme.colors.secondary.Default};
        `,
        body: css`
            font-weight: 400;
            font-size: 1rem;
            line-height: 160%;
            letter-spacing: 0.006em;
            color: ${({ theme }) => theme.colors.secondary.Default};
        `,
        H1: css`
            font-weight: 700;
            font-size: 2rem;
            line-height: 40px;
        `,
        title: css`
            font-weight: 700;
            font-size: 1rem;
        `,
    },
};
