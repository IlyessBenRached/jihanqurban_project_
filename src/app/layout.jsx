import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "JIHAN M. QURBAN",
  description: "Jihan Mohammad Qurban Legal Profession and Legal Consultancy is a pioneering firm providing distinguished and specialized legal services. We offer innovative, professional, and efficient legal solutions tailored to meet your needs, along with transparent and professional consultations to safeguard your rights and help you achieve your goals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <title>{metadata.title}</title> */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="legal services, law firm, legal consultancy, Jihan Mohammad Qurban" />
        <meta name="author" content="Jihan M. Qurban Legal Consultancy" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:image" content="https://yourwebsite.com/path-to-your-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
