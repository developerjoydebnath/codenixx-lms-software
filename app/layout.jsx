import { Inter } from "next/font/google";

import Children from "@/context/Children";
import ColorThemeProvider from "@/context/ColorThemeContext";
import { ThemeProvider } from "@/context/ThemeContext";
import ReduxProvider from "@/redux/provider";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",

    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ReduxProvider>
                    <Children>
                        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                            <ColorThemeProvider>{children}</ColorThemeProvider>
                        </ThemeProvider>
                    </Children>
                </ReduxProvider>
            </body>
        </html>
    );
}
