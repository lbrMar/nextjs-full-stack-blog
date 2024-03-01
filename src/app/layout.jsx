import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/buttons.css"
import "@/styles/layers.css"
import "@/styles/display.css"
import "@/styles/fonts.css"
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App Title",
  description: "Next App Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
