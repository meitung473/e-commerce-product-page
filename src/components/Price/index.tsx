import { IProduct } from "../../types/model";
import { discountPrice, formatCurrency } from "../../utils/formatCurrency";
import { Sale, Container, Box, Discount, DiscountTag } from "./style";

interface IPriceProp extends Pick<IProduct, "price" | "discount"> {}

export default function Price({ price, discount }: IPriceProp) {
    return (
        <Container>
            <Box>
                <Sale>{formatCurrency(discountPrice(price, discount))}</Sale>

                <DiscountTag>{discount}%</DiscountTag>
            </Box>
            <Discount>{formatCurrency(price)}</Discount>
        </Container>
    );
}
