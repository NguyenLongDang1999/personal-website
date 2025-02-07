    <template>
        <section class="bg-[url(/bg-image.webp)] bg-center bg-cover bg-no-repeat flex h-screen" id="home">
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
                    :to="{ hash: ROUTE_HASH.CONTACT }"
                    size="xl"
                    class="mt-4"
                    variant="outline"
                >
                    Hire Me
                </UButton>
            </div>
        </UContainer>
    </section>
</template>
