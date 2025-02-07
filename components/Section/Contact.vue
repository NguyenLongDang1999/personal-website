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

const defaultState: IContactForm = {
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
}

const state = reactive<Partial<IContactForm>>(defaultState)

// ** useHooks
const mail = useMail()

// ** Methods
const onSubmit = async () => {
    try {
        await mail.send({
            from: state.email,
            subject: state.subject,
            text: `
Hello ${config.fullname},

You have received a new message from your website contact form (${config.domain}).

📌 User Details:
- Name: ${state.name}
- Phone Number: ${state.phone || 'Not provided'}
- Email: ${state.email}
- Subject: ${state.subject}

💬 Message:  
${state.message}

Please respond to the user as soon as possible.

Best regards
            `,
        })
        
        Object.assign(state, { ...defaultState })
    }
    catch {}
    finally {}
}
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
                            class="lg:max-h-[600px] h-full w-full object-cover lg:rounded-l-lg rounded-lg lg:max-h-full max-h-[600px] object-bottom"
                        />
                    </div>

                    <div class="lg:col-span-6 col-span-12">
                        <div class="flex flex-col justify-center h-full">
                            <div class="space-y-3 mb-4">
                                <h2 class="font-semibold text-2xl">Contact Me</h2>
                                <p>"I’m always open to new opportunities, collaborations, and interesting conversations. Feel free to reach out!"</p>
                            </div>

                            <UForm
                                :schema="contactFormSchema"
                                :state="state"
                                @submit="onSubmit"
                            >
                                <div class="grid grid-cols-12 gap-4">
                                    <div class="col-span-6">
                                        <FormInput
                                            v-model="state.name"
                                            :label="contactLabel.name"
                                            name="name"
                                        />
                                    </div>

                                    <div class="col-span-6">
                                        <FormInput
                                            v-model="state.phone"
                                            :label="contactLabel.phone"
                                            name="phone"
                                        />
                                    </div>

                                    <div class="col-span-6">
                                        <FormInput
                                            v-model="state.email"
                                            :label="contactLabel.email"
                                            name="email"
                                        />
                                    </div>

                                    <div class="col-span-6">
                                        <FormInput
                                            v-model="state.subject"
                                            :label="contactLabel.subject"
                                            name="subject"
                                        />
                                    </div>

                                    <div class="col-span-12">
                                        <FormTextarea
                                            v-model="state.message"
                                            :label="contactLabel.message"
                                            :rows="5"
                                            name="message"
                                        />
                                    </div>

                                    <div class="col-span-12">
                                        <UButton
                                            type="submit"
                                            size="lg"
                                            icon="i-lucide-send"
                                            loading-auto
                                        >
                                            Send
                                        </UButton>

                                    </div>
                                </div>
                            </UForm>
                        </div>
                    </div>
                </div>
            </UCard>
        </UContainer>
    </section>
</template>
