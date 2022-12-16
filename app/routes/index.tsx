import { useRef } from "react";
import { ClientOnly } from "remix-utils";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { config } from "react-spring";

import useOnScreen from "~/hooks/useOnScreen";
import { Gallery } from "~/components/Gallery";
import logo from "~/img/logo.svg";

export default function Index() {
    const ref = useRef(null);
    const onScreen = useOnScreen(ref, 0.4);

    return (
        <section
            data-scroll-container
            id="main-container"
            className="absolute inset-0 overflow-clip overflow-y-auto"
        >
            <Parallax pages={5} config={config.default}>
                <ParallaxLayer
                    sticky={{ start: 0, end: 4 }}
                    style={{ zIndex: "-1" }}
                >
                    <div
                        ref={ref}
                        className="absolute inset-0 pointer-events-none"
                    >
                        <div
                            className={`absolute top-36 md:top-0 md:bottom-0 md:left-0 md:right-1/2 px-16 lg:pl-12 lg:pr-24 xl:pl-24 xl:pr-48 grid justify-items-center content-center transition duration-700 -translate-y-4 opacity-0 ${
                                true && "translate-y-0 opacity-100"
                            }`}
                        >
                            <img
                                src={logo}
                                alt="Logo"
                                className="w-full max-w-xl"
                            />
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer speed={-0.3}>
                    <div className="absolute bottom-36 md:top-32 md:bottom-0 left-0 md:left-1/2 right-0 lg:right-12 xl:right-24 py-24 md:py-0 px-12 md:px-0 grid justify-start content-center pointer-events-none">
                        <p className="max-w-xl lg:text-lg text-center md:text-left">
                            Apartamentos frente al mar y a dos cuadras del
                            centro de Santa Clara del Mar. Cuentan con
                            calefacción central, WI-FI, cable, parrillas, SUM y
                            estacionamiento.
                        </p>
                    </div>
                </ParallaxLayer>
                <ClientOnly>
                    {() => (
                        <>
                            <Gallery
                                offset={1}
                                title="Espacios Compartidos"
                                src1="/img/Sum/02.jpg"
                                src2="/img/Sum/04.jpg"
                                src3="/img/Sum/03.jpg"
                                src4="/img/Sum/01.jpg"
                            />
                            <Gallery
                                offset={2}
                                title="Apartamentos con vista al mar"
                                src1="/img/Mar/02.jpg"
                                src2="/img/Mar/03.jpg"
                                src3="/img/Mar/04.jpg"
                                src4="/img/Mar/01.jpg"
                            />
                            <Gallery
                                offset={3}
                                title="Apartamentos internos"
                                src1="/img/Interior/03.jpg"
                                src2="/img/Interior/04.jpg"
                                src3="/img/Interior/02.jpg"
                                src4="/img/Interior/01.jpg"
                            />
                        </>
                    )}
                </ClientOnly>
                <ParallaxLayer offset={4} speed={0.0} factor={1}>
                    <div className="absolute top-0 md:top-28 bottom-1/2 md:bottom-0 left-0 right-0 md:right-1/2 py-12 px-16 lg:pl-12 lg:pr-24 xl:pl-24 xl:pr-48 grid justify-center content-between pointer-events-none gap-8">
                        <img
                            src="/img/Galeria/02.jpg"
                            alt=""
                            className="w-full max-w-[40vw] md:max-w-[24vw] rounded-lg shadow-lg overflow-clip"
                        />
                        <img
                            src="/img/Galeria/03.jpg"
                            alt=""
                            className="w-full max-w-[40vw] md:max-w-[24vw] rounded-lg shadow-lg overflow-clip"
                        />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={4} speed={0.2} factor={1}>
                    <div className="absolute md:top-28 bottom-32 md:bottom-0 left-8 md:left-1/2 grid justify-start content-center pointer-events-none gap-8">
                        <img
                            src="/img/Galeria/08.jpg"
                            alt=""
                            className="w-full max-w-[35vw] md:max-w-[18vw] rounded-lg shadow-lg overflow-clip"
                        />
                        <img
                            src="/img/Galeria/01.jpg"
                            alt=""
                            className="w-full max-w-[35vw] md:max-w-[18vw] rounded-lg shadow-lg overflow-clip"
                        />
                        <img
                            src="/img/Galeria/06.jpg"
                            alt=""
                            className="w-full max-w-[35vw] md:max-w-[18vw] rounded-lg shadow-lg overflow-clip"
                        />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={4} speed={0.4} factor={1}>
                    <div className="absolute md:top-28 bottom-32 md:bottom-0 right-8 lg:right-12 xl:right-24 grid justify-start content-center pointer-events-none gap-8">
                        <img
                            src="/img/Galeria/04.jpg"
                            alt=""
                            className="w-full max-w-[35vw] md:max-w-[18vw] rounded-lg shadow-lg overflow-clip"
                        />
                        <img
                            src="/img/Galeria/09.jpg"
                            alt=""
                            className="w-full max-w-[35vw] md:max-w-[18vw] rounded-lg shadow-lg overflow-clip"
                        />
                        <img
                            src="/img/Galeria/10.jpg"
                            alt=""
                            className="w-full max-w-[35vw] md:max-w-[18vw] rounded-lg shadow-lg overflow-clip"
                        />
                    </div>
                </ParallaxLayer>
            </Parallax>
        </section>
    );
}
