import { withModal } from "../../../types/global";
import { breakpointSizes } from "./../../../utils/Device";

interface IThumbnailImage
    extends Partial<
        Record<
            `${keyof typeof breakpointSizes}`,
            {
                width: string;
                gap: string;
            }
        >
    > {}

let max = 4;
let gapAmount = max - 1;

// big image based on thumbnail size
const thumbnailImage: IThumbnailImage | undefined = {
    md: {
        width: "min(60px,80px)",
        gap: "1.25rem",
    },
    xl: {
        width: "min(80px,95px)",
        gap: "1rem",
    },
};

/**
 * calculate image size
 * @param $isModal
 * @param size
 * @returns {string} (with*max) + (gap* (max - 1))
 */
export function width2Size(
    $isModal: withModal["$isModal"],
    size: keyof typeof breakpointSizes
) {
    let modalMargin = $isModal ? "5vw" : "0px";

    let result = `calc((${thumbnailImage?.[size]?.width} * ${max}) + (${thumbnailImage?.[size]?.gap} * ${gapAmount})
     + ${modalMargin})`;

    return result;
}
