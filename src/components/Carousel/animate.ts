import { ICarouselContext } from "../../context/CarouselContext.type";
import { animationVariants } from "../../types/animation";

type dir = ICarouselContext["dir"];

const showImageVariants: animationVariants = {
    hidden: (dir: dir) => ({
        x: 50 * -dir,
        opacity: 0,
        transition: {
            x: {
                delay: 0.3,
            },
        },
    }),
    show: {
        x: 0,
        opacity: 1,
    },
    exit: (dir: dir) => ({
        x: 50 * dir,
        opacity: 0,
    }),
};

export { showImageVariants };
