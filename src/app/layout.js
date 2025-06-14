import "../styles/globals.css";

export const metadata = {
  title: "Yendza",
  description: "Sistema de reservas de viagens em Moçambique",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
