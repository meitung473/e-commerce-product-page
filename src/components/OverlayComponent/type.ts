import { ReactNode } from "react";
import { THandleToggle } from "../../hooks/useToggle";

export interface IOverlayComponentProp {
    children: ReactNode;
}

export interface ModalProp extends IOverlayComponentProp {
    overlay: boolean;
    handleModal?: THandleToggle;
    parent?: HTMLDivElement | null;
}
