import { motion } from "framer-motion";
import { Next, Prev } from "./style";
import { pathVariants } from "./animate";
import {
    ICarouselContext,
    IUseCarouselHook,
} from "../../../context/CarouselContext.type";
import { EMPTYVARIANTS } from "../../../utils/animateVaraints";

interface IButtonsProp
    extends Pick<IUseCarouselHook, "max">,
        Pick<ICarouselContext, "setSelectedPic"> {}

export default function Buttons({ max, setSelectedPic }: IButtonsProp) {
    return (
        <>
            <Prev
                variants={EMPTYVARIANTS}
                animate="show"
                whileHover="hover"
                whileTap="tap"
                onClick={() =>
                    setSelectedPic(([d, n]) => [-1, n === 0 ? max : n - 1])
                }
            >
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="19"
                    viewBox="0 0 13 19"
                    variants={EMPTYVARIANTS}
                >
                    <motion.g transform="translate(0.5 0.492)">
                        <path
                            d="M 0 18 L 0 0 L 12 0 L 12 18 Z"
                            fill="transparent"
                        ></path>
                        <motion.path
                            d="M 11 1 L 3 9 L 11 17"
                            fill="transparent"
                            strokeWidth="3"
                            strokeMiterlimit="10"
                            strokeDasharray=""
                            variants={pathVariants}
                        ></motion.path>
                    </motion.g>
                </motion.svg>
                {/* <ArrowPrevIcon /> */}
            </Prev>
            <Next
                variants={EMPTYVARIANTS}
                animate="show"
                whileHover="hover"
                whileTap="tap"
                onClick={() =>
                    setSelectedPic(([d, n]) => [1, n === max ? 0 : n + 1])
                }
            >
                {/* <ArrowNextIcon /> */}
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="19"
                    viewBox="0 0 14 19"
                    variants={EMPTYVARIANTS}
                >
                    <motion.g transform="translate(0.5 0.492)">
                        <path
                            d="M 0 18 L 0 0 L 13 0 L 13 18 Z"
                            fill="transparent"
                        ></path>
                        <motion.path
                            d="M 2 1 L 10 9 L 2 17"
                            fill="transparent"
                            strokeWidth="3"
                            stroke="rgb(29,32,38)"
                            strokeMiterlimit="10"
                            strokeDasharray=""
                            variants={pathVariants}
                        ></motion.path>
                    </motion.g>
                </motion.svg>
            </Next>
        </>
    );
}
