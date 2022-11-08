import ReactDOM from "react-dom";
import { EMPTYVARIANTS } from "../../utils/animateVaraints";
import { OverlayVariants } from "./animate";
import { ModalBox, Overlay } from "./style";
import { ModalProp } from "./type";

export default function OverlayComponent(props: ModalProp) {
    if (!props.children) return null;
    const { children, overlay } = props;

    return ReactDOM.createPortal(
        overlay ? (
            <ModalBox
                key="overlay"
                variants={EMPTYVARIANTS}
                initial="hidden"
                animate="show"
                exit="exit"
            >
                <Overlay
                    variants={OverlayVariants.default}
                    onClick={() => {
                        if (typeof props.handleModal === "function")
                            props?.handleModal(false)();
                    }}
                />
                {children}
            </ModalBox>
        ) : (
            <>{children}</>
        ),
        props?.parent ?? (document.getElementById("modal-root") as HTMLElement)
    );
}
