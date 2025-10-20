import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/main-header/Header";

export const metadata = {
  title: "WP Fire - Fire Alarm Installation Services",
  description:
    "Your trusted partner for professional fire alarm installation services. Ensuring safety and compliance for residential and commercial properties.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden font-roboto m-0 p-0 flex justify-center items-stretch flex-col min-h-screen bg-white">
        <Header />
        {children}
        <Footer />
        {/* Developer Bar */}
        <div className="bg-red-600 w-full h-[10vh] flex items-center justify-center">
          <p className="text-white text-base text-sm">© 2025 Dennis Devs</p>
        </div>
      </body>
    </html>
  );
}
