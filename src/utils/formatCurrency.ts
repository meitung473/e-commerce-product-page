/**
 * calculate  price
 * @param {number} price Original Price
 * @param {number} discount
 * @returns sale Price
 */
export function discountPrice(price: number, discount: number) {
    return Math.floor(price * (discount / 100));
}
/**
 * formatCurrency
 * @param {number} number
 * @param {string} currency
 * @returns {string}
 */
export function formatCurrency(number: number, currency = "USD") {
    return new Intl.NumberFormat("en-us", {
        style: "currency",
        currency,
        minimumFractionDigits: 2,
    }).format(number);
}
