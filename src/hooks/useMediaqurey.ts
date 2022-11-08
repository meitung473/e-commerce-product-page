import { useState, useEffect } from "react";

/**
 * device width for JavaScript style
 * @param {string} query
 * @returns
 */
export function useMediaQuery(query: string) {
    query = query.replace("@media", "");
    const [matches, setMatches] = useState<boolean>(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        // when screen change, make magic happening
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        // invoke re-render
        const listener = (e: MediaQueryListEvent): void => {
            setMatches(media.matches);
        };
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, [matches, query]);

    return matches;
}
