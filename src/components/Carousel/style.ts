import { motion } from "framer-motion";
import styled from "styled-components";
import { withModal } from "../../types/global";
import { br } from "../../utils/Device";
import { width2Size } from "./utils/imageSize";
const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0px;
    position: relative;
    width: 100%;

    ${br.md} {
        display: grid;
        width: auto;
        align-content: center;
        grid-template-areas:
            "close"
            "header"
            "header"
            "footer";
    }
`;

const ThumbnailSelected = styled(motion.span)`
    display: inline-block;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary.Default};
    border-radius: 15px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`;

const Header = styled.header<withModal>`
    grid-area: header;
    position: relative;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 0;
    // fix height when no image loaded
    height: 300px;

    background-color: ${({ theme }) => theme.colors.secondary.Dark};
    overflow: ${({ $isModal }) => ($isModal ? "visible" : "hidden")};

    ${br.md} {
        background-color: transparent;
        border-radius: 15px;
        width: ${({ $isModal }) => width2Size($isModal, "md")};
        height: ${({ $isModal }) => width2Size($isModal, "md")};
    }
    ${br.xl} {
        width: ${({ $isModal }) => width2Size($isModal, "xl")};
        height: ${({ $isModal }) => width2Size($isModal, "xl")};
    }
`;

const ShowImage = styled(motion.img)<withModal>`
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;

    ${br.md} {
        object-fit: contain;
        cursor: ${({ $isModal }) => ($isModal ? "normal" : "none")};
    }
`;
const Footer = styled.footer<withModal>`
    display: none;
    z-index: 0;
    margin-top: 1.25rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);

    ${br.md} {
        display: grid;
        grid-area: footer;
        gap: 1rem;
        justify-content: center;
        width: ${({ $isModal }) => width2Size($isModal, "md")};
    }
    ${br.xl} {
        gap: 1.25rem;
        width: ${({ $isModal }) => width2Size($isModal, "xl")};
    }

    img {
        cursor: pointer;
        max-height: 100%;
        border-radius: 15px;
        width: 100%;
    }
`;

const ThumbnailBox = styled.div`
    position: relative;
`;

const CloseContainer = styled.div`
    width: 40px;
    height: 40px;
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    grid-area: close;
`;

export {
    Wrapper,
    ShowImage,
    ThumbnailSelected,
    ThumbnailBox,
    Footer,
    Header,
    CloseContainer,
};
