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
                            :to="nav.to"
                            :icon="nav.icon"
                            :label="nav.title"
                            :ui="{
                                label:'font-bold text-[var(--ui-text)]'
                            }"
                            size="xl"
                            color="info"
                            class="flex items-center gap-2"
                            variant="ghost"
                        />
                    </li>
                </ul>
            </nav>

            <USeparator size="lg" />

            <div class="flex flex-col items-center gap-4">
                <p class="font-bold text-lg">Find With Me</p>

                <ul class="flex gap-3">
                    <li>
                        <UButton
                            to="https://www.linkedin.com/in/dang-nguyen-long/"
                            target="_blank"
                            icon="i-lucide-linkedin"
                            variant="soft"
                            size="lg"
                        />
                    </li>

                    <li>
                        <UButton
                            to="https://www.linkedin.com/in/dang-nguyen-long/"
                            target="_blank"
                            icon="i-lucide-twitter"
                            variant="soft"
                            size="lg"
                        />
                    </li>

                    <li>
                        <UButton
                            to="https://github.com/nguyenlongdang1999/"
                            target="_blank"
                            icon="i-lucide-github"
                            variant="soft"
                            size="lg"
                        />
                    </li>

                    <li>
                        <UButton
                            to="https://www.facebook.com/nguyen.long.ang.2024/"
                            target="_blank"
                            icon="i-lucide-facebook"
                            variant="soft"
                            size="lg"
                        />
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>
