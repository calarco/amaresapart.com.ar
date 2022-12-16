import type { MetaFunction, LinksFunction } from "@remix-run/node";
import { useCatch, useLocation, useOutlet } from "@remix-run/react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import remixImageStyles from "remix-image/remix-image.css";

import styles from "./tailwind.css";
import { Frame } from "~/components/Frame";

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title: "Amares",
    description:
        "Apartamentos frente al mar y a dos cuadras del centro de Santa Clara del Mar. Cuentan con calefacción central, WI-FI, cable, parrillas, SUM y estacionamiento.",
    keywords: "hotel, apart, santa, clara, mar",
});

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: remixImageStyles },
];

export function CatchBoundary() {
    const caught = useCatch();

    return (
        <Frame>
            <div className="absolute inset-0 grid items-center content-center gap-8 text-center">
                <h1 className="font-mono text-4xl text-red-500 dark:text-red-500">
                    {caught.status}
                </h1>
                <h2 className="text-2xl text-red-500/70">
                    {caught.statusText}
                </h2>
            </div>
        </Frame>
    );
}

export function ErrorBoundary({ error }: { error: Error }) {
    console.error(error);

    return (
        <Frame>
            <div className="absolute inset-0 grid items-center content-center gap-8 text-center">
                <h1 className="font-mono text-2xl text-red-500 dark:text-red-500">
                    error
                </h1>
                <h2 className="text-lg text-red-500/70">{error.message}</h2>
            </div>
        </Frame>
    );
}

export default function App() {
    const location = useLocation();
    const outlet = useOutlet();

    return (
        <Frame>
            <div className="hidden lg:block fixed top-56 bottom-24 left-[calc(50vw-3rem)] xl:left-[calc(50vw-6rem)] border-r border-secondary-variant/10" />
            <SwitchTransition mode="in-out">
                <CSSTransition
                    key={location.pathname.split("/")[1]}
                    timeout={{
                        enter: 500,
                        exit: 300,
                    }}
                    classNames={{
                        enter: "opacity-0 scale-105",
                        enterActive: "opacity-1 duration-500 ease-out",
                        exit: "opacity-1",
                        exitActive: "opacity-0 blur-xl duration-300 ease-in",
                    }}
                >
                    <main className="absolute inset-0 transition">
                        {outlet}
                    </main>
                </CSSTransition>
            </SwitchTransition>
        </Frame>
    );
}
