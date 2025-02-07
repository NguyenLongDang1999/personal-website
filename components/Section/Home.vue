<script setup lang="ts">

// ** Data
let hasScrolled = false

// ** Methods
const scrollToSection = (hash: string) => {
    const section = document.getElementById(hash.replace('#', ''))

    if (section) {
        hasScrolled = false
        section.scrollIntoView({ behavior: 'smooth' })

        setTimeout(() => {
            hasScrolled = true
        }, 500)
    }
}
</script>

<template>
    <section class="bg-[url(/bg-image.webp)] bg-center bg-cover bg-no-repeat flex h-screen relative" id="home">
        <UContainer>
            <div class="flex flex-col justify-center items-center gap-4 h-full text-center">
                <span class="uppercase mb-2 font-bold text-xl">Hello 👋</span>

                <h1 class="sm:text-5xl text-4xl font-bold leading-tight">
                    i’m {{ config.fullname }}<br />
                    A <span class="text-[var(--ui-primary)]">Web Developer</span>
                </h1>

                <p class="text-[var(--ui-text-muted)] text-lg max-w-lg">
                    A passionate Web Developer with expertise in modern web technologies, building scalable and user-friendly applications.
                </p>

                <UButton
                    size="xl"
                    class="mt-4"
                    variant="outline"
                    @click="scrollToSection(ROUTE_HASH.CONTACT)"
                >
                    Hire Me
                </UButton>
            </div>

            <div class="absolute bottom-3 left-1/2 transform -translate-x-1/2 animate-bounce">
                <UIcon
                    class="size-7 cursor-pointer"
                    name="i-lucide-chevron-down"
                    @click="scrollToSection(ROUTE_HASH.ABOUT)"
                />
            </div>
        </UContainer>
    </section>
</template>
