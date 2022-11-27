import { useRef } from "react";
import { ClientOnly } from "remix-utils";
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { config } from 'react-spring'

import useOnScreen from "~/hooks/useOnScreen";
import { Gallery } from "~/components/Gallery";
import logo from "~/img/logo.svg";
import img01 from "~/img/Sum/01.jpg";
import img02 from "~/img/Sum/02.jpg";
import img03 from "~/img/Sum/03.jpg";
import img04 from "~/img/Sum/04.jpg";
import img05 from "~/img/Mar/01.jpg";
import img06 from "~/img/Mar/02.jpg";
import img07 from "~/img/Mar/03.jpg";
import img08 from "~/img/Mar/04.jpg";
import img09 from "~/img/Interior/01.jpg";
import img10 from "~/img/Interior/02.jpg";
import img11 from "~/img/Interior/03.jpg";
import img12 from "~/img/Interior/04.jpg";

const images = [
    {
        title: "Apartamentos con vista al mar",
        list: ["/img/Mar/02.jpg", "/img/Mar/03.jpg", "/img/Mar/04.jpg"],
    },
    {
        title: "Espacios compartidos",
        list: ["/img/Sum/02.jpg", "/img/Sum/03.jpg", "/img/Sum/04.jpg"],
    },
    {
        title: "Apartamentos internos",
        list: [
            "/img/Interior/02.jpg",
            "/img/Interior/03.jpg",
            "/img/Interior/04.jpg",
        ],
    },
];

export default function Index() {
    const ref = useRef(null);
    const onScreen = useOnScreen(ref, 0.4);

    return (
        <section
            data-scroll-container
            id="main-container"
            className="absolute inset-0 overflow-clip overflow-y-auto"
        >
            <Parallax pages={4} config={config.stiff}>
                <ParallaxLayer
                    sticky={{ start: 0, end: 3 }}
                    style={{
                        zIndex: -10
                    }}
                >
                    <div
                        ref={ref}
                        className={`relative z-0 h-screen w-screen pointer-events-none`}
                    >
                        <div
                            className={`fixed z-0 top-0 h-screen w-screen p-12 pb-0 grid justify-items-center content-center gap-24 transition duration-700 -translate-y-4 opacity-0 ${true && "translate-y-0 opacity-100"
                                }`}
                        >
                            <img src={logo} alt="Logo" className="w-full max-w-2xl" />
                            <p className="max-w-2xl text-lg text-center">
                                Apartamentos frente al mar y a dos cuadras del centro de
                                Santa Clara del Mar. Cuentan con calefacción central, WI-FI,
                                cable, parrillas, SUM y estacionamiento.
                            </p>
                        </div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={0.0}
                >
                    <div className="absolute z-10 top-12 md:top-32 md:bottom-0 left-8 md:left-24 grid gap-28 content-center">
                        <img
                            src={img02}
                            alt=""
                            className="w-full max-w-[80vw] md:max-w-xl rounded-md shadow-lg overflow-clip"
                        />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={1}
                    speed={0.5}
                >
                    <div className="absolute z-10 bottom-52 md:bottom-12 left-4 md:left-1/2 grid gap-28 content-center">
                        <img
                            src={img03}
                            alt=""
                            className="w-full max-w-[50vw] md:max-w-[20vw] rounded-md shadow-lg overflow-clip"
                        />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={1}
                    speed={0.3}
                >
                    <div className="absolute top-80 md:top-32 right-4 md:right-[24vw] grid gap-28 content-center">
                        <img
                            src={img04}
                            alt=""
                            className="w-full max-w-[50vw] md:max-w-[20vw] rounded-md shadow-lg overflow-clip"
                        />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={1}
                    speed={1.0}
                >
                    <div className="absolute md:top-12 bottom-32 md:bottom-0 right-12 md:right-24 grid gap-28 content-center">
                        <img
                            src={img01}
                            alt=""
                            className="w-full max-w-[25vw] md:max-w-[14vw] rounded-md shadow-lg overflow-clip"
                        />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={0.0}
                >
                    <div className="absolute z-10 top-12 md:top-32 bottom-0 left-8 md:left-24 grid gap-28 content-center">
                        <img
                            src={img06}
                            alt=""
                            className="w-full max-w-[80vw] md:max-w-xl rounded-md shadow-lg overflow-clip"
                        />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={2}
                    speed={0.6}
                >
                    <div className="absolute z-10 bottom-[20vh] md:bottom-12 left-4 md:left-1/2 grid gap-28 content-center">
                        <img
                            src={img07}
                            alt=""
                            className="w-full max-w-[20vw] rounded-md shadow-lg overflow-clip"
                        />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={2}
                    speed={0.4}
                >
                    <div className="absolute top-[35vh] md:top-32 right-4 md:right-[24vw] grid gap-28 content-center">
                        <img
                            src={img08}
                            alt=""
                            className="w-full max-w-[20vw] rounded-md shadow-lg overflow-clip"
                        />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={2}
                    speed={0.2}
                >
                    <div className="absolute top-12 bottom-0 right-12 md:right-24 grid gap-28 content-center">
                        <img
                            src={img05}
                            alt=""
                            className="w-full max-w-[14vw] rounded-md shadow-lg overflow-clip"
                        />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={3}
                    speed={-0.1}
                >
                    <div className="absolute z-10 top-32 left-24 grid gap-28 content-center">
                        <img
                            src={img10}
                            alt=""
                            className="w-full max-w-[26vw] rounded-md shadow-lg overflow-clip"
                        />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={3}
                    speed={0.6}
                >
                    <div className="absolute z-10 bottom-32 left-[34vw] grid gap-28 content-center">
                        <img
                            src={img11}
                            alt=""
                            className="w-full max-w-[20vw] rounded-md shadow-lg overflow-clip"
                        />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={3}
                    speed={0.2}
                >
                    <div className="absolute top-32 right-[24vw] grid gap-28 content-center">
                        <img
                            src={img12}
                            alt=""
                            className="w-full max-w-[20vw] rounded-md shadow-lg overflow-clip"
                        />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={3}
                    speed={0.4}
                >
                    <div className="absolute bottom-32 right-24 grid gap-28 content-center">
                        <img
                            src={img09}
                            alt=""
                            className="w-full max-w-[14vw] rounded-md shadow-lg overflow-clip"
                        />
                    </div>
                </ParallaxLayer>
            </Parallax>
        </section >
    );
}
