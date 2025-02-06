<template>
    <LayoutTheHeader />

    <aside class="fixed h-screen border-r-2 border-gray-200 xl:w-2xs xl:block hidden top-0 bg-[var(--ui-bg-elevated)]">
        <LayoutTheSidebar />
    </aside>

    <main class="xl:ml-[var(--container-2xs)]">
        <slot />
    </main>
</template>
