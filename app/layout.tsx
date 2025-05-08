"use client";

import "./globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const theme = createTheme({
  palette: {
    primary: { main: "#4F46E5" },
    text: {
      primary: '#1F2937', // text-neutral-800
    },
  },
  typography: {
    fontFamily: ['Inter', 'ui-sans-serif', 'system-ui'].join(','),
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
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
  );
}
