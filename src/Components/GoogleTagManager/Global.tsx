// app/components/GtmScript.js
import Script from 'next/script';

export function Global({ awId }: { awId: string }) {
  return (
    <>
      <Script
        id="gtag-base"
        src={`https://www.googletagmanager.com/gtag/js?id=${awId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${awId}');
        `}
      </Script>
    </>
  );
}
