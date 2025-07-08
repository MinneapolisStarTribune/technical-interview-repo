import type { Metadata } from "next";
import NavBar from "../northern-star/NavBar/NavBar"
import "./globals.css";
import { AuthorsProvider } from "./contexts/authorsProvider"

export const metadata: Metadata = {
  title: "Northern Star",
  description: "The trusted news source for your city.",
  icons: {
    icon: "/northern_star.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthorsProvider>
      <html lang="en">
        <body
          className={`antialiased`}
        >
          <NavBar />
          {children}
        </body>
      </html>
    </AuthorsProvider>
  );
}
