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
    <section class="flex flex-col py-24" id="contact">
        <BaseTitle
            title="Contact"
            subtitle="Get in Touch"
        />

        <UContainer class="w-full">
            <div class="grid grid-cols-12 mb-4 gap-4">
                <UCard
                    v-for="info in information"
                    :key="info.title"
                    class="md:col-span-4 sm:col-span-6 col-span-12 hover:ring hover:ring-[var(--ui-primary)] transition-all"
                >
                    <div class="flex flex-col jusitfy-center items-center">
                        <UButton
                            :icon="info.icon"
                            class="rounded-full mb-5"
                            size="xl"
                        />

                        <h4 class="font-semibold text-2xl mb-3">{{ info.title }}</h4>
                        <p class="text-center">{{ info.content }}</p>
                    </div>
                </UCard>
            </div>

            <UCard class="hover:ring hover:ring-[var(--ui-primary)] transition-all">
                <div class="grid grid-cols-12 gap-6">
                    <div class="lg:col-span-6 col-span-12 lg:-ml-6 lg:-mt-6 lg:-mb-6">
                        <NuxtImg
                            src="https://pagedone.io/asset/uploads/1696488602.png"
                            alt="Contact Us"
                            class="h-full w-full object-cover lg:rounded-l-lg rounded-lg lg:max-h-full max-h-[540px] object-bottom"
                        />
                    </div>

                    <div class="lg:col-span-6 col-span-12">
                        <div class="space-y-3 mb-4">
                            <h2 class="font-semibold text-2xl">Contact Me</h2>
                            <p>"I’m always open to new opportunities, collaborations, and interesting conversations. Feel free to reach out!"</p>
                        </div>

                        <UForm :schema="{}" :state="{}">
                            <div class="grid grid-cols-12 gap-4">
                                <div class="col-span-12">
                                    <FormInput
                                        label="Your Name"
                                        name="name"
                                    />
                                </div>

                                <div class="col-span-12">
                                    <FormInput
                                        label="Phone Number"
                                        name="phone"
                                    />
                                </div>

                                <div class="col-span-12">
                                    <FormInput
                                        label="Your Email"
                                        name="email"
                                    />
                                </div>

                                <div class="col-span-12">
                                    <FormInput
                                        label="Subject"
                                        name="subject"
                                    />
                                </div>

                                <div class="col-span-12">
                                    <FormTextarea
                                        label="Your Message"
                                        name="message"
                                        :rows="5"
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
        </UContainer>
    </section>
</template>
