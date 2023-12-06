import '@/styles/globals.css'
import Head from 'next/head' 

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head> 
                <title>Burmese Font Tester</title>
                <meta name="description" content="Burmese Font Tester Website" />
                <meta name="keywords" content="Myanmar Fonts, Burmese Fonts, Myanmar Unicode, Myanmar Typography, Unicode Fonts, Font Preview, Burmese Font Gallery, Padauk, Burmese Typography" />
                <meta name="author" content="Lin Htin Nyein" />

                <meta property="og:title" content="Burmese Font Tester" />
                <meta property="og:description" content="Test Unicode and Non-Unicode Fonts" />
                <meta property="og:image" content="https://upload.wikimedia.org/wikipedia/my/thumb/d/d2/Pamgram.JPG/1280px-Pamgram.JPG" />
                <meta property="og:image:alt" content="Burmese Fonts"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}
