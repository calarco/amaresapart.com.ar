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
        <section className="absolute inset-0 overflow-clip grid lg:grid-flow-col">
            <div className="hidden absolute overflow-clip top-0 bottom-0 left-0 right-1/2 lg:grid place-items-center">
                <img
                    src={map}
                    alt=""
                    className="h-full w-auto absolute right-6 xl:right-24 max-w-none"
                />
            </div>
            <div className="overflow-auto lg:absolute right-0 left-1/2 top-0 bottom-0 px-6 py-32 md:p-12 lg:p-0 lg:pt-24 lg:pb-12 lg:pr-12 xl:pr-24 grid content-center justify-items-center gap-8 lg:gap-16">
                <p className="w-full text-center text-sm md:text-base xl:text-lg">
                    Ubicado frente a la primera línea de playa.
                    <br />
                    Av. Costanera 278. Muelle 1 Parador Cabo Frio. Santa Clara
                    del Mar.
                </p>
                <Form
                    method="post"
                    className="relative w-full p-6 lg:px-8 lg:py-6 rounded-lg bg-[#d7d7d7] shadow-lg text-gray-900 text-left grid gap-6 lg:gap-8 md:grid-cols-2"
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
                    <div className="absolute left-0 right-0 -bottom-8 z-30 grid justify-center">
                        <button
                            type="submit"
                            className="button h-16 px-12 bg-secondary rounded-full shadow-lg text-primary"
                        >
                            Enviar
                        </button>
                    </div>
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
