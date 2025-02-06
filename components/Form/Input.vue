<script setup lang="ts">

// ** Props & Emits
interface Props {
    name: string
    label?: string
}

defineProps<Props>()
</script>

<template>
    <UFormField
        :name="name"
        :label="label"
    >
        <UInput
            class="w-full"
            v-bind="$attrs"
        />
    </UFormField>
</template>
