import { useCart } from "../../../context/CartContextPackage";
import { motion, AnimatePresence } from "framer-motion";
import { discountPrice } from "../../../utils/formatCurrency";

import {
    Container,
    Header,
    CTAButton,
    Item,
    Name,
    Empty,
    Price,
    Body,
} from "./style";
import { buttonVariants, EMPTYVARIANTS } from "../../../utils/animateVaraints";
import { formatCurrency } from "./../../../utils/formatCurrency";
import data from "../../../data/data.json";
import { defaultScaleAnimationVariant } from "./../../../utils/animateVaraints";

function CartModal() {
    const { state, dispatch } = useCart();
    return (
        <Container
            variants={defaultScaleAnimationVariant}
            initial="hidden"
            animate="show"
            exit="hidden"
        >
            <Header>Cart</Header>
            <Body>
                <AnimatePresence mode="popLayout" initial={false}>
                    {state && state.length > 0 && (
                        <>
                            <motion.ul
                                variants={EMPTYVARIANTS}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                            >
                                {state.map((item) => {
                                    const product = data.find(
                                        (d) => d.id === item.id
                                    );
                                    if (!product) return null;
                                    const { name, price, discount, thumbnail } =
                                        product;

                                    const salePrice = discountPrice(
                                        price,
                                        discount
                                    );

                                    const totalPrice = formatCurrency(
                                        salePrice * item.quantity
                                    );

                                    return (
                                        <Item
                                            key={name}
                                            variants={
                                                defaultScaleAnimationVariant
                                            }
                                        >
                                            <img
                                                src={
                                                    new URL(
                                                        `../../../images/${thumbnail[0]}`,
                                                        import.meta.url
                                                    ).href
                                                }
                                                alt={name}
                                            />
                                            <div>
                                                <Name>{name}</Name>
                                                <Price>
                                                    <span>
                                                        {formatCurrency(
                                                            salePrice
                                                        )}
                                                    </span>
                                                    x
                                                    <span>{item.quantity}</span>
                                                    <span>{totalPrice}</span>
                                                </Price>
                                            </div>

                                            {/* delete Icon */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="16"
                                                onClick={() =>
                                                    dispatch({
                                                        type: "removeItem",
                                                        payload: {
                                                            id: item.id,
                                                        },
                                                    })
                                                }
                                            >
                                                <g>
                                                    <path
                                                        d="M 0 16 L 0 0 L 14 0 L 14 16 Z"
                                                        fill="transparent"
                                                    ></path>
                                                    <path
                                                        d="M 0 2.625 L 0 1.75 C 0 1.334 0.334 1 0.75 1 L 4.25 1 L 4.544 0.416 C 4.605 0.291 4.7 0.185 4.819 0.112 C 4.937 0.038 5.074 -0.001 5.213 0 L 8.784 0 C 8.924 -0 9.061 0.039 9.179 0.112 C 9.298 0.186 9.394 0.291 9.456 0.416 L 9.75 1 L 13.25 1 C 13.666 1 14 1.334 14 1.75 L 14 2.625 C 14 2.724 13.96 2.82 13.89 2.89 C 13.82 2.96 13.724 3 13.625 3 L 0.375 3 C 0.276 3 0.18 2.96 0.11 2.89 C 0.04 2.82 0 2.724 0 2.625 Z M 13 4.375 L 13 14.5 C 13 14.898 12.842 15.279 12.561 15.561 C 12.279 15.842 11.898 16 11.5 16 L 2.5 16 C 2.102 16 1.721 15.842 1.439 15.561 C 1.158 15.279 1 14.898 1 14.5 L 1 4.375 C 1 4.169 1.169 4 1.375 4 L 12.625 4 C 12.831 4 13 4.169 13 4.375 Z M 4.5 6.5 C 4.5 6.225 4.275 6 4 6 C 3.725 6 3.5 6.225 3.5 6.5 L 3.5 13.5 C 3.5 13.775 3.725 14 4 14 C 4.275 14 4.5 13.775 4.5 13.5 Z M 7.5 6.5 C 7.5 6.225 7.275 6 7 6 C 6.725 6 6.5 6.225 6.5 6.5 L 6.5 13.5 C 6.5 13.775 6.725 14 7 14 C 7.275 14 7.5 13.775 7.5 13.5 Z M 10.5 6.5 C 10.5 6.225 10.275 6 10 6 C 9.725 6 9.5 6.225 9.5 6.5 L 9.5 13.5 C 9.5 13.775 9.725 14 10 14 C 10.275 14 10.5 13.775 10.5 13.5 Z"
                                                        fill="rgb(195,202,217)"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </Item>
                                    );
                                })}
                            </motion.ul>
                            <CTAButton
                                variants={buttonVariants}
                                whileTap="tap"
                                whileHover="hover"
                                animate="show"
                            >
                                <a href="#checkout">Checkout</a>
                            </CTAButton>
                        </>
                    )}

                    {!state ||
                        (state?.length === 0 && (
                            <Empty variants={defaultScaleAnimationVariant}>
                                Your cart is empty.
                            </Empty>
                        ))}
                </AnimatePresence>
            </Body>
        </Container>
    );
}
export default CartModal;
