import { useState } from "react";
import Counter from "../Counter";
import Button from "./Button";
import { Wrapper } from "./style";
import { IContainerProp, TCounterState } from "./type";

export default function AddToCart({ id }: IContainerProp) {
    const [count, setCount] = useState<TCounterState>(1);
    return (
        <Wrapper>
            <Counter count={count} setCount={setCount} />
            <Button id={id} quantity={count} />
        </Wrapper>
    );
}
