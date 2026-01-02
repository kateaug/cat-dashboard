import "../styles/globals.css";
import QueryProvider from "@/app/providers/QueryProvider";
import ThemeProvider from "./providers/ThemeProvider";

export const metadata = {
  title: 'Cat Dashboard',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <ThemeProvider>
          <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
