import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <link rel="stylesheet" href="https://burmesefonts.vercel.app/api/all.css"></link>

            <link rel="manifest" href="/manifest.json"/>
            <link rel="apple-touch-icon" href="/assets/icons/icon-512x512.png"/>
            <link name="theme-color" content="#fff"/>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
