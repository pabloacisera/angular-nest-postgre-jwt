import { UserProvider } from "../context/user.context";
import "./globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="w-5">
          <nav className="bg-slate-600">
            <ul className="bg-slate-950">
              <li className="py-1 px-1 text-white">
                <a href="http://localhost:3000/dashboard">Centro Medico</a>
              </li>
              <li className="py-1 px-1 text-white">
                <a href="http://localhost:3000/client/create">Crear nuevo</a>
              </li>
            </ul>
          </nav>
        </div>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
