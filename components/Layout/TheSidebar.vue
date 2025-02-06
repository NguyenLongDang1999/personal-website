<script setup lang="ts">

// ** useHooks
const route = useRoute()
const router = useRouter()

// ** Data
let hasScrolled = false
const activeSection = ref<string>('')

// ** Computed
const linkUrl = computed(() => [
    {
        url: config.linkedin,
        icon: 'i-lucide-linkedin'
    },
    {
        url: config.twitter,
        icon: 'i-lucide-twitter'
    },
    {
        url: config.github,
        icon: 'i-lucide-github'
    },
    {
        url: config.facebook,
        icon: 'i-lucide-facebook'
    }
])

// ** Methods
const updateHash = (hash: string) => {
    if (hasScrolled && route.hash !== hash) {
        router.replace({ hash })
    }
}

onMounted(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const hashLink = `#${entry.target.id}`

                    activeSection.value = hashLink
                    updateHash(hashLink)
                }
            })
        },
        {
            root: null,
            threshold: 0.5
        }
    )

    sections.forEach((section) => observer.observe(section))

    const onFirstScroll = () => {
        hasScrolled = true
        window.removeEventListener('scroll', onFirstScroll)
    }

    window.addEventListener('scroll', onFirstScroll, { once: true })
  
    onBeforeUnmount(() => {
        observer.disconnect()
        window.removeEventListener('scroll', onFirstScroll)
    })
})

const scrollToSection = (hash: string) => {
    const section = document.getElementById(hash.replace('#', ''))

    if (section) {
        hasScrolled = false
        section.scrollIntoView({ behavior: 'smooth' })

        setTimeout(() => {
            hasScrolled = true
            updateHash(hash)
        }, 500)
    }
}
</script>

<template>
    <div class="flex flex-col items-center gap-6 h-full">
        <div class="flex flex-col justify-center items-center mt-8">
            <UAvatar
                :src="config.avatarSrc"
                :alt="config.fullname"
                class="size-42 border-5 border-gray-200"
            />
        </div>

        <nav>
            <ul class="flex flex-col gap-2">
                <li
                    v-for="nav in navigation"
                    :key="nav.to"
                >
                    <UButton
                        :icon="nav.icon"
                        :label="nav.title"
                        :ui="{
                            label:`font-bold ${activeSection === nav.to ? 'text-[var(--ui-bg)]' : 'text-[var(--ui-text)]'}`,
                            base: 'justify-start'
                        }"
                        :variant="activeSection === nav.to ? 'solid' : 'ghost'"
                        size="xl"
                        color="info"
                        block
                        class="flex items-center gap-2 w-42"
                        @click.prevent="scrollToSection(nav.to)"
                    />
                </li>
            </ul>
        </nav>

        <USeparator size="lg" />

        <nav class="flex flex-col items-center gap-4">
            <p class="font-bold text-lg">Find With Me</p>

            <ul class="flex gap-3">
                <li
                    v-for="(link, index) in linkUrl"
                    :key="index"
                >
                    <UButton
                        :to="link.url"
                        :icon="link.icon"
                        target="_blank"
                        variant="soft"
                        size="lg"
                    />
                </li>
            </ul>
        </nav>
    </div>
</template>
