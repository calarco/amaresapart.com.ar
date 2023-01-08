import { useRef, useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import type { IParallax } from "@react-spring/parallax";
import { config } from "react-spring";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import { Gallery } from "~/components/Gallery";
import logo from "~/img/logo.svg";

export default function Inde() {
    const ref = useRef<IParallax>(null!);
    const [page, setPage] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const current = ref.current.current;

            setPage(
                current > 3200
                    ? ""
                    : current > 2400
                    ? "Apartamentos internos"
                    : current > 1400
                    ? "Apartamentos con vista al mar"
                    : current > 400
                    ? "Espacios compartidos"
                    : ""
            );
        };

        const container = ref.current.container.current;
        container.addEventListener("scroll", handleScroll);

        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section
            data-scroll-container
            id="main-container"
            className="absolute inset-0 overflow-clip overflow-y-auto"
        >
            <Parallax pages={5} config={config.default} ref={ref}>
                <ParallaxLayer
                    sticky={{ start: 0, end: 4 }}
                    style={{ zIndex: "-1" }}
                >
                    <div className="animate-from-top absolute top-0 bottom-0 left-0 right-1/2 grid justify-items-center content-center pointer-events-none">
                        <div className="px-16 lg:pl-12 lg:pr-24 xl:pl-24 xl:pr-48 grid justify-items-center content-center">
                            <img
                                src={logo}
                                alt="Logo"
                                className="w-full max-w-xl"
                            />
                        </div>
                        <SwitchTransition mode="in-out">
                            <CSSTransition
                                key={page}
                                timeout={500}
                                classNames={{
                                    enter: "opacity-0 translate-y-8",
                                    enterActive: "opacity-1",
                                    exit: "opacity-1",
                                    exitActive: "opacity-0 -translate-y-8",
                                }}
                            >
                                <div className="transition duration-500 absolute top-2/3 bottom-40 left-0 right-0 px-16 lg:pl-12 lg:pr-24 xl:pl-24 xl:pr-48 grid justify-items-center content-center">
                                    <h2 className="w-full max-w-xl md:text-center text-4xl lg:text-5xl text-secondary font-momcake tracking-wide mix-blend-difference">
                                        {page}
                                    </h2>
                                </div>
                            </CSSTransition>
                        </SwitchTransition>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer speed={-0.3}>
                    <div className="animate-from-top absolute bottom-36 md:top-32 md:bottom-0 left-0 md:left-1/2 right-0 lg:right-12 xl:right-24 py-24 md:py-0 px-12 md:px-0 grid justify-start content-center pointer-events-none">
                        <p className="max-w-xl lg:text-lg text-center md:text-left">
                            Apartamentos frente al mar y a dos cuadras del
                            centro de Santa Clara del Mar. Cuentan con
                            calefacción central, WI-FI, cable, parrillas, SUM y
                            estacionamiento.
                        </p>
                    </div>
                </ParallaxLayer>
                <Gallery
                    offset={1}
                    src1="/img/Sum/02.jpg"
                    src2="/img/Sum/04.jpg"
                    src3="/img/Sum/03.jpg"
                    src4="/img/Sum/01.jpg"
                />
                <Gallery
                    offset={2}
                    src1="/img/Mar/02.jpg"
                    src2="/img/Mar/03.jpg"
                    src3="/img/Mar/04.jpg"
                    src4="/img/Mar/01.jpg"
                />
                <Gallery
                    offset={3}
                    src1="/img/Interior/03.jpg"
                    src2="/img/Interior/04.jpg"
                    src3="/img/Interior/02.jpg"
                    src4="/img/Interior/01.jpg"
                />
                <ParallaxLayer offset={4} speed={0.0}>
                    <div className="absolute top-1/4 md:top-28 bottom-1/2 md:bottom-auto md:left-0 right-0 md:right-1/2 py-4 md:py-12 px-16 lg:pl-12 lg:pr-24 xl:pl-24 xl:pr-48 grid justify-items-center pointer-events-none">
                        <img
                            src="/img/Galeria/02.jpg"
                            alt=""
                            className="w-full max-w-[40vw] md:max-w-[18vw] rounded-lg shadow-lg overflow-clip"
                        />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={4} speed={-0.2}>
                    <div className="absolute top-0 md:top-auto bottom-1/2 md:bottom-0 left-0 md:right-1/2 py-12 px-16 lg:pl-12 lg:pr-24 xl:pl-24 xl:pr-48 grid justify-items-center pointer-events-none">
                        <img
                            src="/img/Galeria/03.jpg"
                            alt=""
                            className="w-full max-w-[40vw] md:max-w-[24vw] rounded-lg shadow-lg overflow-clip"
                        />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={4} speed={0.2}>
                    <div className="absolute md:top-28 bottom-32 md:bottom-0 left-8 md:left-1/2 grid justify-start content-center pointer-events-none gap-8">
                        <img
                            src="/img/Galeria/08.jpg"
                            loading="lazy"
                            alt=""
                            className="w-full max-w-[35vw] md:max-w-[18vw] rounded-lg shadow-lg overflow-clip"
                        />
                        <img
                            src="/img/Galeria/01.jpg"
                            loading="lazy"
                            alt=""
                            className="w-full max-w-[35vw] md:max-w-[18vw] rounded-lg shadow-lg overflow-clip"
                        />
                        <img
                            src="/img/Galeria/06.jpg"
                            loading="lazy"
                            alt=""
                            className="w-full max-w-[35vw] md:max-w-[18vw] rounded-lg shadow-lg overflow-clip"
                        />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={4} speed={0.4}>
                    <div className="absolute md:top-28 bottom-32 md:bottom-0 right-8 lg:right-12 xl:right-24 grid justify-start content-center pointer-events-none gap-8">
                        <img
                            src="/img/Galeria/04.jpg"
                            loading="lazy"
                            alt=""
                            className="w-full max-w-[35vw] md:max-w-[18vw] rounded-lg shadow-lg overflow-clip"
                        />
                        <img
                            src="/img/Galeria/09.jpg"
                            loading="lazy"
                            alt=""
                            className="w-full max-w-[35vw] md:max-w-[18vw] rounded-lg shadow-lg overflow-clip"
                        />
                        <img
                            src="/img/Galeria/10.jpg"
                            loading="lazy"
                            alt=""
                            className="w-full max-w-[35vw] md:max-w-[18vw] rounded-lg shadow-lg overflow-clip"
                        />
                    </div>
                </ParallaxLayer>
            </Parallax>
        </section>
    );
}
