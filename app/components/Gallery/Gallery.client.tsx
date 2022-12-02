import { ParallaxLayer } from "@react-spring/parallax";

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
    return (
        <>
            <ParallaxLayer offset={offset} speed={0.0}>
                <div className="absolute z-10 top-44 md:top-0 md:bottom-24 left-0 right-0 md:right-1/2 pl-12 pr-24 xl:px-24 grid content-center">
                    <img
                        src={src1}
                        alt=""
                        className="w-full max-w-xl rounded-lg shadow-lg overflow-clip"
                    />
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={offset} speed={0.2}>
                <div className="absolute top-1/2 md:top-32 right-12 md:right-[24vw] grid content-center">
                    <img
                        src={src2}
                        alt=""
                        className="w-full max-w-[50vw] md:max-w-[20vw] max-h-[15vh] md:max-h-[35vh] rounded-lg shadow-lg overflow-clip"
                    />
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={offset} speed={0.4}>
                <div className="absolute z-10 bottom-[15vh] md:bottom-24 left-8 md:left-1/2 grid content-center">
                    <img
                        src={src3}
                        alt=""
                        className="w-full max-w-[50vw] md:max-w-[20vw] max-h-[15vh] md:max-h-[35vh] rounded-lg shadow-lg overflow-clip"
                    />
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={offset} speed={0.6}>
                <div className="absolute md:top-32 bottom-24 right-8 md:right-24 grid content-center">
                    <img
                        src={src4}
                        alt=""
                        className="w-full max-w-[25vw] md:max-w-[14vw] rounded-lg shadow-lg overflow-clip"
                    />
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={offset} speed={-0.1}>
                <div className="absolute top-8 md:top-auto md:bottom-12 md:left-24 md:right-1/2 grid content-center">
                    <h2 className="max-w-xl md:py-24 px-12 md:px-8 text-4xl lg:text-5xl text-secondary font-momcake tracking-wide mix-blend-difference">
                        {title}
                    </h2>
                </div>
            </ParallaxLayer>
        </>
    );
}
