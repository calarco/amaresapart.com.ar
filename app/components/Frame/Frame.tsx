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

import logo from "~/img/logo.svg";
import whatsapp from "~/img/whatsapp.svg";
import { Canvas } from "~/components/Canvas";

export default function Frame({ children }: { children: ReactNode }) {
    const ref = useRef(null);
    const location = useLocation();

    return (
        <html lang="es" className="overflow-clip">
            <head>
                <Meta />
                <Links />
            </head>
            <body
                ref={ref}
                className="relative bg-primary bg-[url('/bg.jpg')] bg-fixed h-screen w-screen overflow-clip select-none text-gray-100/80 font-raleway"
            >
                <div className="fixed top-4 lg:top-6 lg:left-1/2 z-50 pl-6 md:pl-12 pr-32 py-2 lg:p-0 pointer-events-none grid lg:justify-items-center mix-blend-difference">
                    <img
                        src={logo}
                        alt="Logo"
                        className={`w-full max-h-28 transition duration-300 opacity-0 -translate-y-8 delay-300 ${
                            location.pathname.split("/")[1] &&
                            "opacity-100 -translate-y-0 delay-700"
                        }`}
                    />
                </div>
                <nav className="fixed bottom-0 lg:bottom-auto lg:top-0 left-0 right-0 z-50 p-2 lg:py-12 lg:px-12 xl:px-24 grid gap-24 xl:gap-48 items-center grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-16 justify-self-center lg:justify-self-start w-full max-w-xl rounded-full overflow-clip bg-primary/80 backdrop-blur-lg shadow-lg outline outline-1 outline-primary-variant/20">
                        <div
                            className={`absolute z-1 top-0 bottom-0 w-1/3 rounded-full bg-secondary pointer-events-none transition-all duration-300 ${
                                location.pathname.split("/")[1] === "propuesta"
                                    ? "left-1/3"
                                    : location.pathname.split("/")[1] ===
                                      "contacto"
                                    ? "left-2/3"
                                    : !location.pathname.split("/")[1]
                                    ? "left-0"
                                    : "-left-full"
                            }`}
                        />
                        <div className="absolute inset-0 z-10 grid items-center grid-cols-3">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `button rounded-full ${
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
                                    `button rounded-full ${
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
                                    `button rounded-full ${
                                        isActive &&
                                        "pointer-events-none text-primary"
                                    }`
                                }
                            >
                                Contacto
                            </NavLink>
                        </div>
                    </div>
                    <a
                        href="https://api.whatsapp.com/send?phone=5492233471147"
                        target="_blank"
                        rel="noreferrer"
                        className="fixed top-8 right-4 lg:static justify-self-end button h-16 py-0 px-5 xl:px-8 rounded-full bg-primary/80 backdrop-blur-lg shadow-lg border-primary-variant/20 hover:border-secondary-variant text-secondary text-lg grid items-center grid-flow-col gap-6"
                    >
                        <img
                            src={whatsapp}
                            alt="logo"
                            style={{
                                filter: "brightness(0) saturate(100%) invert(87%) sepia(6%) saturate(1873%) hue-rotate(340deg) brightness(84%) contrast(80%)",
                            }}
                        />
                        <span className="hidden lg:block">2233471147</span>
                    </a>
                </nav>
                {/*<ClientOnly>{() => <Canvas />}</ClientOnly>*/}
                {children}
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
