import './globals.css';
import Header from "../components/main-header/Header";
import Footer from "../components/Footer";

export const metadata = {
    title: "WP Fire",
    description: "WP Fire website",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}