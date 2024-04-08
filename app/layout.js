import "./globals.css";

export const metadata = {
  title: "MovieDB | Home",
  description: "Ihis is a movie site. created by next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-body font-sora dark:text-white text-dark ">
        {children}
      </body>
    </html>
  );
}
