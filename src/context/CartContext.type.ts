import { ReactNode, Dispatch } from "react";

export interface ICartProviderProp {
    children: ReactNode;
}

export type IInitialState = IProduct[];

export interface ICartContext {
    state: IInitialState;
    dispatch: Dispatch<ACTIONTYPE>;
}

export interface IProduct {
    id: number;
    name: string;
    price: number;
    discount: number;
    quantity: number;
}

export type ACTIONTYPE =
    | { type: "get"; payload: undefined }
    | {
          type: "updateItem";
          payload: Pick<IProduct, "id" | "quantity">;
      }
    | {
          type: "removeItem";
          payload: Pick<IProduct, "id">;
      }
    | {
          type: "clearAll";
          payload: Pick<IProduct, "id">;
      };
