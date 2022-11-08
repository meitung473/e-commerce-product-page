export const breakpointSizes = {
    xxl: 1367,
    xl: 996,
    md: 768,
    sm: 576,
} as const;

/**
 *
 * solution : No overload matches this call.
 * https://stackoverflow.com/questions/57379778/typescript-type-for-reduce
 */
export const br = (
    Object.keys(breakpointSizes) as Array<keyof typeof breakpointSizes>
).reduce((p, n) => {
    p[n] = `@media screen and (min-width: ${breakpointSizes[n]}px)`;
    return p;
}, {} as Record<keyof typeof breakpointSizes, string>);

//Record<`${keyof typeof breakpointSizes}`, string>
