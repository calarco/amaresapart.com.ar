import type { MetaFunction, LinksFunction } from "@remix-run/node";
import { useCatch, useLocation, useOutlet } from "@remix-run/react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import styles from "./tailwind.css";
import { Html } from "~/components/Html";

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Amares",
    viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export function CatchBoundary() {
    const caught = useCatch();

    return (
        <Html>
            <div className="absolute inset-0 grid items-center content-center gap-8 text-center">
                <h1 className="font-mono text-4xl text-red-500 dark:text-red-500">
                    {caught.status}
                </h1>
                <h2 className="text-2xl text-red-500/70">
                    {caught.statusText}
                </h2>
            </div>
        </Html>
    );
}

export function ErrorBoundary({ error }: { error: Error }) {
    console.error(error);

    return (
        <Html>
            <div className="absolute inset-0 grid items-center content-center gap-8 text-center">
                <h1 className="font-mono text-2xl text-red-500 dark:text-red-500">
                    error
                </h1>
                <h2 className="text-lg text-red-500/70">{error.message}</h2>
            </div>
        </Html>
    );
}

export default function App() {
    const location = useLocation();
    const outlet = useOutlet();

    return (
        <Html>
            <SwitchTransition mode="in-out">
                <CSSTransition
                    key={location.pathname.split("/")[1]}
                    timeout={{
                        enter: 500,
                        exit: 300,
                    }}
                    classNames={{
                        enter: "opacity-0 translate-y-20",
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
        </Html>
    );
}
