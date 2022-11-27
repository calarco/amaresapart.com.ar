import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { config } from 'react-spring'

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
        <section className="absolute inset-0 overflow-clip overflow-y-auto pt-40 md:p-0 md:pt-0 text-justify grid justify-center">
            <Parallax pages={3} config={config.stiff}>
                <ParallaxLayer
                    offset={0}
                    speed={-0.1}
                >
                    <article className="absolute top-40 md:top-1/4 md:left-24 max-w-xl px-6 md:p-0 grid content-center gap-8">
                        <h2 className="text-4xl text-secondary font-source">
                            Santa Clara del Mar
                        </h2>
                        <p>
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
                        <p>
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
                <ParallaxLayer
                    offset={0}
                    speed={0.8}
                >
                    <article className="absolute top-1/4 md:left-1/2 md:right-24 px-6 md:p-0 grid gap-24 items-center">
                        <img
                            src={santaclara}
                            alt="santa clara"
                            className="aspect-video rounded-md shadow-lg overflow-clip"
                        />
                        <div
                            className="grid grid-cols-2 md:grid-cols-4 items-center gap-24"
                        >
                            <div
                                className={`grid justify-items-center gap-8`}
                            >
                                <h4 className="text-center text-secondary font-bold font-source">
                                    Fiesta Cerveza Artesanal
                                </h4>
                                <img
                                    src={cerveza}
                                    alt="cerveza"
                                    className="self-end w-full aspect-square rounded-md shadow-lg overflow-clip"
                                />
                            </div>
                            <div
                                className={`grid justify-items-center gap-8`}
                            >
                                <h4 className="text-center text-secondary font-bold font-source">
                                    Pesca Deportiva
                                </h4>
                                <img
                                    src={pesca}
                                    alt="pesca"
                                    className="self-end w-full aspect-square rounded-md shadow-lg overflow-clip"
                                />
                            </div>
                            <div
                                className={`grid justify-items-center gap-8`}
                            >
                                <h4 className="text-center text-secondary font-bold font-source">
                                    Surf, Kitesurt y Kayak
                                </h4>
                                <img
                                    src={surf}
                                    alt="surf"
                                    className="self-end w-full aspect-square rounded-md shadow-lg overflow-clip"
                                />
                            </div>
                            <div
                                className={`grid justify-items-center gap-8`}
                            >
                                <h4 className="text-center text-secondary font-bold font-source">
                                    Paseos en bicicleta y cabalgatas
                                </h4>
                                <img
                                    src={bici}
                                    alt="cabalgatas"
                                    className="w-full aspect-square rounded-md shadow-lg overflow-clip"
                                />
                            </div>
                        </div>
                    </article>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={-0.1}
                >
                    <div className="absolute top-32 h-80 left-24 max-w-xl grid gap-28 content-end md:content-center">
                        <img
                            src={marchiquita}
                            alt="mar chiquita"
                            className="aspect-video justify-self-end rounded-md shadow-lg overflow-clip"
                        />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={1}
                    speed={0.1}
                >
                    <div className="absolute top-32 h-80 md:left-1/2 max-w-xl px-6 md:p-0 grid content-start md:content-center gap-8">
                        <h3 className="text-2xl text-secondary font-source">
                            Albufera de Mar Chiquita
                        </h3>
                        <p>
                            Laguna litoral costera paralela al mar, con aguas
                            saladas y salabres; separada por una cadena de
                            médanos y unida al mar por una boca. Ubicada a 14 km
                            de Santa Clara del Mar. Reserva de biosfera
                            (declarada por la UNESCO en 1996).
                        </p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={0.0}
                >
                    <article className="absolute top-2/3 h-80 left-24 max-w-xl grid gap-28 content-center">
                        <img
                            src={mardecobo}
                            alt="mar de cobo"
                            className="aspect-video justify-self-end rounded-md shadow-lg overflow-clip"
                        />
                    </article>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={1}
                    speed={0.2}
                >
                    <article className="absolute top-2/3 h-80 md:left-1/2 max-w-xl px-6 md:p-0 grid content-center gap-8">
                        <h3 className="text-2xl text-secondary font-source">
                            Mar de Cobo
                        </h3>
                        <p>
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

                <ParallaxLayer
                    offset={2}
                    speed={0.1}
                >
                    <article className="absolute top-40 md:bottom-0 md:left-24 max-w-xl px-6 md:p-0 grid content-center gap-8">
                        <h3 className="text-2xl text-secondary font-source">
                            Mar del Plata
                        </h3>
                        <p>
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
                <ParallaxLayer
                    offset={2}
                    speed={-0.1}
                >
                    <article className="absolute md:top-32 bottom-32 md:bottom-0 md:left-1/2 md:right-24 px-6 md:p-0 grid gap-28 items-center">
                        <img
                            src={mdp}
                            alt="mar del plata"
                            className="aspect-video rounded-md shadow-lg overflow-clip"
                        />
                    </article>
                </ParallaxLayer>
            </Parallax>
        </section>
    );
}
