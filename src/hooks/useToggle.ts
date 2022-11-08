import { useState } from "react";

export type TUseToggleState = boolean | undefined;
export type THandleToggle = (boolean: TUseToggleState) => () => void;

export default function useToggle(initialType: TUseToggleState) {
    const [toggle, setToggle] = useState<TUseToggleState>(initialType);

    const handleToggle: THandleToggle = (boolean) => () => {
        if (boolean === undefined) {
            setToggle((boolean) => !boolean);
            return;
        }
        setToggle(boolean);
    };

    return {
        toggle,
        handleToggle,
    };
}
