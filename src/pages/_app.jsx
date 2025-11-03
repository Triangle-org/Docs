import Head from 'next/head'
import {Router, useRouter} from 'next/router'
import {MDXProvider} from '@mdx-js/react'

import {Layout} from '@/components/Layout'
import * as mdxComponents from '@/components/mdx'
import {useMobileNavigationStore} from '@/components/MobileNavigation'

import '@/styles/tailwind.css'
import 'focus-visible'
import Script from "next/script";

function onRouteChange() {
    useMobileNavigationStore.getState().close()
}

Router.events.on('routeChangeStart', onRouteChange)
Router.events.on('hashChangeStart', onRouteChange)

export default function App({Component, pageProps}) {
    let router = useRouter()

    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="language" content="ru, en"/>
                <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"/>

                {router.pathname === '/' && (pageProps.title || pageProps.pageTitle) ? (
                    <title>Triangle Docs</title>
                ) : (
                    <title>{`${pageProps.pageTitle ?? pageProps.title} - Triangle Docs`}</title>
                )}

                <meta name="title"
                      content={(pageProps.pageTitle ?? pageProps.title) ? `${pageProps.pageTitle ?? pageProps.title} - Triangle Docs` : 'Triangle Docs'}/>
                <meta name="description"
                      content={pageProps.description ?? 'Triangle Web Framework'}/>
                <meta name="keywords" content={pageProps.keywords}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>

                {/* Additional SEO meta tags */}
                <meta name="rating" content="general"/>
                <meta name="distribution" content="global"/>
                <meta name="revisit-after" content="7 days"/>
                <meta name="googlebot" content="index,follow"/>
                <meta name="bingbot" content="index,follow"/>

                {/* Open Graph - Fixed property names */}
                <meta property="og:locale" content="ru_RU"/>
                <meta property="og:type" content="product"/>
                <meta property="og:url" content={`https://triangle.localzet.com${router.asPath}`}/>
                <meta property="og:site" content="Triangle Web"/>
                <meta property="og:site_name" content="Triangle Web"/>
                <meta property="og:title"
                      content={(pageProps.pageTitle ?? pageProps.title) ? `${pageProps.pageTitle ?? pageProps.title} - Triangle Web` : 'Triangle Web'}/>
                <meta property="og:description"
                      content={pageProps.description ?? 'Triangle Web Framework'}/>
                <meta property="og:image"
                      content={`https://cover.pr-cy.io/api/og?logo=${encodeURIComponent('https://triangle.localzet.com/favicon.png')}&bgColor=18181b&color=E6E7E8&title=${encodeURIComponent(pageProps.title ?? 'Triangle Web')}&category=${encodeURIComponent('Доументация - Triangle Web')}`}/>
                <meta property="og:image:type" content="image/png"/>
                <meta property="og:image:width" content="1200"/>
                <meta property="og:image:height" content="630"/>
                <meta property="og:image:alt" content={`${pageProps.pageTitle ?? pageProps.title ?? 'Triangle Web'} - Документация`}/>

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:creator" content="@localzet"/>
                <meta name="twitter:site" content="@localzet"/>
                <meta name="twitter:site_name" content="Triangle Web"/>
                <meta name="twitter:url" content={`https://triangle.localzet.com${router.asPath}`}/>
                <meta name="twitter:title"
                      content={(pageProps.pageTitle ?? pageProps.title) ? `${pageProps.pageTitle ?? pageProps.title} - Triangle Web` : 'Triangle Web'}/>
                <meta name="twitter:description"
                      content={pageProps.description ?? 'Triangle Web Framework'}/>
                <meta name="twitter:image"
                      content={`https://cover.pr-cy.io/api/og?logo=${encodeURIComponent('https://triangle.localzet.com/favicon.png')}&bgColor=18181b&color=E6E7E8&title=${encodeURIComponent(pageProps.title ?? 'Triangle Web')}&category=${encodeURIComponent('Доументация - Triangle Web')}`}/>
                <meta name="twitter:image:src"
                      content={`https://cover.pr-cy.io/api/og?logo=${encodeURIComponent('https://triangle.localzet.com/favicon.png')}&bgColor=18181b&color=E6E7E8&title=${encodeURIComponent(pageProps.title ?? 'Triangle Web')}&category=${encodeURIComponent('Доументация - Triangle Web')}`}/>
                <meta name="twitter:image:alt" content={`${pageProps.pageTitle ?? pageProps.title ?? 'Triangle Web'} - Документация`}/>

                {/* Apple */}
                <meta name="apple-mobile-web-app-capable" content="yes"/>
                <meta name="apple-touch-fullscreen" content="yes"/>
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
                <meta name="apple-mobile-web-app-title" content="Triangle Web"/>
                <meta name="format-detection" content="telephone=no"/>

                {/* Author and Copyright */}
                <meta name="copyright" content="Localzet Group"/>
                <meta name="reply-to" content="support@localzet.com"/>
                <meta name="owner" content="Ivan Zorin <creator@localzet.com>"/>
                <meta name="author" content="Ivan Zorin <creator@localzet.com>"/>
                <meta name="creator" content="Ivan Zorin <creator@localzet.com>"/>
                <meta name="designer" content="Ivan Zorin <creator@localzet.com>"/>

                {/* Application */}
                <meta name="application-name" content="Triangle Web"/>
                <meta name="subject"
                      content="Triangle Web Framework"/>
                <meta name="generator" content="Zorin Docs"/>
                <meta name="category" content="Software, Programming, PHP, Server, Async, WebSocket"/>

                {/* Theme */}
                <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#18181b"/>
                <meta name="theme-color" media="(prefers-color-scheme: light)" content="#E6E7E8"/>

                {/* Icons and Links */}
                <link rel="icon" type="image/png" href="https://triangle.localzet.com/favicon.png"/>
                <link rel="canonical" href={`https://triangle.localzet.com${router.asPath}`}/>
                <link rel="alternate" hrefLang="ru" href={`https://triangle.localzet.com${router.asPath}`}/>
                <link rel="alternate" hrefLang="en" href={`https://triangle.localzet.com${router.asPath}`}/>
                <link rel="alternate" hrefLang="x-default" href={`https://triangle.localzet.com${router.asPath}`}/>

                {/* Preconnect for performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            </Head>
            <Script defer src="https://analytics.localzet.com/pixel/joP83rnONf3Wofx6"
                    data-ignore-dnt="true"/>

            <MDXProvider components={mdxComponents}>
                <Layout {...pageProps}>
                    <Component {...pageProps} />
                </Layout>
            </MDXProvider>
        </>
    )
}
