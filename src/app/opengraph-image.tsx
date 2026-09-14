import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#131110",
        }}
      >
        <span
          style={{
            fontSize: 28,
            color: "#9C9488",
            marginBottom: 24,
          }}
        >
          Nimbus
        </span>
        <span
          style={{
            fontSize: 64,
            fontStyle: "italic",
            fontWeight: 600,
            color: "#F2EEE7",
            lineHeight: 1.2,
            maxWidth: 900,
          }}
        >
          Todo lo que pasa en tu producto, en una sola pantalla.
        </span>
        <div
          style={{
            display: "flex",
            gap: 6,
            marginTop: 48,
          }}
        >
          {[30, 55, 40, 70, 85, 60, 90].map((h, i) => (
            <div
              key={i}
              style={{
                width: 28,
                height: h,
                background: "#D9A62E",
                borderRadius: 3,
              }}
            />
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}