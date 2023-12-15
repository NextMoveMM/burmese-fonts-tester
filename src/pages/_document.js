import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <link rel="stylesheet" href={`${process.env.NEXT_PUBLIC_APP_URL}/api/all.css`}></link>

            <link rel="manifest" href="/manifest.json"/>
            <link rel="apple-touch-icon" href="/assets/icons/icon-512x512.png"/>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
