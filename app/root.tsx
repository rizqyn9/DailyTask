import React from "react";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
  useMatches,
} from "remix";
import type { MetaFunction, LinksFunction, LoaderFunction } from "remix";
import GlobalStyles from "./styles/global.css";
import { MainLayout } from "./components/Layout";
import { getCssText } from "./stitches.config";

export const meta: MetaFunction = () => {
  return { title: "RDEV | Daily Task" };
};

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: GlobalStyles },
    { rel: "manifest", href: "/resources/manifest.json" },
  ];
};

export const loader: LoaderFunction = async () => {
  return new Response(getCssText(), {
    headers: { "Content-Type": "text/css; charset=UTF-8" },
  });
};

export default function App() {
  let location = useLocation();
  let matches = useMatches();
  let styles = useLoaderData();

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
        {/* <style id="stitches">{styles}</style> */}
      </head>
      <body
        className={"rdev-dark"}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <MainLayout />
        <ScrollRestoration /> <Scripts /> <LiveReload />
      </body>
    </html>
  );
}
