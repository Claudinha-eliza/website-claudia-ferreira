import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Cláudia Ferreira - psicóloga I psicanalista</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
