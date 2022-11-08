const swipeConfidenceThreshold = 10000;
/**
 * Carousel drag swipe power
 * @param {number} offset
 * @param {number} velocity
 * @returns
 */
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

export { swipeConfidenceThreshold, swipePower };
