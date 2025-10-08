"use client";

import Script from "next/script";

type Props = { gtmId: string };

export default function GTM({ gtmId }: Props) {
  return (
    <>
      {/* dataLayer 初期化 & GTM ローダー */}
      <Script id="gtm-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        `}
      </Script>
      <Script
        id="gtm-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtm.js?id=${gtmId}`}
      />
      {/* SPA遷移のpage_viewを確実に拾いたい場合の補助（任意） */}
      {/* ルーティングごとに dataLayer.push する実装は下の「SPA遷移対応」を参照 */}
    </>
  );
}
