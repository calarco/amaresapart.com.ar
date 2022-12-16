import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useActionData, Form, useTransition } from "@remix-run/react";
import { z } from "zod";
import { mailer as nodemailer } from "../entry.server";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import map from "~/img/map.svg";

type ActionData = {
    fields?: {
        nombre: string;
        email: string;
        consulta: string;
    };
    error?: string;
    success?: boolean;
};

export const action: ActionFunction = async ({ request }) => {
    const formPayload = Object.fromEntries(await request.formData());
    const subscriberSchema = z.object({
        nombre: z.string(),
        email: z.string().email(),
        consulta: z.string(),
    });
    let fields = { nombre: "", email: "", consulta: "" };
    try {
        const newConsulta = subscriberSchema.parse(formPayload);
        fields = {
            nombre: newConsulta.nombre,
            email: newConsulta.email,
            consulta: newConsulta.consulta,
        };
    } catch (error) {
        if (error instanceof z.ZodError) {
            console.error(error.issues);
            return json({ error: "Error de validación" }, { status: 400 });
        }
    }

    const transporter = nodemailer.createTransport({
        host: "in-v3.mailjet.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "7e31e24993cc4500f66006a9ac9a2632",
            pass: process.env.API_KEY,
        },
    });
    try {
        const info = await transporter.sendMail({
            from: "sebastian@calarco.com.ar",
            to: "sloth.demon94@gmail.com",
            //to: "amaresapart@gmail.com",
            subject: "Nueva consulta Amares Apart",
            text: `${fields.nombre} (${fields.email}): ${fields.consulta}`,
            html: `<b>${fields.nombre}:</b><p>${fields.consulta}</p><a href="mailto:${fields.email}?subject=Re:%20Amares%20Apart&body=${fields.nombre}">Responder a ${fields.email}</a>`,
        });
        console.log(info.messageId);
        return json(
            {
                fields,
                success: true,
            },
            { status: 200 }
        );
    } catch (error: any) {
        console.error(error);
        return json({ error: error.response }, { status: 400 });
    }
};

export default function Index() {
    const actionData = useActionData<ActionData>();
    const transition = useTransition();

    return (
        <section className="absolute inset-0 overflow-clip lg:grid lg:grid-flow-col">
            <div className="hidden absolute top-0 bottom-0 right-1/2 lg:grid justify-end content-center pr-12 xl:pr-24">
                <img
                    src={map}
                    alt=""
                    className="h-screen w-auto max-w-none object-right object-cover"
                />
            </div>
            <div className="overflow-auto absolute right-0 left-0 lg:left-1/2 top-0 bottom-0 px-6 pt-40 pb-24 md:px-12 lg:p-0 lg:pt-24 lg:pb-12 lg:pr-12 xl:pr-24 grid content-center justify-items-center gap-8 lg:gap-12">
                <p className="w-full text-center text-sm md:text-base xl:text-lg">
                    Ubicado frente a la primera línea de playa.
                    <br />
                    Av. Costanera 278. Muelle 1 Parador Cabo Frio. Santa Clara
                    del Mar.
                </p>
                <Form
                    method="post"
                    className="relative w-full px-6 lg:px-8 py-4 lg:py-6 rounded-lg bg-[#d7d7d7] shadow-lg text-gray-900 text-left grid gap-x-6 lg:gap-x-8 gap-y-4 lg:gap-y-6 md:grid-cols-2"
                >
                    <label className="grid gap-4 font-light text-sm xl:text-base">
                        Nombre
                        <input
                            type="text"
                            name="nombre"
                            placeholder="-"
                            defaultValue={actionData?.fields?.nombre}
                            required
                        />
                    </label>
                    <label className="grid gap-4 font-light text-sm xl:text-base">
                        Email
                        <input
                            type="email"
                            name="email"
                            placeholder="-"
                            defaultValue={actionData?.fields?.email}
                            required
                        />
                    </label>
                    <label className="md:col-span-2 grid gap-4 font-light text-sm xl:text-base">
                        Consulta
                        <textarea
                            name="consulta"
                            placeholder="-"
                            defaultValue={actionData?.fields?.consulta}
                            autoComplete="off"
                            required
                            rows={6}
                        />
                    </label>
                    <div className="md:absolute md:left-1/2 md:right-0 md:-bottom-8 z-30 md:px-8 grid">
                        <button
                            type="submit"
                            className={`button md:h-16 px-8 md:px-12 bg-secondary rounded-full shadow-lg ring-0 hover:ring ring-primary-variant/70 active:ring-primary text-primary hover:text-primary ${
                                (transition.state === "submitting" ||
                                    actionData?.success) &&
                                "pointer-events-none"
                            }`}
                        >
                            <SwitchTransition>
                                <CSSTransition
                                    key={
                                        transition.state === "submitting"
                                            ? 0
                                            : actionData?.success
                                            ? 1
                                            : 2
                                    }
                                    timeout={300}
                                    classNames={{
                                        enter: "opacity-0 -translate-y-4",
                                        enterActive: "opacity-1",
                                        exit: "opacity-1",
                                        exitActive: "opacity-0",
                                    }}
                                >
                                    <span
                                        className={`transition duration-300 ${
                                            transition.state === "submitting" &&
                                            "animate-pulse"
                                        }`}
                                    >
                                        {transition.state === "submitting"
                                            ? "enviando..."
                                            : actionData?.success
                                            ? "consulta enviada"
                                            : "Enviar"}
                                    </span>
                                </CSSTransition>
                            </SwitchTransition>
                        </button>
                    </div>
                    {actionData?.error && (
                        <div className="absolute inset-0 z-20 rounded-lg bg-primary/40 backdrop-blur text-red-500 grid items-center text-center text-xl font-bold">
                            {actionData.error}
                        </div>
                    )}
                </Form>
            </div>
        </section>
    );
}
