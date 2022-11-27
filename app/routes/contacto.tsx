import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useActionData, Form } from "@remix-run/react";
import { z } from "zod";
import { mailer as nodemailer } from "../entry.server";

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
        host: "smtp.sendgrid.net",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "apikey",
            pass: process.env.API_KEY,
        },
    });
    try {
        const info = await transporter.sendMail({
            from: "sebastian@calarco.com.ar",
            to: "sloth.demon94@gmail.com",
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
        return json({ error: error.response }, { status: 400 });
    }
};

export default function Index() {
    const actionData = useActionData<ActionData>();

    return (
        <section className="absolute inset-0 overflow-clip grid md:grid-flow-col">
            <img
                src={map}
                alt=""
                className="h-screen w-auto absolute -left-48 hidden md:block"
            />
            <div className="md:absolute overflow-auto right-0 md:w-1/2 h-screen p-4 md:p-0 md:pr-24 md:pt-36 grid content-center justify-items-center gap-8 md:gap-16">
                <p className="w-full text-center md:text-lg">
                    Ubicado frente a la primera línea de playa.
                    <br />
                    Av. Costanera 278. Muelle 1 Parador Cabo Frio. Santa Clara
                    del Mar.
                </p>
                <Form
                    method="post"
                    className="relative w-full rounded-lg bg-[#d7d7d7] shadow-lg text-gray-900 text-left grid md:grid-cols-2"
                >
                    <label className="px-6 py-4 grid gap-4 font-light">
                        Nombre
                        <input
                            type="text"
                            name="nombre"
                            placeholder="-"
                            defaultValue={actionData?.fields?.nombre}
                            required
                        />
                    </label>
                    <label className="px-6 py-4 grid gap-4 font-light">
                        Email
                        <input
                            type="email"
                            name="email"
                            placeholder="-"
                            defaultValue={actionData?.fields?.email}
                            required
                        />
                    </label>
                    <label className="md:col-span-2 px-6 py-4 grid gap-4 font-light">
                        Consulta
                        <textarea
                            name="consulta"
                            placeholder="-"
                            defaultValue={actionData?.fields?.consulta}
                            autoComplete="off"
                            required
                            rows={4}
                        />
                    </label>
                    <button
                        type="submit"
                        className="button absolute right-12 -bottom-8 z-50 bg-secondary rounded-md shadow-lg text-primary"
                    >
                        Enviar
                    </button>
                    {actionData?.success && (
                        <div className="absolute inset-0 z-40 rounded-md bg-primary/40 backdrop-blur text-gray-100/80 grid items-center text-center text-xl font-bold">
                            Consulta enviada
                        </div>
                    )}
                    {actionData?.error && (
                        <div className="absolute inset-0 z-40 rounded-md bg-primary/40 backdrop-blur text-red-500 grid items-center text-center text-xl font-bold">
                            {actionData.error}
                        </div>
                    )}
                </Form>
            </div>
        </section>
    );
}
