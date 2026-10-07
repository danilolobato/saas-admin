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
          background: "#19131C",
          borderRadius: 6,
        }}
      >
        <span
          style={{
            fontSize: 20,
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