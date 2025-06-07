import "../styles/globals.css";

export const metadata = {
  title: "YENDZA",
  description: "Viaje de forma eficaz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
