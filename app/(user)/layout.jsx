import { ThemeProvider } from "@/providers/ThemeProvider";
import "../globals.css";
import { Inter } from "next/font/google";
import { Header } from "./components/Header";
import { Container } from "@/components/shared/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tech Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          inter.className + " min-h-screen bg-background antialiased p-4 lg:p-8"
        }
      >
        <ThemeProvider
          attribute="class"
          storageKey="theme"
          defaultTheme="dark"
          enableColorScheme
        >
          <Container>
            <Header />
          </Container>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
