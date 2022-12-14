import { useState, useEffect } from "react";
import type { RefObject } from "react";

function useOnScreen(ref: RefObject<HTMLDivElement>, threshold: number = 0.3) {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update our state when observer callback fires
                setIntersecting(entry?.isIntersecting ?? false);
            },
            {
                rootMargin: "0px",
                threshold,
            }
        );
        const currentRef = ref.current;
        console.log(currentRef)
        if (currentRef) {
            observer.observe(currentRef);
        }
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, threshold]); // Empty array ensures that effect is only run on mount and unmount

    return isIntersecting;
}
export default useOnScreen;
