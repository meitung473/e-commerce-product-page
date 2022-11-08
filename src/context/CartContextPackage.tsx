import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { setCartItems, getCartItems } from "../utils/storage";
import data from "../data/data.json";
import {
    IInitialState,
    ACTIONTYPE,
    ICartProviderProp,
    ICartContext,
} from "./CartContext.type";

const CartContext = createContext<ICartContext | undefined>(undefined);
export const initialState: IInitialState = [];

function cartReducer(state: IInitialState, action: ACTIONTYPE): IInitialState {
    switch (action.type) {
        case "get": {
            return getCartItems() || [];
        }
        case "updateItem": {
            // find product in data.json which next to add
            const product = data.find((item) => item.id === action.payload.id);

            // product not exist
            if (!product) throw new Error("incorrect product is be added");

            const { id, name, price, discount } = product;

            // if product in Cart now ?
            let isExist = state.find((item) => item.id === action.payload.id);

            if (isExist) {
                // decrease and quantity is last should be remove
                if (action.payload.quantity < 0 && isExist.quantity === 1) {
                    return state.filter(
                        (item) => item.id === action.payload.id
                    );
                }
                // increase
                return state.map((item) =>
                    item.id !== action.payload.id
                        ? item
                        : {
                              ...item,
                              quantity: item.quantity + action.payload.quantity,
                          }
                );
            }

            // not exist in Cart and add new product
            return [
                ...state,
                {
                    id,
                    name,
                    price,
                    discount,
                    quantity: action.payload.quantity,
                },
            ];
        }
        case "removeItem": {
            return state.filter(({ id }) => id !== action.payload.id);
        }

        case "clearAll": {
            window.sessionStorage.clear();
            return initialState;
        }
        default: {
            throw new Error("Unhandled action type");
        }
    }
}

function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartContext");
    }

    const { state, dispatch } = context;

    return { state, dispatch };
}

function CartProvider({ children }: ICartProviderProp) {
    const [state, dispatch] = useReducer(
        cartReducer,
        initialState,
        () => getCartItems() || initialState
    );

    useEffect(() => {
        setCartItems(state);
    }, [state]);
    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}

export { useCart, CartProvider };
