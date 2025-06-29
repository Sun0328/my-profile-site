"use client";

import "./globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ClerkProvider } from '@clerk/nextjs'
import { LoadingProvider } from '@/lib/loading-context';
import { ToastContainer } from 'react-toastify';
import { Loading } from "@/components/ui/loading";

const theme = createTheme({
  palette: {
    primary: { main: "#4F46E5" },
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        </head>
        <body style={{ 
          backgroundImage: "url('/images/bg_black.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}>
          <ThemeProvider theme={theme}>
            <LoadingProvider>
              {/* Center the 80%-wide container with mx-auto */}
              <div className="mx-auto w-[80%] flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                  {children}
                </main>
                <Footer />
              </div>
              <Loading />
            </LoadingProvider>

            {/* Toast container */}
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              pauseOnHover
              draggable
              theme="light"
            />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
