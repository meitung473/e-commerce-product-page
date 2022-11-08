import { useCart } from "../../../context/CartContextPackage";
import { ReactComponent as Cart } from "../../../images/icon-cart.svg";
import { buttonVariants } from "../../../utils/animateVaraints";
import { CTA } from "./style";
import { IButtonProps } from "./type";

export default function Button({ id, quantity }: IButtonProps) {
    const { dispatch } = useCart();

    return (
        <CTA
            variants={buttonVariants}
            animate="show"
            whileHover="hover"
            whileTap="tap"
            onTap={() => {
                dispatch({
                    type: "updateItem",
                    payload: { id, quantity },
                });
            }}
        >
            <Cart />
            <span>Add to cart</span>
        </CTA>
    );
}
