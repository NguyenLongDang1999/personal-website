<script setup lang="ts">

// ** Props & Emits
interface Props {
    name: string
    label?: string
    classInput?: string[]
}

defineProps<Props>()
</script>

<template>
    <UFormField
        :name="name"
        :label="label"
    >
        <UTextarea
            class="w-full"
            v-bind="$attrs"
        />
    </UFormField>
</template>
