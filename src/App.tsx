import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
// styled,component
import BasedStyles from "./style/GlobalStyle";
import { Container, Main, Content } from "./style";
import {
    Header,
    Price,
    Cursor,
    OverlayComponent,
    Carousel,
    AddToCart,
} from "./components";
import { theme } from "./style/theme";
// hooks
import useToggle from "./hooks/useToggle";
import { useMediaQuery } from "./hooks/useMediaqurey";
import { br } from "./utils/Device";
// type
import { TCursorTypeState } from "./types/global";
// context
import { CartProvider } from "./context/CartContextPackage";
import { CarouselProvider } from "./context/CarouselContextPackage";
// data
import data from "./data/data.json";

export default function App() {
    const { toggle: carouselModal, handleToggle: handleCarouselModal } =
        useToggle(false);

    const isMd = useMediaQuery(br.md);

    const [cursorText, setCursorText] = useState<string>("");
    const [cursorType, setCursorType] = useState<TCursorTypeState>(null);
    return (
        <ThemeProvider theme={theme}>
            <BasedStyles />
            {isMd && <Cursor type={cursorType}>{cursorText}</Cursor>}
            <CartProvider>
                <Container>
                    <Header />
                    <Main>
                        <CarouselProvider>
                            <Carousel
                                handleModal={handleCarouselModal}
                                setCursorText={setCursorText}
                                setCursorType={setCursorType}
                            />
                        </CarouselProvider>
                        <CarouselProvider>
                            {/* modal Carousel */}
                            {isMd && (
                                <AnimatePresence mode="wait">
                                    {carouselModal && (
                                        <OverlayComponent
                                            key="carousel"
                                            overlay={true}
                                            handleModal={handleCarouselModal}
                                        >
                                            <Carousel
                                                $isModal={true}
                                                handleModal={
                                                    handleCarouselModal
                                                }
                                                setCursorText={setCursorText}
                                                setCursorType={setCursorType}
                                            />
                                        </OverlayComponent>
                                    )}
                                </AnimatePresence>
                            )}
                        </CarouselProvider>

                        <Content>
                            <div>
                                <h4>{data[0].company}</h4>
                                <h1> {data[0].name}</h1>
                            </div>
                            <p>{data[0].description}</p>
                            <Price
                                price={data[0].price}
                                discount={data[0].discount}
                            />
                            <AddToCart id={data[0].id} />
                        </Content>
                    </Main>
                </Container>
                <div className="attribution">
                    Challenge by{" "}
                    <a
                        href="https://www.frontendmentor.io?ref=challenge"
                        target="_blank"
                    >
                        Frontend Mentor
                    </a>
                    . Coded by <a href="https://blog.rosa.tw">Rosa</a>.
                </div>
            </CartProvider>
        </ThemeProvider>
    );
}
