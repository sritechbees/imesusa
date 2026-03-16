import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      
       {/* Favicon */}
        <link rel="icon" href="/about/logo2.png" type="International Medical Equipment Solution" className="w-36 h-28" />
        {/* <title>BeaverHealthAI</title> */}

      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
