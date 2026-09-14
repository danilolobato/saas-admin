import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
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
          background: "#131110",
          borderRadius: 6,
        }}
      >
        <span
          style={{
            fontSize: 20,
            fontStyle: "italic",
            fontWeight: 600,
            color: "#D9A62E",
          }}
        >
          N
        </span>
      </div>
    ),
    { ...size }
  );
}