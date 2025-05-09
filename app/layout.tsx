"use client";

import "./globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ClerkProvider } from '@clerk/nextjs'

const theme = createTheme({
  palette: {
    primary: { main: "#4F46E5" },
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body style={{ 
          backgroundImage: "url('/images/bg_black.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}>
          <ThemeProvider theme={theme}>
            {/* Center the 80%-wide container with mx-auto */}
            <div className="mx-auto w-[80%] flex flex-col min-h-screen">
                <Header />

                <main className="flex-grow">
                    {children}
                </main>

                <Footer />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
