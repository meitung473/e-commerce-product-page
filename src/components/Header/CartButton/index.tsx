import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReactComponent as CartIcon } from "../../../images/icon-cart.svg";
import { Container, Number } from "./style";
import { defaultScaleAnimationVariant } from "./../../../utils/animateVaraints";
import { useCart } from "../../../context/CartContextPackage";
import { ModalProp } from "../../OverlayComponent/type";

interface ICartButtonProp {
    handleCartToggle: ModalProp["handleModal"];
}

export default function CartButton({ handleCartToggle }: ICartButtonProp) {
    const { state } = useCart();
    // product total amount
    const totalProductAmount = useMemo(() => {
        let total = 0;

        // initial state could be empty
        if (state) {
            for (let product of state) {
                total += product.quantity;
            }
        }
        return total;
    }, [state]);

    return (
        <Container>
            <CartIcon
                onClick={() => {
                    if (typeof handleCartToggle === "function") {
                        handleCartToggle(undefined)();
                    }
                }}
            />
            <AnimatePresence mode="wait">
                {totalProductAmount > 0 && (
                    <Number
                        variants={defaultScaleAnimationVariant}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                    >
                        <motion.span
                            key={totalProductAmount}
                            animate={{
                                scale: [1, 1.5, 1],
                            }}
                            exit={{
                                scale: 0,
                            }}
                        >
                            {totalProductAmount}
                        </motion.span>
                    </Number>
                )}
            </AnimatePresence>
        </Container>
    );
}
