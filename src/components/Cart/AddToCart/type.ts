import { IProduct } from "../../../types/model";

export interface IContainerProp extends Pick<IProduct, "id"> {}
export interface IButtonProps extends Pick<IProduct, "id" | "quantity"> {}
export type TCounterState = number;
