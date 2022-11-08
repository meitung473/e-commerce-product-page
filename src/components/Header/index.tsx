import { useRef } from "react";
import { AnimatePresence } from "framer-motion";
// utils
import { br } from "../../utils/Device";
// styled,components
import { Wrapper, Action, LogoLink, AvatarWrapper } from "./style";
import OverlayComponent from "../OverlayComponent";
import Navigation from "./Navigation";
import { CartModal } from "../Cart";
import CartButton from "./CartButton";
// assets
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as MenuIcon } from "../../images/icon-menu.svg";
import avatar from "../../images/image-avatar.png";
// hooks
import { useMediaQuery } from "../../hooks/useMediaqurey";
import useToggle from "../../hooks/useToggle";
// animate
import { avatarVariant } from "./animate";

export default function Header() {
    const { toggle: modal, handleToggle: handleModal } = useToggle(false);

    const { toggle: cartToggle, handleToggle: handleCartToggle } =
        useToggle(false);

    // portal for header
    const cartModalParentRef = useRef<HTMLDivElement | null>(null);

    const isMd = useMediaQuery(br.md);

    return (
        <Wrapper>
            {!isMd && <MenuIcon onClick={handleModal(undefined)} />}
            {/* Logo */}
            <LogoLink href="#">
                <Logo />
            </LogoLink>

            {isMd && <Navigation handleModal={handleModal} />}
            {/* navbar modal */}
            <AnimatePresence mode="wait" initial={false}>
                {!isMd && modal && (
                    <OverlayComponent
                        key="navigation"
                        overlay={true}
                        handleModal={handleModal}
                    >
                        <Navigation
                            handleModal={handleModal}
                            $isModal={true}
                            open={modal}
                        />
                    </OverlayComponent>
                )}
            </AnimatePresence>
            <Action ref={cartModalParentRef}>
                <CartButton handleCartToggle={handleCartToggle} />

                {/* cart modal */}
                <AnimatePresence mode="wait">
                    {cartToggle && (
                        <OverlayComponent
                            parent={cartModalParentRef.current}
                            key="cartModal"
                            overlay={false}
                        >
                            <CartModal />
                        </OverlayComponent>
                    )}
                </AnimatePresence>
                <AvatarWrapper
                    variants={avatarVariant}
                    animate="show"
                    whileHover="hover"
                >
                    <img src={avatar} alt="avatar" />
                </AvatarWrapper>
            </Action>
        </Wrapper>
    );
}
