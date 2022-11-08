import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
// styled , component
import {
    Wrapper,
    Header,
    Footer,
    ShowImage,
    ThumbnailSelected,
    ThumbnailBox,
    CloseContainer,
} from "./style";
import Buttons from "./Buttons";
import CloseIcon from "./Close";
import { showImageVariants } from "./animate";
// utils
import { swipeConfidenceThreshold, swipePower } from "../../utils/swipPower";
import { br } from "../../utils/Device";
import { defaultScaleAnimationVariant } from "../../utils/animateVaraints";
// hooks
import { useMediaQuery } from "../../hooks/useMediaqurey";
import { useCarousel } from "../../context/CarouselContextPackage";
// types
import { ModalProp } from "../OverlayComponent/type";
import { ICursorMethod, withModal } from "../../types/global";

interface ICarouselProp
    extends ICursorMethod,
        withModal,
        Pick<ModalProp, "handleModal"> {}

const carouselPicsId = [1, 2, 3, 4];
function Carousel({
    $isModal,
    handleModal,
    setCursorText,
    setCursorType,
}: ICarouselProp) {
    const { dir, selectedPic, setSelectedPic } = useCarousel({
        max: carouselPicsId.length - 1,
        autoPlay: !$isModal,
        rate: 5000,
    });
    const isMd = useMediaQuery(br.md);

    return (
        <Wrapper
            variants={defaultScaleAnimationVariant}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            {/* desktop modal show close button */}
            {isMd && $isModal && (
                <CloseContainer>
                    <CloseIcon handleModal={handleModal} />
                </CloseContainer>
            )}

            <Header $isModal={$isModal}>
                <AnimatePresence mode="wait" initial={false} custom={dir}>
                    {carouselPicsId.map((id, i) => (
                        <AnimatePresence
                            mode="wait"
                            initial={false}
                            key={"pic" + id}
                            custom={dir}
                        >
                            {selectedPic === i && (
                                <ShowImage
                                    $isModal={$isModal}
                                    layout
                                    key={id}
                                    src={
                                        new URL(
                                            `../../images/image-product-${id}.jpg`,
                                            import.meta.url
                                        ).href
                                    }
                                    alt={"product" + id}
                                    style={{
                                        borderRadius:
                                            $isModal || !isMd ? 0 : 15,
                                    }}
                                    variants={showImageVariants}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                    custom={dir}
                                    transition={{
                                        x: {
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30,
                                        },
                                        opacity: { duration: 0.2 },
                                    }}
                                    drag={!isMd ? "x" : $isModal ? "x" : false}
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={0.4}
                                    onDragEnd={(e, { offset, velocity }) => {
                                        const swipe = swipePower(
                                            offset.x,
                                            velocity.x
                                        );
                                        let max = carouselPicsId.length - 1;
                                        if (swipe < -swipeConfidenceThreshold) {
                                            setSelectedPic(([d, n]) => [
                                                -1,
                                                n === 0 ? max : n - 1,
                                            ]);
                                        } else if (
                                            swipe > swipeConfidenceThreshold
                                        ) {
                                            setSelectedPic(([d, n]) => [
                                                1,
                                                n === max ? 0 : n + 1,
                                            ]);
                                        }
                                    }}
                                    onTap={() => {
                                        if (!isMd || $isModal) return;
                                        if (typeof handleModal === "function") {
                                            handleModal(true)();
                                        }
                                    }}
                                    onMouseEnter={() => {
                                        if ($isModal) return;
                                        setCursorText("View");
                                        setCursorType("carousel");
                                    }}
                                    onMouseLeave={() => {
                                        if ($isModal) return;
                                        setCursorType(null);
                                        setCursorText("");
                                    }}
                                />
                            )}
                        </AnimatePresence>
                    ))}
                </AnimatePresence>
                {/* desktop modal & mobile show buttons */}
                {!isMd || $isModal ? (
                    <Buttons
                        max={carouselPicsId.length - 1}
                        setSelectedPic={setSelectedPic}
                    />
                ) : null}
            </Header>

            <Footer $isModal={$isModal}>
                <LayoutGroup id={$isModal + "Carousel"}>
                    {carouselPicsId.map((id, i) => {
                        return (
                            <ThumbnailBox key={id}>
                                <motion.img
                                    src={
                                        new URL(
                                            `../../images/image-product-${id}-thumbnail.jpg`,
                                            import.meta.url
                                        ).href
                                    }
                                    alt={"thumbnail-" + id}
                                    style={{
                                        position: "relative",
                                        verticalAlign: "middle",
                                        zIndex: !$isModal ? 0 : 2,
                                    }}
                                    animate={{
                                        opacity: selectedPic === i ? 0.5 : 1,
                                    }}
                                    onClick={() =>
                                        setSelectedPic([
                                            i > selectedPic ? 1 : -1,
                                            i,
                                        ])
                                    }
                                    whileHover={{
                                        opacity: 0.5,
                                    }}
                                />
                                {/* selected border */}
                                {i === selectedPic && (
                                    <ThumbnailSelected
                                        layoutId="indicator"
                                        style={{
                                            zIndex: !$isModal ? -2 : 1,
                                        }}
                                    />
                                )}
                            </ThumbnailBox>
                        );
                    })}
                </LayoutGroup>
            </Footer>
        </Wrapper>
    );
}

export default Carousel;
