<script setup lang="ts">

// ** SEO
useServerHead({
    htmlAttrs: {
        lang: 'en',
        class: 'nuxt-ui-scrollbars'
    }
})

useServerSeoMeta({
    robots: 'index, follow',
    author: config.fullname,
    title: 'NDLab - ' + config.fullname
})
</script>

<template>
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />

    <NuxtLayout>
        <UApp
            scroll-body
            :toaster="{
                position: 'top-center',
                expand: false,
            }"
            :tooltip="{}"
        >
            <NuxtPage />
        </UApp>
    </NuxtLayout>
</template>

<style>
@import 'tailwindcss';
@import '@nuxt/ui';

@theme {
  --font-sans: 'Quicksand', sans-serif;
}

.nuxt-ui-scrollbars ::-webkit-scrollbar {
    background-color: transparent;
    height: .6em;
    width: .6em;
}

.nuxt-ui-scrollbars ::-webkit-scrollbar-thumb {
    border-radius: .6em;
    background-color: var(--color-slate-300);
}

.nuxt-ui-scrollbars ::-webkit-scrollbar-track {
    background-color: var(--color-slate-100);
}
</style>
