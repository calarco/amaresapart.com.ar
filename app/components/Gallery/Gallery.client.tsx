import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import useOnScreen from "~/hooks/useOnScreen";

function GalleryItem({ src }: { src: string }) {
    const ref = useRef(null);
    const onScreen = useOnScreen(ref, 0.5);

    return (
        <div ref={ref} className="px-12">
            <img
                src={src}
                className={`transition-transform scale-100 h-full aspect-[4/3] shadow-lg rounded-md ${
                    onScreen && "scale-100"
                }`}
            />
        </div>
    );
}

export default function Gallery({
    images,
}: {
    images: { title: string; list: string[] }[];
}) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        // This does not seem to work without a settimeout
        setTimeout(() => {
            let sections = gsap.utils.toArray(".gallery-item-wrapper");

            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    start: "top top",
                    trigger: ref.current,
                    scroller: "#main-container",
                    pin: true,
                    scrub: 0.5,
                    //snap: 1 / (sections.length - 1),
                    end: () => `+=${ref.current?.offsetWidth}`,
                },
            });
            ScrollTrigger.refresh();
        });
    }, []);

    return (
        <article
            data-scroll-section
            ref={ref}
            className="pointer-events-none h-screen w-[300vw] grid grid-cols-3 items-center"
        >
            {images.map((category) => (
                <div className="gallery-item-wrapper relative h-full w-screen grid grid-cols-3 items-center">
                    <h3 className="fixed z-20 bottom-12 left-24 p-12 text-4xl text-secondary">
                        {category.title}
                    </h3>
                    {category.list.map((image) => (
                        <GalleryItem key={image} src={image} />
                    ))}
                </div>
            ))}
        </article>
    );
}
