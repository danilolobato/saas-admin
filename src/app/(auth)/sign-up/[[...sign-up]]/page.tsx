import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas px-4">
      <SignUp
        appearance={{
          variables: {
  colorPrimary: "#D9A62E",
  colorBackground: "#1C1A18",
  colorForeground: "#F2EEE7",
  colorMutedForeground: "#9C9488",
  colorInput: "#131110",
  colorInputForeground: "#F2EEE7",
  borderRadius: "0.75rem",
},
          elements: {
            rootBox: "mx-auto",
            card: "border border-line shadow-none",
          },
        }}
      />
    </div>
  );
}