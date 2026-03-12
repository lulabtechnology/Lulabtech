import { contactEmail } from "@/lib/site";

function sanitize(value) {
  return String(value || "").trim();
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request) {
  try {
    const body = await request.json();

    const name = sanitize(body.name);
    const company = sanitize(body.company);
    const email = sanitize(body.email);
    const whatsapp = sanitize(body.whatsapp);
    const service = sanitize(body.service);
    const budget = sanitize(body.budget);
    const message = sanitize(body.message);
    const honeypot = sanitize(body.website);

    if (honeypot) {
      return Response.json({ ok: true });
    }

    if (!name || !email || !message) {
      return Response.json(
        {
          message: "Faltan campos obligatorios.",
        },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
      return Response.json(
        {
          message:
            "Falta configurar RESEND_API_KEY o RESEND_FROM_EMAIL en las variables de entorno.",
        },
        { status: 500 }
      );
    }

    const submittedAt = new Date().toLocaleString("es-PA", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "America/Panama",
    });

    const subject = `Nueva solicitud desde LulabTech: ${name}`;

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#0f172a;">
        <h2 style="margin:0 0 16px;">Nueva solicitud de cotización</h2>
        <p style="margin:0 0 16px;">Se recibió una nueva solicitud desde el formulario de contacto de LulabTech.</p>

        <table cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:720px;border-collapse:collapse;">
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;"><strong>Nombre</strong></td>
            <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;"><strong>Empresa</strong></td>
            <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">${escapeHtml(company || "-")}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;"><strong>Email</strong></td>
            <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">${escapeHtml(email)}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;"><strong>WhatsApp</strong></td>
            <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">${escapeHtml(whatsapp || "-")}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;"><strong>Servicio</strong></td>
            <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">${escapeHtml(service || "-")}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;"><strong>Presupuesto estimado</strong></td>
            <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">${escapeHtml(budget || "-")}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;"><strong>Fecha</strong></td>
            <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">${escapeHtml(submittedAt)}</td>
          </tr>
        </table>

        <div style="margin-top:20px;padding:18px;border:1px solid #e2e8f0;border-radius:14px;background:#f8fafc;">
          <p style="margin:0 0 8px;"><strong>Mensaje del cliente</strong></p>
          <p style="margin:0;white-space:pre-wrap;">${escapeHtml(message)}</p>
        </div>
      </div>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL,
        to: [contactEmail],
        reply_to: email,
        subject,
        html,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      return Response.json(
        {
          message:
            resendData?.message ||
            "No se pudo enviar el correo desde el servidor.",
        },
        { status: 500 }
      );
    }

    return Response.json({
      ok: true,
      message: "Solicitud enviada correctamente.",
    });
  } catch {
    return Response.json(
      {
        message: "Ocurrió un error inesperado al procesar la solicitud.",
      },
      { status: 500 }
    );
  }
}
