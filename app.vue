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
</style>
