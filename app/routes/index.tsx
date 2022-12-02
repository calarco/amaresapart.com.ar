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
                            className={`absolute inset-0 px-12 pb-24 md:p-24 grid justify-items-center content-center transition duration-700 -translate-y-4 opacity-0 ${
                                true && "translate-y-0 opacity-100"
                            }`}
                        >
                            <img
                                src={logo}
                                alt="Logo"
                                className="w-full max-w-2xl"
                            />
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer speed={-0.2}>
                    <div className="absolute bottom-1/4 md:bottom-auto md:top-3/4 left-0 right-0 p-8 grid justify-items-center content-center pointer-events-none">
                        <p className="max-w-2xl lg:text-lg text-center">
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
                                src2="/img/Sum/03.jpg"
                                src3="/img/Sum/04.jpg"
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
                                src2="/img/Interior/02.jpg"
                                src3="/img/Interior/04.jpg"
                                src4="/img/Interior/01.jpg"
                            />
                        </>
                    )}
                </ClientOnly>
                <ParallaxLayer offset={4} speed={0.1} factor={2.5}>
                    <div className="absolute top-8 md:top-0 left-0 md:left-24 right-1/2 p-4 md:p-0 grid gap-8 content-center">
                        <img
                            src="/img/Galeria/01.jpg"
                            alt=""
                            className="w-full max-w-xl rounded-lg shadow-lg overflow-clip"
                        />
                        <img
                            src="/img/Galeria/02.jpg"
                            alt=""
                            className="w-full max-w-xl rounded-lg shadow-lg overflow-clip"
                        />
                        <img
                            src="/img/Galeria/03.jpg"
                            alt=""
                            className="w-full max-w-xl rounded-lg shadow-lg overflow-clip"
                        />
                        <img
                            src="/img/Galeria/04.jpg"
                            alt=""
                            className="w-full max-w-xl rounded-lg shadow-lg overflow-clip"
                        />
                        <img
                            src="/img/Galeria/05.jpg"
                            alt=""
                            className="w-full max-w-xl rounded-lg shadow-lg overflow-clip"
                        />
                        <img
                            src="/img/Galeria/06.jpg"
                            alt=""
                            className="w-full max-w-xl rounded-lg shadow-lg overflow-clip"
                        />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={4} speed={0.3} factor={2.5}>
                    <div className="absolute top-8 md:top-0 left-1/2 right-0 md:right-24 p-4 md:p-0 grid gap-8 content-center justify-center">
                        <img
                            src="/img/Galeria/07.jpg"
                            alt=""
                            className="w-full max-w-xl rounded-lg shadow-lg overflow-clip"
                        />
                        <img
                            src="/img/Galeria/08.jpg"
                            alt=""
                            className="w-full max-w-xl rounded-lg shadow-lg overflow-clip"
                        />
                        <img
                            src="/img/Galeria/09.jpg"
                            alt=""
                            className="w-full max-w-xl rounded-lg shadow-lg overflow-clip"
                        />
                        <img
                            src="/img/Galeria/10.jpg"
                            alt=""
                            className="w-full max-w-xl rounded-lg shadow-lg overflow-clip"
                        />
                        <img
                            src="/img/Galeria/11.jpg"
                            alt=""
                            className="w-full max-w-xl rounded-lg shadow-lg overflow-clip"
                        />
                        <img
                            src="/img/Galeria/12.jpg"
                            alt=""
                            className="w-full max-w-xl rounded-lg shadow-lg overflow-clip"
                        />
                    </div>
                </ParallaxLayer>
            </Parallax>
        </section>
    );
}
