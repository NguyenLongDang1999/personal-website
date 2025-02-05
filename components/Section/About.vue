<template>
    <section class="flex h-screen" id="about">
        <UContainer>
            <div class="flex flex-col justify-center items-start gap-4 h-full">
                <span class="uppercase mb-3 font-bold text-xl">Hello</span>

                <h1 class="text-5xl font-bold leading-tight">
                    i’m {{ config.fullname }} 👋 <br />
                    A <span class="text-[var(--ui-primary)]">Web Developer</span>
                </h1>

                <p class="text-[var(--ui-text-muted)] text-lg w-lg">
                    A passionate Web Developer with expertise in modern web technologies, building scalable and user-friendly applications.
                </p>
            </div>
        </UContainer>
    </section>
</template>
