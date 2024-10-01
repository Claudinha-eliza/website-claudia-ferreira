/* eslint-disable @next/next/no-page-custom-font */
import { GoogleTagManager } from "@/Components/GoogleTagManager";
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
      </head>
      <body>
        {children}
      </body>
      <GoogleTagManager.WebsiteVisitTracking awId='AW-16695713159' />
      <GoogleTagManager.ButtonClickTracking gtmId='GTM-TM92P8FF' />
    </html>
  );
}
