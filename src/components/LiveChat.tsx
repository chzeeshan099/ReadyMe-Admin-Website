"use client";

import { useEffect } from "react";

export default function LiveChat() {
  const license = process.env.NEXT_PUBLIC_LIVECHAT_LICENSE;
  const integrationName = process.env.NEXT_PUBLIC_LIVECHAT_INTEGRATION_NAME;
  useEffect(() => {
  (window as any).__lc = (window as any).__lc || {};
  (window as any).__lc.license = license;
  (window as any).__lc.integration_name = integrationName;
  (window as any).__lc.product_name = "livechat";  

    (function (n: any, t: Document, c: any) {
      function i(n: any) {
        return e._h ? e._h.apply(null, n) : e._q.push(n);
      }
      var e: any = {
        _q: [],
        _h: null,
        _v: "2.0",
        on: function () {
          i(["on", c.call(arguments)]);
        },
        once: function () {
          i(["once", c.call(arguments)]);
        },
        off: function () {
          i(["off", c.call(arguments)]);
        },
        get: function () {
          if (!e._h)
            throw new Error("[LiveChatWidget] You can't use getters before load.");
          return i(["get", c.call(arguments)]);
        },
        call: function () {
          i(["call", c.call(arguments)]);
        },
        init: function () {
          var n = t.createElement("script");
          n.async = true;
          n.type = "text/javascript";
          n.src = "https://cdn.livechatinc.com/tracking.js";
          t.head.appendChild(n);
        },
      };
      if (!n.__lc.asyncInit) e.init();
      n.LiveChatWidget = n.LiveChatWidget || e;
    })(window, document, [].slice);
  }, []);

  return null;
}