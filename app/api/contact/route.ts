import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  whatsapp?: string;
  service?: string;
  budget?: string;
  message?: string;
  website?: string; // honeypot
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clean(value: unknown, max = 1000) {
  return String(value ?? "").trim().slice(0, max);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function requiredEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Falta la variable de entorno ${name}`);
  }
  return value;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = clean(body.name, 120);
    const company = clean(body.company, 160);
    const email = clean(body.email, 160);
    const whatsapp = clean(body.whatsapp, 60);
    const service = clean(body.service, 120);
    const budget = clean(body.budget, 120);
    const message = clean(body.message, 4000);
    const website = clean(body.website, 120);

    // Honeypot simple anti-spam
    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !whatsapp || !service || !message) {
      return NextResponse.json(
        {
          ok: false,
          message: "Completa los campos obligatorios.",
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          ok: false,
          message: "El email no es válido.",
        },
        { status: 400 }
      );
    }

    const smtpHost = requiredEnv("SMTP_HOST");
    const smtpPort = Number(requiredEnv("SMTP_PORT"));
    const smtpSecure = requiredEnv("SMTP_SECURE") === "true";
    const smtpUser = requiredEnv("SMTP_USER");
    const smtpPass = requiredEnv("SMTP_PASS");

    const mailTo = process.env.MAIL_TO || "ventas@lulabtech.com";
    const mailFrom = process.env.MAIL_FROM || smtpUser;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const safeName = escapeHtml(name);
    const safeCompany = escapeHtml(company || "No indicado");
    const safeEmail = escapeHtml(email);
    const safeWhatsapp = escapeHtml(whatsapp);
    const safeService = escapeHtml(service);
    const safeBudget = escapeHtml(budget || "No indicado");
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    const subject = `[LulabTech] Nueva solicitud de cotización - ${name}`;

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif; background:#f7fbfc; padding:24px; color:#0e1726;">
        <div style="max-width:700px; margin:0 auto; background:#ffffff; border:1px solid #d7e5ea; border-radius:20px; overflow:hidden;">
          <div style="padding:24px 24px 16px; background:linear-gradient(135deg,#1673ff12,#12b8a712); border-bottom:1px solid #d7e5ea;">
            <p style="margin:0; font-size:12px; letter-spacing:.12em; text-transform:uppercase; color:#607086; font-weight:700;">
              LulabTech · Nueva solicitud
            </p>
            <h1 style="margin:10px 0 0; font-size:28px; line-height:1.1; color:#0e1726;">
              Nueva solicitud de cotización
            </h1>
          </div>

          <div style="padding:24px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0; border-bottom:1px solid #eef3f5;"><strong>Nombre</strong></td>
                <td style="padding:10px 0; border-bottom:1px solid #eef3f5;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding:10px 0; border-bottom:1px solid #eef3f5;"><strong>Empresa o marca</strong></td>
                <td style="padding:10px 0; border-bottom:1px solid #eef3f5;">${safeCompany}</td>
              </tr>
              <tr>
                <td style="padding:10px 0; border-bottom:1px solid #eef3f5;"><strong>Email</strong></td>
                <td style="padding:10px 0; border-bottom:1px solid #eef3f5;">${safeEmail}</td>
              </tr>
              <tr>
                <td style="padding:10px 0; border-bottom:1px solid #eef3f5;"><strong>WhatsApp</strong></td>
                <td style="padding:10px 0; border-bottom:1px solid #eef3f5;">${safeWhatsapp}</td>
              </tr>
              <tr>
                <td style="padding:10px 0; border-bottom:1px solid #eef3f5;"><strong>Servicio</strong></td>
                <td style="padding:10px 0; border-bottom:1px solid #eef3f5;">${safeService}</td>
              </tr>
              <tr>
                <td style="padding:10px 0; border-bottom:1px solid #eef3f5;"><strong>Presupuesto estimado</strong></td>
                <td style="padding:10px 0; border-bottom:1px solid #eef3f5;">${safeBudget}</td>
              </tr>
            </table>

            <div style="margin-top:24px;">
              <p style="margin:0 0 10px; font-size:14px; font-weight:700; color:#243447;">Mensaje / necesidades</p>
              <div style="padding:16px; border:1px solid #d7e5ea; border-radius:16px; background:#f9fcfd; font-size:15px; line-height:1.7; color:#243447;">
                ${safeMessage}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    const text = `
Nueva solicitud de cotización - LulabTech

Nombre: ${name}
Empresa o marca: ${company || "No indicado"}
Email: ${email}
WhatsApp: ${whatsapp}
Servicio: ${service}
Presupuesto estimado: ${budget || "No indicado"}

Mensaje / necesidades:
${message}
    `.trim();

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({
      ok: true,
      message: "Tu solicitud fue enviada correctamente.",
    });
  } catch (error) {
    console.error("CONTACT_API_ERROR", error);

    return NextResponse.json(
      {
        ok: false,
        message:
          "No se pudo enviar la solicitud en este momento. Intenta nuevamente o escríbenos por WhatsApp.",
      },
      { status: 500 }
    );
  }
}
