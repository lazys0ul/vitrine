import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
           /* Primary Meta Tags */
            <title>Ronak Meena Portfolio - Full Stack Developer & AI Enthusiast</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Ronak Meena Portfolio - Full Stack Developer & AI Enthusiast" />
            <meta name="description"
                content="Ronak Meena's Personal Portfolio Website. Full Stack Developer & AI Enthusiast. Ubuntu 20.04 (Linux) theme, built with Next.js and Tailwind CSS." />
            <meta name="author" content="Ronak Meena (ronakpappu)" />
            <meta name="keywords"
                content="ronakpappu, ronak meena, portfolio, ubuntu portfolio, full stack developer, ai enthusiast, react, typescript, galgotias university, productivity, machine learning, react native, chrome extension, discord.js, tensorflow, polymath" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            /* Search Engine */
            <meta name="image" content="images/logos/fevicon.png" />
            /* Schema.org for Google */
            <meta itemProp="name" content="Ronak Meena Portfolio - Full Stack Developer & AI Enthusiast" />
            <meta itemProp="description"
                content="Ronak Meena's Personal Portfolio Website. Full Stack Developer & AI Enthusiast. Ubuntu 20.04 (Linux) theme, built with Next.js and Tailwind CSS." />
            <meta itemProp="image" content="images/logos/fevicon.png" />
            /* Twitter */
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Ronak Meena Portfolio - Full Stack Developer & AI Enthusiast" />
            <meta name="twitter:description"
                content="Ronak Meena's Personal Portfolio Website. Full Stack Developer & AI Enthusiast. Ubuntu 20.04 (Linux) theme, built with Next.js and Tailwind CSS." />
            <meta name="twitter:site" content="ronakpappu" />
            <meta name="twitter:creator" content="ronakpappu" />
            <meta name="twitter:image:src" content="images/logos/logo_1024.png" />
            /* Open Graph general (Facebook, Pinterest & Google+) */
            <meta name="og:title" content="Ronak Meena Portfolio - Full Stack Developer & AI Enthusiast" />
            <meta name="og:description"
                content="Ronak Meena's Personal Portfolio Website. Full Stack Developer & AI Enthusiast. Ubuntu 20.04 (Linux) theme, built with Next.js and Tailwind CSS." />
            <meta name="og:image" content="images/logos/logo_1200.png" />
            <meta name="og:url" content="http://ronakpappu.github.io/" />
            <meta name="og:site_name" content="Ronak Meena Personal Portfolio" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/fevicon.svg" />
            <link rel="apple-touch-icon" href="images/logos/logo.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
