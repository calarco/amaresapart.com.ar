import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { config } from "react-spring";

import useOnScreen from "~/hooks/useOnScreen";
import santaclara from "~/img/Propuesta/santaclara.jpg";
import cerveza from "~/img/Propuesta/cerveza.jpg";
import pesca from "~/img/Propuesta/pesca.jpg";
import surf from "~/img/Propuesta/surf.jpg";
import bici from "~/img/Propuesta/bici.jpg";
import mdp from "~/img/Propuesta/mdp.gif";
import marchiquita from "~/img/Propuesta/marchiquita.jpg";
import mardecobo from "~/img/Propuesta/mardecobo.jpg";

export default function Propuesta() {
    const ref = useRef(null);
    const onScreen = useOnScreen(ref, 0.5);

    return (
        <section className="absolute inset-0 overflow-clip overflow-y-auto text-justify grid justify-center">
            <Parallax pages={3} config={config.default}>
                <ParallaxLayer offset={0} factor={1.1} speed={-0.1}>
                    <article className="absolute top-40 md:top-32 md:bottom-0 md:left-0 md:right-1/2 px-6 lg:pl-12 lg:pr-24 xl:pl-24 xl:pr-48 grid content-center justify-center gap-8">
                        <h2 className="max-w-xl md:text-right text-4xl text-secondary font-source">
                            Santa Clara del Mar
                        </h2>
                        <p className="max-w-xl text-sm md:text-base">
                            Un lugar apacible en las costas de la Provincia de
                            Buenos Aires… El contacto con la naturaleza y la
                            ausencia de ruidos urbanos convierten a esta
                            localidad en una singular y atractiva propuesta
                            turística, en donde se combinan el placer y el
                            descanso. Santa Clara del Mar pertenece al Partido
                            de Mar Chiquita y se encuentra ubicada a 390km de la
                            Capital Federal y a 15km de la ciudad de Mar del
                            Plata. Su población actual es de, aproximadamente,
                            9000 habitantes.
                        </p>
                        <p className="max-w-xl text-sm md:text-base">
                            La ciudad cuenta con siete playas divididas por
                            espigones de piedra, con acceso libre y servicio de
                            guardavidas durante todo el verano. Su particular
                            geografía, a lo largo de un kilómetro, alterna entre
                            playas cortas de arena compacta con barrancos y
                            playas extensas con médanos bajos. La falta de
                            edificios altos en la línea costera resalta la
                            diversidad y riqueza natural del lugar; lo que
                            garantiza sol pleno y aire puro a lo largo de todo
                            el día.
                        </p>
                    </article>
                </ParallaxLayer>
                <ParallaxLayer offset={0} factor={1.1} speed={0.2}>
                    <article className="absolute top-3/4 md:top-32 md:bottom-0 left-1/3 md:left-1/2 right-0 pt-12 md:pt-40 pr-6 lg:pr-12 xl:pr-24 grid gap-20 content-center">
                        <img
                            src={santaclara}
                            alt="santa clara"
                            className="aspect-video rounded-lg shadow-lg overflow-clip"
                        />
                        <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-24 text-left">
                            <div
                                className={`grid grid-rows-[auto,1fr] justify-items-center gap-8`}
                            >
                                <img
                                    src={cerveza}
                                    alt="cerveza"
                                    className="w-full aspect-square rounded-lg shadow-lg overflow-clip"
                                />
                                <h4 className="text-secondary font-bold font-source text-sm">
                                    Fiesta Cerveza Artesanal
                                </h4>
                            </div>
                            <div
                                className={`grid grid-rows-[auto,1fr] justify-items-center gap-8`}
                            >
                                <img
                                    src={surf}
                                    alt="surf"
                                    className="w-full aspect-square rounded-lg shadow-lg overflow-clip"
                                />
                                <h4 className="text-secondary font-bold font-source text-sm">
                                    Surf, Kitesurt y Kayak
                                </h4>
                            </div>
                            <div
                                className={`grid grid-rows-[auto,1fr] justify-items-center gap-8`}
                            >
                                <img
                                    src={bici}
                                    alt="cabalgatas"
                                    className="w-full aspect-square rounded-lg shadow-lg overflow-clip"
                                />
                                <h4 className="text-secondary font-bold font-source text-sm">
                                    Paseos en bicicleta y cabalgatas
                                </h4>
                            </div>
                            <div
                                className={`grid grid-rows-[auto,1fr] justify-items-center gap-8`}
                            >
                                <img
                                    src={pesca}
                                    alt="pesca"
                                    className="w-full aspect-square rounded-lg shadow-lg overflow-clip"
                                />
                                <h4 className="text-secondary font-bold font-source text-sm">
                                    Pesca Deportiva
                                </h4>
                            </div>
                        </div>
                    </article>
                </ParallaxLayer>

                <ParallaxLayer offset={1} factor={1.1} speed={0.1}>
                    <div className="absolute top-1/3 md:top-0 md:bottom-1/2 left-1/2 md:left-0 md:right-1/2 pr-6 lg:pl-12 lg:pr-24 xl:pl-24 xl:pr-48 grid gap-28 content-end md:content-center justify-center">
                        <img
                            src={marchiquita}
                            alt="mar chiquita"
                            className="w-full max-w-xl aspect-video justify-self-start rounded-lg shadow-lg overflow-clip"
                        />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} factor={1.1} speed={-0.1}>
                    <article className="absolute top-24 md:top-0 md:bottom-1/2 md:left-1/2 px-6 lg:p-0 lg:pr-12 xl:pr-24 grid content-start md:content-center gap-8">
                        <h3 className="max-w-xl text-2xl text-secondary font-source">
                            Albufera de Mar Chiquita
                        </h3>
                        <p className="max-w-xl text-sm md:text-base">
                            Laguna litoral costera paralela al mar, con aguas
                            saladas y salabres; separada por una cadena de
                            médanos y unida al mar por una boca. Ubicada a 14 km
                            de Santa Clara del Mar. Reserva de biosfera
                            (declarada por la UNESCO en 1996).
                        </p>
                    </article>
                </ParallaxLayer>

                <ParallaxLayer offset={1} factor={1.1} speed={0.1}>
                    <div className="absolute bottom-0 md:top-1/2 left-1/2 md:left-0 md:right-1/2 pr-6 lg:pl-12 lg:pr-24 xl:pl-24 xl:pr-48 grid gap-28 content-center justify-center">
                        <img
                            src={mardecobo}
                            alt="mar de cobo"
                            className="w-full max-w-xl aspect-video justify-self-start rounded-lg shadow-lg overflow-clip"
                        />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} factor={1.1} speed={-0.1}>
                    <article className="absolute top-1/2 md:top-1/2 md:bottom-0 md:left-1/2 px-6 lg:p-0 lg:pr-12 xl:pr-24 grid content-center gap-8">
                        <h3 className="max-w-xl text-2xl text-secondary font-source">
                            Mar de Cobo
                        </h3>
                        <p className="max-w-xl text-sm md:text-base">
                            Mar de Cobo se encuentra a tan solo 12 km de Santa
                            Clara del Mar; se accede a esta localidad por la
                            ruta provincial N°11 km 487. Su principal atractivo
                            es una imponente arboleda (álamos, pinos, olmos,
                            cipreses y lambercias) que alberga numerosas
                            especies de aves. Las playas son amplias y la pesca
                            es una actividad muy extendida en la zona. También
                            puede disfrutarse de caminatas, paseos en bicicleta,
                            avistaje de aves, entre otras actividades de vida
                            silvestre.
                        </p>
                    </article>
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={-0.2}>
                    <article className="absolute top-40 md:bottom-0 md:left-0 md:right-1/2 px-6 lg:pl-12 lg:pr-24 xl:pl-24 xl:pr-48 grid content-center justify-center gap-8">
                        <h2 className="max-w-xl md:text-right text-4xl text-secondary font-source">
                            Mar del Plata
                        </h2>
                        <p className="max-w-xl text-sm md:text-base">
                            En un recorrido de 15 km, a través de una autopista
                            que bordea el mar, puede llegarse a Mar del Plata.
                            Esta ciudad, también conocida como la “Perla del
                            Atlántico” o “La ciudad feliz” es uno de los
                            principales centros turísticos de Argentina. Allí se
                            puede disfrutar de una variada oferta recreativa:
                            centros comerciales, casinos, espectáculos,
                            propuestas deportivas y al aire libre. También se
                            destaca el patrimonio histórico y cultural de la
                            ciudad y el puerto.
                        </p>
                    </article>
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={0.1}>
                    <div className="absolute top-1/2 md:top-44 bottom-32 md:bottom-0 md:left-1/2 md:right-0 px-6 md:p-0 lg:pr-12 xl:pr-24 grid gap-28 items-center">
                        <img
                            src={mdp}
                            alt="mar del plata"
                            className="aspect-video rounded-lg shadow-lg overflow-clip"
                        />
                    </div>
                </ParallaxLayer>
            </Parallax>
        </section>
    );
}
