<script setup lang="ts">

// ** Data
const open = ref<boolean>(false)
</script>

<template>
    <header class="xl:hidden block w-full fixed top-0 left-0 z-50 shadow-lg bg-[var(--ui-bg)]">
        <UContainer>
            <div class="flex justify-end py-5">
                <USlideover
                    v-model:open="open"
                    side="left"
                >
                    <UButton
                        icon="i-lucide-align-right"
                        size="lg"
                    />

                    <template #content>
                        <LayoutTheSidebar :close="() => open = false" />
                    </template>
                </USlideover>
            </div>
        </UContainer>
    </header>
</template>
