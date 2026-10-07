import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas px-4">
      <SignIn
        appearance={{
          variables: {
  colorPrimary: "#E8936B",
  colorBackground: "#241B28",
  colorForeground: "#F5EEF2",
  colorMutedForeground: "#A89AA8",
  colorInput: "#19131C",
  colorInputForeground: "#F5EEF2",
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