'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function SurveyPage() {
  useEffect(() => {
    window.SMCX = window.SMCX || [];
  }, []);

  return (
    <div>
      <Script
        id="survey-monkey-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(t,e,s,n){var o,a,c;t.SMCX=t.SMCX||[],e.getElementById(n)||(o=e.getElementsByTagName(s),a=o[o.length-1],c=e.createElement(s),c.type="text/javascript",c.async=!0,c.id=n,c.src="https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgdyE_2BNn0cQjrlvRC4z6KN4oMkbS9qCnJxwfz2rAIIBnIC.js",a.parentNode.insertBefore(c,a))})(window,document,"script","smcx-sdk");
          `,
        }}
      
        style={{
          font: '12px Helvetica, sans-serif',
          color: '#999',
          textDecoration: 'none',
        }}
        href="https://www.surveymonkey.com"
      >

      </Script>
    </div>
  );
}