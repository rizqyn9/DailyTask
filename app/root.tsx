import React from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useMatches,
} from "remix";
import type { MetaFunction, LinksFunction } from "remix";
import TailwindStyles from "./styles/tailwind.css";
import { BaseLayout } from "./components/Layout";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: TailwindStyles },
    { rel: "manifest", href: "/resources/manifest.json" },
  ];
};

export default function App() {
  let location = useLocation();
  let matches = useMatches();

  let isMount = true;
  React.useEffect(() => {
    let mounted = isMount;
    isMount = false;
    if ("serviceWorker" in navigator) {
      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller?.postMessage({
          type: "REMIX_NAVIGATION",
          isMount: mounted,
          location,
          matches,
          manifest: window.__remixManifest,
        });
      } else {
        let listener = async () => {
          await navigator.serviceWorker.ready;
          navigator.serviceWorker.controller?.postMessage({
            type: "REMIX_NAVIGATION",
            isMount: mounted,
            location,
            matches,
            manifest: window.__remixManifest,
          });
        };
        navigator.serviceWorker.addEventListener("controllerchange", listener);
        return () => {
          navigator.serviceWorker.removeEventListener(
            "controllerchange",
            listener
          );
        };
      }
    }
  }, [location]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta /> <Links />
      </head>
      <body className="relative flex flex-col items-center bg-gray-700 text-white">
        <BaseLayout />
        <ScrollRestoration /> <Scripts /> <LiveReload />
      </body>
    </html>
  );
}
