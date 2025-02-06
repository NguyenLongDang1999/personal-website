<script setup lang="ts">

// ** Data
const information = [
    {
        icon: 'i-lucide-map-pin',
        title: 'Address',
        content: '27 Thap Ba, Vinh Tho, Nha Trang - Khanh Hoa'
    },
    {
        icon: 'i-lucide-mail',
        title: 'E-Mail',
        content: 'longdang0412@gmail.com'
    },
    {
        icon: 'i-lucide-phone',
        title: 'Call Me',
        content: '0389747179'
    }
]
</script>

<template>
    <section class="flex items-center h-screen" id="contact">
        <UContainer>
            <div class="grid grid-cols-12 gap-4">
                <div
                    v-for="info in information"
                    :key="info.title"
                    class="col-span-4"
                >
                    <UCard class="hover:ring hover:ring-[var(--ui-primary)] transition-all">
                        <div class="flex flex-col jusitfy-center items-center">
                            <UButton
                                :icon="info.icon"
                                class="rounded-full mb-5"
                                size="xl"
                            />

                            <h4 class="font-semibold text-2xl mb-3">{{ info.title }}</h4>
                            <p>{{ info.content }}</p>
                        </div>
                    </UCard>
                </div>

                <div class="col-span-12">
                    <UCard class="hover:ring hover:ring-[var(--ui-primary)] transition-all">
                        <div class="grid grid-cols-12">
                            <div class="col-span-6">
                                <UForm :schema="{}" :state="{}">
                                    <div class="grid grid-cols-12 gap-4">
                                        <div class="col-span-6">
                                            <FormInput
                                                label="Your Name"
                                                name="name"
                                            />
                                        </div>

                                        <div class="col-span-6">
                                            <FormInput
                                                label="Phone Number"
                                                name="phone"
                                            />
                                        </div>

                                        <div class="col-span-6">
                                            <FormInput
                                                label="Your Email"
                                                name="email"
                                            />
                                        </div>

                                        <div class="col-span-6">
                                            <FormInput
                                                label="Subject"
                                                name="subject"
                                            />
                                        </div>

                                        <div class="col-span-12">
                                            <FormTextarea
                                                label="Your Message"
                                                name="message"
                                            />
                                        </div>

                                        <div class="col-span-12">
                                            <UButton
                                                type="submit"
                                                size="lg"
                                                icon="i-lucide-send"
                                            >
                                                Send
                                            </UButton>

                                        </div>
                                    </div>
                                </UForm>
                            </div>
                        </div>
                    </UCard>
                </div>
            </div>
        </UContainer>
    </section>
</template>
