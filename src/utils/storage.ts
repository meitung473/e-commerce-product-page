import { IInitialState } from "../context/CartContext.type";
import { initialState } from "./../context/CartContextPackage";

const SESSION_ITEM_NAME = "cartItems";

export const getCartItems = (): IInitialState => {
    try {
        const item = window.sessionStorage.getItem(SESSION_ITEM_NAME);
        return item ? (JSON.parse(item) as IInitialState) : initialState;
    } catch (error) {
        console.warn(
            `Error reading sessionStorage key “${SESSION_ITEM_NAME}”:`,
            error
        );
        return initialState;
    }
};

export const setCartItems = (state: IInitialState) =>
    window.sessionStorage.setItem(SESSION_ITEM_NAME, JSON.stringify(state));
