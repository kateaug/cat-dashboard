import "../styles/globals.css";
import QueryProvider from "@/app/providers/QueryProvider";
import ThemeProvider from "./providers/ThemeProvider";

export const metadata = {
  title: "Product Metrics Dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
