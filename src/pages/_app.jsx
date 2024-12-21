import Head from 'next/head'
import {Router, useRouter} from 'next/router'
import {MDXProvider} from '@mdx-js/react'

import {Layout} from '@/components/Layout'
import * as mdxComponents from '@/components/mdx'
import {useMobileNavigationStore} from '@/components/MobileNavigation'

import '@/styles/tailwind.css'
import 'focus-visible'

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
                <meta name="language" content="RU"/>
                <meta name="robots" content="index,follow"/>

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

                <meta name="og:locale" content="ru_RU"/>
                <meta name="og:type" content="product"/>
                <meta name="og:url" content={`https://triangle.localzet.com${router.asPath}`}/>
                <meta name="og:site" content="Triangle Web"/>
                <meta name="og:site_name" content="Triangle Web"/>
                <meta name="og:title"
                      content={(pageProps.pageTitle ?? pageProps.title) ? `${pageProps.pageTitle ?? pageProps.title} - Triangle Web` : 'Triangle Web'}/>
                <meta name="og:description"
                      content={pageProps.description ?? 'Triangle Web Framework'}/>
                <meta name="og:image"
                      content={`https://cover.pr-cy.io/api/og?logo=${encodeURIComponent('https://triangle.localzet.com/favicon.png')}&bgColor=18181b&color=E6E7E8&title=${encodeURIComponent(pageProps.title ?? 'Triangle Web')}&category=${encodeURIComponent('Доументация - Triangle Web')}`}/>
                <meta name="og:image:type" content="image/png"/>
                <meta name="og:image:width" content="1200"/>
                <meta name="og:image:height" content="630"/>

                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:creator" content="@localzet"/>
                <meta name="twitter:url" content={`https://triangle.localzet.com${router.asPath}`}/>
                <meta name="twitter:site_name" content="Triangle Web"/>
                <meta name="twitter:title"
                      content={(pageProps.pageTitle ?? pageProps.title) ? `${pageProps.pageTitle ?? pageProps.title} - Triangle Web` : 'Triangle Web'}/>
                <meta name="twitter:description"
                      content={pageProps.description ?? 'Triangle Web Framework'}/>
                <meta name="twitter:image"
                      content={`https://cover.pr-cy.io/api/og?logo=${encodeURIComponent('https://triangle.localzet.com/favicon.png')}&bgColor=18181b&color=E6E7E8&title=${encodeURIComponent(pageProps.title ?? 'Triangle Web')}&category=${encodeURIComponent('Доументация - Triangle Web')}`}/>
                <meta name="twitter:image:src"
                      content={`https://cover.pr-cy.io/api/og?logo=${encodeURIComponent('https://triangle.localzet.com/favicon.png')}&bgColor=18181b&color=E6E7E8&title=${encodeURIComponent(pageProps.title ?? 'Triangle Web')}&category=${encodeURIComponent('Доументация - Triangle Web')}`}/>

                <meta name="apple-mobile-web-app-capable" content="yes"/>
                <meta name="apple-touch-fullscreen" content="yes"/>
                <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
                <meta name="format-detection" content="telephone=no"/>

                <meta name="copyright" content="Localzet Group"/>
                <meta name="reply-to" content="support@localzet.com"/>
                <meta name="owner" content="Ivan Zorin <creator@localzet.com>"/>
                <meta name="author" content="Ivan Zorin <creator@localzet.com>"/>
                <meta name="creator" content="Ivan Zorin <creator@localzet.com>"/>
                <meta name="designer" content="Ivan Zorin <creator@localzet.com>"/>

                <meta name="application-name" content="Triangle Web"/>
                <meta name="subject"
                      content="Triangle Web Framework"/>
                <meta name="generator" content="Triangle Framework"/>

                <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#18181b"/>
                <meta name="theme-color" media="(prefers-color-scheme: light)" content="#E6E7E8"/>

                <link rel="icon" type="image/png" href="https://triangle.localzet.com/favicon.png"/>
                <link rel="canonical" href={`https://triangle.localzet.com${router.asPath}`}/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>

                <script defer src="https://analytics.localzet.com/pixel/bC7JsTcYzzKm8vjI"
                        data-ignore-dnt="true"></script>
            </Head>
            <MDXProvider components={mdxComponents}>
                <Layout {...pageProps}>
                    <Component {...pageProps} />
                </Layout>
            </MDXProvider>
        </>
    )
}
