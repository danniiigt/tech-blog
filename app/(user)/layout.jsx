import { ThemeProvider } from "@/providers/ThemeProvider";
import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tech Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          inter.className + " min-h-screen bg-background antialiased p-8"
        }
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
