import { createContext, useState, useMemo, useContext, useEffect } from "react";
import {
    ICarouselContext,
    ICarouselProviderProp,
    IUseCarouselHook,
} from "./CarouselContext.type";

const CarouselContext = createContext<ICarouselContext | undefined>(undefined);

function useCarousel({ max, autoPlay, rate }: IUseCarouselHook) {
    const context = useContext(CarouselContext);

    if (context === undefined) {
        throw new Error("useCarousel must be used within a CarouselContext");
    }

    const { dir, selectedPic, setSelectedPic } = context;

    //auto play carousel
    useEffect(() => {
        if (!autoPlay) return;
        let id: number | null = null;
        id = window.setInterval(() => {
            setSelectedPic(([_, n]) => [1, n === max ? 0 : n + 1]);
        }, rate);

        return () => {
            if (id) {
                clearInterval(id);
            }
        };
    }, [autoPlay, max, rate, setSelectedPic]);

    return {
        dir,
        selectedPic,
        setSelectedPic,
    };
}

function CarouselProvider({ children }: ICarouselProviderProp) {
    const [[dir, selectedPic], setSelectedPic] = useState<number[]>([0, 0]);

    const value = useMemo(() => {
        return {
            dir,
            selectedPic,
            setSelectedPic,
        };
    }, [dir, selectedPic]);

    return (
        <CarouselContext.Provider value={value}>
            {children}
        </CarouselContext.Provider>
    );
}

export { CarouselProvider, useCarousel };
