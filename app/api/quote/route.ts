import { NextResponse } from "next/server";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";
import { getResendClient } from "@/lib/resend";
import { quoteSchema } from "@/lib/validations";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const parsed = quoteSchema.safeParse(body);

    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;

      return NextResponse.json(
        {
          ok: false,
          message: "Hay campos que necesitan corrección.",
          errors: {
            name: fieldErrors.name?.[0],
            brand: fieldErrors.brand?.[0],
            email: fieldErrors.email?.[0],
            whatsapp: fieldErrors.whatsapp?.[0],
            projectType: fieldErrors.projectType?.[0],
            budget: fieldErrors.budget?.[0],
            message: fieldErrors.message?.[0]
          }
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    const resend = getResendClient();
    const from = process.env.RESEND_FROM_EMAIL;

    if (!from) {
      return NextResponse.json(
        {
          ok: false,
          message: "Falta configurar RESEND_FROM_EMAIL en Vercel."
        },
        { status: 500 }
      );
    }

    const safeName = escapeHtml(data.name);
    const safeBrand = escapeHtml(data.brand);
    const safeEmail = escapeHtml(data.email);
    const safeWhatsapp = escapeHtml(data.whatsapp);
    const safeProjectType = escapeHtml(data.projectType);
    const safeBudget = escapeHtml(data.budget || "No especificado");
    const safeMessage = escapeHtml(data.message).replace(/\n/g, "<br />");

    await resend.emails.send({
      from,
      to: [CONTACT_EMAIL],
      replyTo: data.email,
      subject: `Nueva solicitud de cotización — ${data.brand}`,
      html: `
        <div style="margin:0;padding:24px;background:#f8fafc;font-family:Inter,Arial,sans-serif;color:#0f172a;">
          <div style="max-width:720px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:24px;overflow:hidden;">
            <div style="padding:24px 28px;background:linear-gradient(135deg,#0E76FF 0%,#10B981 100%);color:#ffffff;">
              <div style="font-size:12px;letter-spacing:.18em;text-transform:uppercase;font-weight:700;opacity:.92;">
                ${SITE_NAME}
              </div>
              <h1 style="margin:12px 0 0;font-size:28px;line-height:1.15;font-weight:800;">
                Nueva solicitud de cotización
              </h1>
              <p style="margin:12px 0 0;font-size:15px;line-height:1.7;opacity:.92;">
                Se recibió una nueva oportunidad desde la landing page.
              </p>
            </div>

            <div style="padding:28px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td style="padding:0 0 16px;">
                    <div style="font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#64748b;">Nombre</div>
                    <div style="margin-top:6px;font-size:16px;font-weight:600;color:#0f172a;">${safeName}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 16px;">
                    <div style="font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#64748b;">Empresa / Marca</div>
                    <div style="margin-top:6px;font-size:16px;font-weight:600;color:#0f172a;">${safeBrand}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 16px;">
                    <div style="font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#64748b;">Email</div>
                    <div style="margin-top:6px;font-size:16px;font-weight:600;color:#0f172a;">${safeEmail}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 16px;">
                    <div style="font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#64748b;">WhatsApp</div>
                    <div style="margin-top:6px;font-size:16px;font-weight:600;color:#0f172a;">${safeWhatsapp}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 16px;">
                    <div style="font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#64748b;">Tipo de proyecto</div>
                    <div style="margin-top:6px;font-size:16px;font-weight:600;color:#0f172a;">${safeProjectType}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 16px;">
                    <div style="font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#64748b;">Presupuesto estimado</div>
                    <div style="margin-top:6px;font-size:16px;font-weight:600;color:#0f172a;">${safeBudget}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0;">
                    <div style="font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#64748b;">Mensaje</div>
                    <div style="margin-top:8px;padding:18px;border:1px solid #e2e8f0;border-radius:18px;background:#f8fafc;font-size:15px;line-height:1.8;color:#334155;">
                      ${safeMessage}
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      `,
      text: `
Nueva solicitud de cotización

Nombre: ${data.name}
Empresa / Marca: ${data.brand}
Email: ${data.email}
WhatsApp: ${data.whatsapp}
Tipo de proyecto: ${data.projectType}
Presupuesto estimado: ${data.budget || "No especificado"}

Mensaje:
${data.message}
      `.trim()
    });

    return NextResponse.json({
      ok: true,
      message: "Tu solicitud fue enviada correctamente."
    });
  } catch (error) {
    console.error("QUOTE_ROUTE_ERROR", error);

    return NextResponse.json(
      {
        ok: false,
        message: "No se pudo enviar la solicitud en este momento."
      },
      { status: 500 }
    );
  }
}
