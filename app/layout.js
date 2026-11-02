import "./globals.css";

export const metadata = {
  title: "Seu próximo capítulo",
  description: "Uma nova etapa na carreira de quem nunca para de aprender.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
