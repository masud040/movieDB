import "./globals.css";

export const metadata = {
  title: "MovieDB | Home",
  description: "Ihis is a movie site. created by next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
