import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at top left, rgba(22,119,255,0.28), transparent 34%), radial-gradient(circle at bottom right, rgba(17,194,138,0.18), transparent 26%), linear-gradient(180deg, #07111f 0%, #030712 100%)",
          position: "relative",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 28,
            borderRadius: 88,
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.04)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 280,
            height: 280,
            borderRadius: 88,
            background: "linear-gradient(135deg, #1677ff 0%, #11c28a 100%)",
            boxShadow: "0 30px 90px rgba(0,0,0,0.35)",
            color: "#ffffff",
            fontSize: 134,
            fontWeight: 800,
            letterSpacing: "-0.08em",
          }}
        >
          L
        </div>
      </div>
    ),
    size
  );
}
