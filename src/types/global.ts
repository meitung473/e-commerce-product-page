import { SetStateAction } from "react";

// with modal component based styled props
export interface withModal {
    $isModal?: boolean;
}

//
export type TCursorTypeState = string | null;
export interface ICursorMethod {
    setCursorText: React.Dispatch<SetStateAction<string>>;
    setCursorType: React.Dispatch<SetStateAction<TCursorTypeState>>;
}
