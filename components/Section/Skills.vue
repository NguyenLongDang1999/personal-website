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
    <section class="flex items-center h-screen" id="skills">
        <UContainer>
            <div class="grid grid-cols-12 gap-4">
                <div
                    v-for="skill in skills"
                    :key="skill.title"
                    class="col-span-2"
                >
                    <UCard class="group hover:ring hover:ring-[var(--ui-primary)] transition-all">
                        <NuxtLink
                            :to="skill.to"
                            class="font-semibold group-hover:text-[var(--ui-primary)]"
                            target="_blank"
                        >
                            <component
                                :is="skill.component"
                                class="w-full h-16"
                            />

                            <div class="mt-3">
                                <h3 class="text-center">{{ skill.title }}</h3>
                            </div>
                        </NuxtLink>
                    </UCard>
                </div>
            </div>
        </UContainer>
    </section>
</template>
