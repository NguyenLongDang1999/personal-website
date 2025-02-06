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
            });
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
});
</script>

<template>
    <header class="fixed h-screen border-r-2 border-gray-200 w-2xs top-0 bg-[var(--ui-bg-elevated)]">
        <div class="flex flex-col items-center gap-6 h-full">
            <div class="flex flex-col justify-center items-center mt-8">
                <UAvatar
                    :src="config.avatarSrc"
                    :alt="config.fullname"
                    class="size-52 border-5 border-gray-200"
                />
            </div>

            <nav>
                <ul class="flex flex-col gap-2">
                    <li
                        v-for="nav in navigation"
                        :key="nav.to"
                    >
                        <UButton
                            :to="{ hash: nav.to }"
                            :icon="nav.icon"
                            :label="nav.title"
                            :ui="{
                                label:`font-bold ${activeSection === nav.to ? 'text-[var(--ui-bg)]' : 'text-[var(--ui-text)]'}`
                            }"
                            :variant="activeSection === nav.to ? 'solid' : 'ghost'"
                            size="xl"
                            color="info"
                            class="flex items-center gap-2"
                        />
                    </li>
                </ul>
            </nav>

            <USeparator size="lg" />

            <div class="flex flex-col items-center gap-4">
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
            </div>
        </div>
    </header>
</template>
