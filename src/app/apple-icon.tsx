import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#19131C",
        }}
      >
        <span
          style={{
            fontSize: 96,
            fontStyle: "italic",
            fontWeight: 600,
            color: "#E8936B",
          }}
        >
          N
        </span>
      </div>
    ),
    { ...size }
  );
}