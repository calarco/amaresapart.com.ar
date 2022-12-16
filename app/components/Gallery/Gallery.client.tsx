import { ParallaxLayer } from "@react-spring/parallax";
import Image from "remix-image";

export default function Gallery({
    offset,
    title,
    src1,
    src2,
    src3,
    src4,
}: {
    offset: number;
    title: string;
    src1: string;
    src2: string;
    src3: string;
    src4: string;
}) {
    const sizes = [
        {
            size: {
                width: 300,
                height: 225,
            },
            maxWidth: 400,
        },
        {
            size: {
                width: 600,
                height: 450,
            },
        },
    ];

    return (
        <>
            <ParallaxLayer offset={offset} speed={-0.2}>
                <div className="absolute z-10 md:top-32 bottom-[46vh] md:bottom-0 left-0 md:left-1/2 md:right-0 lg:right-12 xl:right-24 pt-12 md:pt-0 px-8 md:px-0 grid content-center justify-center">
                    <Image
                        src={src1}
                        responsive={sizes}
                        dprVariants={[1, 3]}
                        className="w-full max-w-[60vw] md:max-w-xl aspect-[4/3] rounded-lg shadow-lg overflow-clip"
                    />
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={offset} speed={0.2}>
                <div className="absolute md:top-12 bottom-1/3 md:bottom-auto lg:left-1/2 right-8 md:right-auto pt-4 md:pt-0 grid content-center">
                    <img
                        src={src2}
                        alt=""
                        className="w-full max-w-[50vw] md:max-w-[22vw] max-h-[15vh] md:max-h-[35vh] rounded-lg shadow-lg overflow-clip"
                    />
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={offset} speed={0.4}>
                <div className="absolute z-10 bottom-[20vh] md:bottom-12 left-8 md:left-1/2 grid content-center">
                    <img
                        src={src3}
                        alt=""
                        className="w-full max-w-[50vw] md:max-w-[18vw] max-h-[15vh] md:max-h-[35vh] rounded-lg shadow-lg overflow-clip"
                    />
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={offset} speed={0.6}>
                <div className="absolute bottom-[12vh] md:bottom-12 right-12 md:right-24 grid content-center">
                    <img
                        src={src4}
                        alt=""
                        className="w-full max-w-[30vw] md:max-w-[14vw] rounded-lg shadow-lg overflow-clip"
                    />
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={offset} speed={0.0}>
                <div className="absolute top-8 md:top-3/4 md:left-0 md:right-1/2 md:py-8 px-12 lg:pl-12 lg:pr-24 xl:pl-24 xl:pr-48 grid content-center justify-items-center">
                    <h2 className="w-full max-w-xl md:text-center text-4xl lg:text-5xl text-secondary font-momcake tracking-wide mix-blend-difference">
                        {title}
                    </h2>
                </div>
            </ParallaxLayer>
        </>
    );
}
