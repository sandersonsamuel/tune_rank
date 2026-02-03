import { AuthProvider } from "@/components/providers/auth-provider";


export default async function MyLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return <AuthProvider>{children}</AuthProvider>;
}