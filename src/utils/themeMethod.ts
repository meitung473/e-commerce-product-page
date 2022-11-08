type scale = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type greyScale = `black_${scale}00` | `black_${0}`;

/**
 * create grayscale
 * @param {Number} scaleOffset
 * @returns 回傳物件
 */

export function createGrayScale(scaleOffset: number) {
    return (
        Array.from({
            length: scaleOffset + 1,
        }) as Array<undefined>
    ).reduce((p, n, i) => {
        let key = `black_${(scaleOffset - i) * 100}` as greyScale;
        p[key] = `hsla(0,0%,${i * 10}0%,1)`;
        return p;
    }, {} as Record<greyScale, string>);
}
//Record<greyScale, `hsla(0,0%,${number}0%,1)`>

/**
 * 調整 color 的透明度，使用 hsla
 * @param {string} color
 * @param {number} value
 * @returns
 */
export function adjustAlpha(color: string, value: number): string {
    return color.replace(/(\d.?)\)$/, `${value})`);
}
