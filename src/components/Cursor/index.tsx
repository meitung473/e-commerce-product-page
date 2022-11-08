import useMouse from "./hooks/useMouse";
import { cursorVariant } from "./animate";
import { Container } from "./style";
import { ReactNode } from "react";
import { TCursorTypeState } from "../../types/global";

interface ICursorProp {
    children?: ReactNode;
    type: TCursorTypeState;
}

export default function Cursor({ children, type }: ICursorProp) {
    const { x, y } = useMouse();

    return (
        <Container
            variants={cursorVariant}
            custom={{ x, y }}
            animate={type ?? "default"}
        >
            <span>{children}</span>
        </Container>
    );
}
