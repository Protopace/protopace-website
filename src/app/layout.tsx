import "./globals.css";

// Theme files
import lightTheme from "@/themes/light-theme";

// Import utils
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

// Import components
import NavBar from "@/app/components/layout/navbar";
import Footer from "@/app/components/layout/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className="bg-gray-50">
          <AppRouterCacheProvider>
            <ThemeProvider theme={lightTheme}>
              <CssBaseline />
              <NavBar />
                <section className="min-h-screen pt-16 md:pt-20">
                  <main>
                    {children}
                  </main>
                  <Footer />
                </section>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
    </html>
  );
}
