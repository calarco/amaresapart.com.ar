import type { ReactNode } from "react";
import { useRef } from "react";
import {
    Meta,
    Links,
    NavLink,
    ScrollRestoration,
    Scripts,
    LiveReload,
    useLocation,
} from "@remix-run/react";
import { ClientOnly } from "remix-utils";
import { useSpring, animated } from "react-spring";

import logo from "~/img/logo.svg";
import whatsapp from "~/img/whatsapp.svg";
import { Water } from "~/components/Water";

export default function Frame({ children }: { children: ReactNode }) {
    const ref = useRef(null);
    const location = useLocation();
    const props = useSpring({
        left:
            location.pathname.split("/")[1] === "propuesta"
                ? "33%"
                : location.pathname.split("/")[1] === "contacto"
                ? "67%"
                : !location.pathname.split("/")[1]
                ? "0%"
                : "100%",
    });

    return (
        <html lang="es" className="overflow-clip">
            <head>
                <Meta />
                <Links />
            </head>
            <body
                ref={ref}
                className="relative bg-slate-900 bg-fixed h-screen w-screen overflow-clip select-none text-gray-100/80 font-raleway"
            >
                <nav className="fixed bottom-0 lg:bottom-auto lg:top-0 left-0 right-0 z-50 p-2 lg:py-8 xl:py-12 lg:px-0 grid items-center grid-cols-1 lg:grid-cols-2">
                    <div className="w-full lg:pl-12 lg:pr-24 xl:pl-24 xl:pr-48 text-center">
                        <div className="inline-block relative h-16 w-full max-w-xl rounded-full overflow-clip bg-primary/80 backdrop-blur-lg shadow-lg outline outline-1 outline-primary-variant/20">
                            <animated.div
                                style={props}
                                className="absolute z-1 top-0 bottom-0 w-1/3 rounded-full bg-secondary shadow-lg pointer-events-none"
                            />
                            <div className="absolute inset-0 z-10 grid items-center grid-cols-3">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `button rounded-full active:scale-90 ${
                                            isActive &&
                                            "pointer-events-none text-primary"
                                        }`
                                    }
                                >
                                    Galería
                                </NavLink>
                                <NavLink
                                    to="propuesta"
                                    className={({ isActive }) =>
                                        `button rounded-full active:scale-90 ${
                                            isActive &&
                                            "pointer-events-none text-primary"
                                        }`
                                    }
                                >
                                    Propuesta
                                </NavLink>
                                <NavLink
                                    to="contacto"
                                    className={({ isActive }) =>
                                        `button rounded-full active:scale-90 ${
                                            isActive &&
                                            "pointer-events-none text-primary"
                                        }`
                                    }
                                >
                                    Contacto
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="justify-self-end lg:pr-12 xl:pr-24">
                        <a
                            href="https://api.whatsapp.com/send?phone=5492233471147"
                            target="_blank"
                            rel="noreferrer"
                            className="fixed top-8 right-4 md:right-12 lg:static button h-16 py-0 px-5 xl:px-8 rounded-full bg-primary/80 backdrop-blur-lg shadow-lg border-primary-variant/20 hover:border-secondary-variant text-secondary text-lg grid items-center grid-flow-col gap-6"
                        >
                            <img
                                src={whatsapp}
                                alt="whatsapp"
                                style={{
                                    filter: "brightness(0) saturate(100%) invert(87%) sepia(6%) saturate(1873%) hue-rotate(340deg) brightness(84%) contrast(80%)",
                                }}
                            />
                            <span className="hidden lg:block">2233471147</span>
                        </a>
                    </div>
                </nav>
                <div className="fixed top-6 lg:left-1/2 z-50 pl-6 md:pl-12 pr-32 lg:p-0 pointer-events-none grid lg:justify-items-center">
                    <img
                        src={logo}
                        alt="Logo"
                        className={`w-full max-h-20 md:max-h-28 transition duration-300 opacity-0 -translate-y-8 delay-300 ${
                            location.pathname.split("/")[1] &&
                            "opacity-100 -translate-y-0 delay-700"
                        }`}
                    />
                </div>
                <div className="fixed z-10 bottom-5 -left-4 mix-blend-difference hidden md:block -rotate-90">
                    <a
                        href="https://calarco.com.ar"
                        target="_blank"
                        rel="noreferrer"
                        className="opacity-60 text-sm font-source"
                    >
                        © calarco
                    </a>
                </div>
                <div className="fixed z-10 bottom-2 right-0 mix-blend-difference hidden md:block rotate-90">
                    <span className="opacity-60 text-sm font-source">2022</span>
                </div>
                <ClientOnly>{() => <Water />}</ClientOnly>
                {children}
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
