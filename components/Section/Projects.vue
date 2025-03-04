<template>
    <section class="flex flex-col py-24" id="projects">
        <BaseTitle
            title="Projects"
            subtitle="See My Work"
        />

        <UContainer class="w-full">
            <div class="grid grid-cols-12 mb-4 gap-4">
                <UCard
                    :ui="{
                        body: 'p-0 sm:p-0'
                    }"
                    class="md:col-span-4 sm:col-span-6 col-span-12 hover:ring hover:ring-[var(--ui-primary)] transition-all"
                >
                    <div class="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                        <NuxtImg src="/next-movie-finder.png" alt="NextJS Movie Finder" class="w-full h-48 object-cover" />

                        <div class="p-4">
                            <h3 class="text-xl font-bold text-[var(--ui-primary)]">NextJS Movie Finder</h3>
                            <p class="text-gray-300 text-sm mt-2">A modern movie search app powered by TMDB API, built with Next.js for fast performance and SSR.</p>
                            <div class="mt-3 flex flex-wrap gap-2">
                                <UBadge>Next.js</UBadge>
                                <UBadge>TailwindCSS</UBadge>
                                <UBadge>TMDB API</UBadge>
                            </div>
                            <div class="mt-4 flex justify-between items-center">
                                <NuxtLink
                                    to="https://nextjs-movie-woad.vercel.app/"
                                    target="_blank"
                                    class="text-[var(--ui-bg)] text-sm hover:underline"
                                >
                                    Live Demo
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </UCard>
            </div>
        </UContainer>
    </section>
</template>
