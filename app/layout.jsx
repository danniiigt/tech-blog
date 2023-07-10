import { ThemeProvider } from "@/providers/ThemeProvider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tech Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className + " min-h-screen bg-background antialiased"}
      >
        <ThemeProvider
          attribute="class"
          storageKey="theme"
          defaultTheme="dark"
          enableColorScheme
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
