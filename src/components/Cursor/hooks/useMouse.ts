import { useState, useEffect } from "react";

interface IMouseState {
    x: number;
    y: number;
}

export default function useMouse() {
    const [cursorPos, setCursorPos] = useState<IMouseState>({
        x: 0,
        y: 0,
    });
    useEffect(() => {
        const moveCursor = (e: MouseEvent): void => {
            const x = e.clientY;
            const y = e.clientX;
            setCursorPos({ x, y });
        };

        document.addEventListener("mousemove", moveCursor);

        return () => {
            document.removeEventListener("mousemove", moveCursor);
        };
    }, []);
    return {
        x: cursorPos.x,
        y: cursorPos.y,
    };
}
