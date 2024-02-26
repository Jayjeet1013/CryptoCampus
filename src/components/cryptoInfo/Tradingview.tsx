import React, { useEffect, useRef, memo } from "react";

const TradingViewWidget: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "COINBASE:BTCUSD",
        "timezone": "Asia/Kolkata",
        "theme": "light",
        "style": "3",
        "locale": "en",
        "enable_publishing": false,
        "gridColor": "rgba(0, 0, 0, 0.06)",
        "hide_top_toolbar": true,
        "hide_legend": true,
        "withdateranges": true,
        "range": "ALL",
        "save_image": false,
        "calendar": false,
        "hide_volume": true,
        "support_host": "https://www.tradingview.com"
      }`;

    if (container.current && container.current.children.length === 1) {
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container h-[600px] " ref={container}>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener noreferrer"
          target="_blank"
        ></a>
      </div>
    </div>
  );
};

export default memo(TradingViewWidget);
