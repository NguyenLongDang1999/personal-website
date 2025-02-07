<template>
    <header class="xl:hidden block sticky top-0 left-0 z-50 shadow-lg bg-[var(--ui-bg)]">
        <UContainer>
            <div class="flex justify-end py-5">
                <USlideover
                    title="Sidebar"
                    side="left"
                    :ui="{
                        title: 'opacity-0'
                    }"
                >
                    <UButton
                        icon="i-lucide-align-right"
                        size="lg"
                    />

                    <template #body>
                        <LayoutTheSidebar />
                    </template>
                </USlideover>
            </div>
        </UContainer>
    </header>
</template>
