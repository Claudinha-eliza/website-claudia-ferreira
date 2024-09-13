/* eslint-disable @next/next/no-page-custom-font */
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Claudia Ferreira - Psicóloga | Psicanalista</title>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&display=swap" rel="stylesheet"></link>
        <meta name = "format-detection" content = "telephone=no"></meta>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16695713159"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-16695713159');
          `}
        </script>
        <script>
          {`
            gtag('event', 'conversion', {'send_to': 'AW-16695713159/Nnw6CJfE8dAZEIe7kZk-'});
          `}
        </script>
      </head>
      <body>{children}</body>
    </html>
  );
}
