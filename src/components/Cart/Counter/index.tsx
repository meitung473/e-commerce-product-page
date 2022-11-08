import { motion } from "framer-motion";
import { EMPTYVARIANTS } from "../../../utils/animateVaraints";
import { SetStateAction, Dispatch } from "react";
import { Container, Box, Text } from "./style";
import { pathVariants } from "./animate";
import { TCounterState } from "../AddToCart/type";

interface IProp<TParent> {
    count: TParent;
    setCount: Dispatch<SetStateAction<TParent>>;
}

export default function Counter({ count, setCount }: IProp<TCounterState>) {
    return (
        <Container>
            {/* prev */}
            <Box
                onTap={() => setCount((n) => (count <= 1 ? n : n - 1))}
                variants={EMPTYVARIANTS}
                animate="show"
                whileHover="hover"
                whileTap="tap"
            >
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="5"
                    viewBox="0 0 12 5"
                    variants={EMPTYVARIANTS}
                >
                    <motion.g
                        transform="translate(0 0.5)"
                        variants={EMPTYVARIANTS}
                    >
                        <path
                            d="M 0 4 L 0 0 L 12 0 L 12 4 Z"
                            fill="transparent"
                        ></path>
                        <motion.path
                            variants={pathVariants}
                            d="M 11.357 3.332 C 11.441 3.332 11.525 3.316 11.603 3.284 C 11.681 3.252 11.752 3.204 11.812 3.145 C 11.872 3.085 11.919 3.014 11.951 2.936 C 11.984 2.858 12 2.774 12 2.69 L 12 0.643 C 12 0.558 11.984 0.475 11.952 0.397 C 11.919 0.318 11.872 0.248 11.812 0.188 C 11.752 0.128 11.681 0.081 11.603 0.048 C 11.525 0.016 11.441 -0 11.357 0 L 0.643 0 C 0.558 -0 0.475 0.016 0.397 0.048 C 0.318 0.081 0.248 0.128 0.188 0.188 C 0.128 0.248 0.081 0.318 0.048 0.397 C 0.016 0.475 -0 0.558 0 0.643 L 0 2.689 C 0 3.046 0.287 3.332 0.643 3.332 Z"
                            fill="rgb(255,126,27)"
                        ></motion.path>
                    </motion.g>
                </motion.svg>
            </Box>
            <Text>{count}</Text>
            {/* next */}
            <Box
                variants={EMPTYVARIANTS}
                animate="show"
                whileHover="hover"
                whileTap="tap"
                onTap={() => setCount((n) => n + 1)}
            >
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    variants={EMPTYVARIANTS}
                >
                    <motion.g
                        transform="translate(0 0.5)"
                        variants={EMPTYVARIANTS}
                    >
                        <path
                            d="M 0 12 L 0 0 L 12 0 L 12 12 Z"
                            fill="transparent"
                        ></path>
                        <motion.path
                            variants={pathVariants}
                            d="M 12 7.023 L 12 4.977 C 12 4.893 11.984 4.809 11.952 4.731 C 11.919 4.652 11.872 4.582 11.812 4.522 C 11.752 4.462 11.681 4.415 11.603 4.382 C 11.525 4.35 11.441 4.334 11.357 4.334 L 7.667 4.334 L 7.667 0.643 C 7.667 0.558 7.651 0.474 7.618 0.396 C 7.586 0.318 7.539 0.247 7.479 0.187 C 7.419 0.127 7.347 0.08 7.269 0.048 C 7.191 0.016 7.107 -0.001 7.022 0 L 4.977 0 C 4.893 -0 4.809 0.016 4.731 0.048 C 4.652 0.081 4.582 0.128 4.522 0.188 C 4.462 0.248 4.415 0.319 4.382 0.397 C 4.35 0.475 4.334 0.558 4.334 0.643 L 4.334 4.333 L 0.643 4.333 C 0.558 4.333 0.474 4.349 0.396 4.382 C 0.318 4.414 0.247 4.461 0.187 4.521 C 0.127 4.581 0.08 4.653 0.048 4.731 C 0.016 4.809 -0.001 4.893 0 4.978 L 0 7.024 C 0 7.38 0.287 7.667 0.643 7.667 L 4.333 7.667 L 4.333 11.358 C 4.333 11.714 4.621 12.001 4.977 12.001 L 7.023 12.001 C 7.108 12.001 7.191 11.985 7.269 11.953 C 7.348 11.92 7.419 11.873 7.478 11.813 C 7.538 11.754 7.585 11.682 7.618 11.604 C 7.65 11.526 7.666 11.443 7.666 11.358 L 7.666 7.668 L 11.357 7.668 C 11.442 7.668 11.526 7.652 11.604 7.619 C 11.682 7.587 11.754 7.539 11.813 7.479 C 11.873 7.419 11.92 7.348 11.953 7.269 C 11.985 7.191 12.001 7.107 12 7.022 Z"
                            fill="rgb(255,126,27)"
                        ></motion.path>
                    </motion.g>
                </motion.svg>
            </Box>
        </Container>
    );
}
