import "./globals.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Provider from "./components/provider";

export const metadata = {
  title: "All State Specialist LLC.",
  description:
    "Welcome to All State Specialist LLC, your trusted construction partner in Phoenix, Arizona. We specialize in providing top-quality construction services for residential, commercial, and industrial projects. With years of experience in the industry, we pride ourselves on delivering exceptional results that meet the highest standards.",
  keywords:
    "All State Specialist LLC, construction services, Phoenix Arizona, residential construction, commercial construction, industrial construction, construction company, general contractor, licensed builders, construction experts, construction solutions, building contractors, construction management.",
};

export default function RootLayout({ children }) {
  const Loader = () => (
    <div className="w-screen h-screen flex justify-center items-center">
      <p className="text-5xl font-bold">LOADER</p>
    </div>
  );

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Forum&family=Work+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="styles.css" />
      </head>
      <body>
        <Provider>
          <Nav />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
