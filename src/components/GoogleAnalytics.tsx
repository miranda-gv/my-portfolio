import Script from 'next/script';

const GA_ID = 'G-30QLM21R7W';

/**
 * Google Analytics component using gtag.js
 * Uses Next.js Script component for optimized loading.
 * Place in root layout to include on all pages (DRY).
 */
export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
