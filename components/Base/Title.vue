<script setup lang="ts">

// ** Props & Emits
interface Props {
    title: string
    subtitle: string
}

defineProps<Props>()
</script>

<template>
    <div class="relative flex items-center text-center mb-16">
        <h2 class="md:text-9xl text-7xl text-neutral-900 opacity-5 uppercase font-bold w-full mb-0">{{ title }}</h2>
        <p class="md:text-4xl text-3xl text-dark font-bold absolute w-full align-self-center leading-tight mb-0">
            {{ subtitle }}
            <span class="w-20 border-b-3 border-[var(--ui-primary)] block mx-auto"></span>
        </p>
    </div>
</template>
