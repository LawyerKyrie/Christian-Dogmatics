<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'

const { seo } = useAppConfig()
const route = useRoute()

const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('docs'))
const { data: files } = useLazyAsyncData('search', () => queryCollectionSearchSections('docs'), {
  server: false
})

useHead({
  titleTemplate: '%s - Site Title',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { property: 'og:title', content: `App Name - ${route.meta.title}` }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
    /*
    { rel: 'apple-touch-icon', href: appConfig?.myLayer?.avatar },
    { rel: 'manifest', href: '/manifest.webmanifest', crossorigin: 'use-credentials' }
     */
  ],
  htmlAttrs: { lang: 'en' },
  noscript: ['Turn on javascript to use this app!'],
  script: []
})

useSeoMeta({
  titleTemplate: `%s - ${seo?.siteName}`,
  ogSiteName: seo?.siteName,
  twitterCard: 'summary_large_image',
  googleSiteVerification: 'OBR08WFLQQiJUKuLzi19h9dr7I99cVDn5UzDi9mAjwA'
  /*
  ogTitle: seo.siteName,
  ogType: 'website',
  ogUrl: pkg.homepage,
  ogImage: `${pkg.homepage}/img/seo-meta/1200x720.webp`,
  ogImageAlt: pkg.name,
  twitterImage: `${pkg.homepage}/img/seo-meta/800x425.webp`,
  twitterSite: '@nuxt_js',
  twitterCreator: '@nuxt_js',
  themeColor: '#f9fafb',
  googleSiteVerification: process.env.GSITE_VERIFICATION
  */
})

provide('navigation', navigation)
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />
    <Analytics />

    <AppHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <!-- Added 28.10.2025 -->
    <BackToTop />

    <AppFooter />

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
      />
    </ClientOnly>
  </UApp>
</template>
