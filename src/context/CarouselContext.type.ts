import { Dispatch, ReactNode, SetStateAction } from "react";

// Carousel context type
export interface ICarouselContext {
    dir: number;
    selectedPic: number;
    setSelectedPic: Dispatch<SetStateAction<number[]>>;
}

export interface ICarouselProviderProp {
    children: ReactNode;
}

export interface IUseCarouselHook {
    max: number;
    autoPlay: boolean;
    rate: number;
}
