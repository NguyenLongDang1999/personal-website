<script setup lang="ts">

// ** Data
const skills = [
    {
        component: resolveComponent('LangHTML5'),
        title: 'HTML',
        to: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
    },
    {
        component: resolveComponent('LangCSS3'),
        title: 'CSS',
        to: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
        component: resolveComponent('LangJavascript'),
        title: 'Javascript',
        to: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
        component: resolveComponent('LangTypescript'),
        title: 'Typescript',
        to: 'https://www.typescriptlang.org/',
    },
    {
        component: resolveComponent('LangNuxt'),
        title: 'Nuxt',
        to: 'https://nuxt.com/',
    },
    {
        component: resolveComponent('LangReact'),
        title: 'React',
        to: 'https://react.dev/',
    },
    {
        component: resolveComponent('LangTailwindCSS'),
        title: 'Tailwind CSS',
        to: 'https://tailwindcss.com/',
    },
    {
        component: resolveComponent('LangNodeJS'),
        title: 'NodeJS',
        to: 'https://nodejs.org/en',
    },
    {
        component: resolveComponent('LangElysia'),
        title: 'ElysiaJS',
        to: 'https://elysiajs.com/',
    },
    {
        component: resolveComponent('LangPrisma'),
        title: 'Prisma',
        to: 'https://www.prisma.io/',
    },
    {
        component: resolveComponent('LangPostgreSQL'),
        title: 'PostgreSQL',
        to: 'https://www.postgresql.org/',
    },
    {
        component: resolveComponent('LangGraphQL'),
        title: 'GraphQL',
        to: 'https://graphql.org/',
    },
    {
        component: resolveComponent('LangLaravel'),
        title: 'Laravel',
        to: 'https://laravel.com/',
    },
    {
        component: resolveComponent('LangCodeIgniter'),
        title: 'CodeIgniter',
        to: 'https://codeigniter.com/',
    },
    {
        component: resolveComponent('LangGithub'),
        title: 'Github',
        to: 'https://github.com/nguyenlongdang1999/',
    },
    {
        component: resolveComponent('LangRabbitMQ'),
        title: 'RabbitMQ',
        to: 'https://www.rabbitmq.com/',
    },
    {
        component: resolveComponent('LangRedis'),
        title: 'Redis',
        to: 'https://redis.io/',
    },
    {
        component: resolveComponent('LangDocker'),
        title: 'Docker',
        to: 'https://www.docker.com/',
    }
]
</script>

<template>
    <section class="flex flex-col py-24 bg-neutral-50" id="skills">
        <BaseTitle
            title="Skills"
            subtitle="What I Do Best"
        />

        <UContainer class="w-full">
            <div class="grid grid-cols-12 gap-4">
                <div
                    v-for="skill in skills"
                    :key="skill.title"
                    class="lg:col-span-2 md:col-span-3 sm:col-span-4 col-span-6"
                >
                    <NuxtLink
                        :to="skill.to"
                        target="_blank"
                        class="group"
                    >
                        <UCard class="font-semibold group-hover:text-[var(--ui-primary)] group-hover:ring group-hover:ring-[var(--ui-primary)] transition-all">
                            <component
                                :is="skill.component"
                                class="w-full h-16"
                            />

                            <div class="mt-3">
                                <h3 class="text-center">{{ skill.title }}</h3>
                            </div>
                        </UCard>
                    </NuxtLink>
                </div>
            </div>
        </UContainer>
    </section>
</template>
