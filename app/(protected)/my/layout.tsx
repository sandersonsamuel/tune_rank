import { AuthProvider } from "@/components/providers/auth-provider";


export default function MyLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return <AuthProvider>{children}</AuthProvider>;
}