import { useEffect } from "react";

import { useMediaQuery } from "../../../hooks/useMediaqurey";

import { br } from "../../../utils/Device";

import { Container, ItemIndicator, List, ListItem } from "./style";
import { ReactComponent as CloseIcon } from "../../../images/icon-close.svg";

import {
    containerVariant,
    indicatorVariants,
    listItemVariants,
} from "./animate";
import { withModal } from "../../../types/global";
import { ModalProp } from "../../OverlayComponent/type";

const navLinks = ["collections", "men", "women", "about", "contact"];

interface INavigationProp extends withModal, Pick<ModalProp, "handleModal"> {
    open?: boolean;
}

export default function Navigation({
    $isModal,
    handleModal,
    open,
}: INavigationProp) {
    const isMd = useMediaQuery(br.md);

    useEffect(() => {
        if (isMd && open) {
            if (typeof handleModal === "function") {
                handleModal(false)();
            }
        }
    }, [handleModal, isMd, open]);

    return (
        <Container
            $isModal={$isModal}
            variants={containerVariant}
            initial={!isMd ? "hidden" : false}
            animate={!isMd ? "show" : false}
            exit="exit"
        >
            {!isMd && (
                <CloseIcon
                    onClick={() => {
                        if (typeof handleModal === "function") {
                            handleModal(false)();
                        }
                    }}
                    style={{ cursor: "pointer" }}
                />
            )}
            <List>
                {navLinks.map((link) => (
                    <ListItem
                        layout="size"
                        key={link}
                        onClick={() => {
                            if (typeof handleModal === "function") {
                                handleModal(false)();
                            }
                        }}
                        variants={listItemVariants}
                        initial="hidden"
                        animate="show"
                        whileHover="hover"
                        data-text={link}
                    >
                        <a href={`#${link}`}>
                            <span data-text={link}>{link}</span>
                        </a>
                        {isMd && <ItemIndicator variants={indicatorVariants} />}
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}
