import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at top left, rgba(22,119,255,0.24), transparent 28%), radial-gradient(circle at right, rgba(17,194,138,0.14), transparent 20%), linear-gradient(180deg, #07111f 0%, #030712 100%)",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
          padding: "54px 64px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 22,
            borderRadius: 34,
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.03)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: -60,
            top: -60,
            width: 320,
            height: 320,
            borderRadius: "999px",
            background: "rgba(22,119,255,0.18)",
            filter: "blur(40px)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: 180,
            bottom: -90,
            width: 280,
            height: 280,
            borderRadius: "999px",
            background: "rgba(17,194,138,0.14)",
            filter: "blur(34px)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            gap: 40,
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "70%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  fontSize: 20,
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#cbd5e1",
                }}
              >
                LulabTech
              </div>

              <div
                style={{
                  fontSize: 66,
                  lineHeight: 0.98,
                  fontWeight: 800,
                  letterSpacing: "-0.06em",
                  maxWidth: 760,
                }}
              >
                Diseño web premium y soluciones digitales para negocios que quieren verse al nivel de lo que ofrecen.
              </div>

              <div
                style={{
                  fontSize: 26,
                  lineHeight: 1.45,
                  color: "#dbe4f0",
                  maxWidth: 820,
                }}
              >
                Landing pages, webs corporativas, tiendas online y automatización con enfoque visual serio, moderno y orientado a conversión.
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
              }}
            >
              {["Landing Pages", "Webs Corporativas", "Tiendas Online", "Automatización"].map(
                (item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "12px 20px",
                      borderRadius: 999,
                      border: "1px solid rgba(255,255,255,0.1)",
                      background: "rgba(255,255,255,0.06)",
                      fontSize: 18,
                      color: "#f8fafc",
                    }}
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>

          <div
            style={{
              width: "30%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                width: 220,
                height: 220,
                borderRadius: 60,
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #1677ff 0%, #11c28a 100%)",
                boxShadow: "0 34px 90px rgba(0,0,0,0.38)",
                fontSize: 110,
                fontWeight: 800,
                letterSpacing: "-0.1em",
              }}
            >
              L
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
