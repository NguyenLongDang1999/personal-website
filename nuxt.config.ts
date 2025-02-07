// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: [
        '@nuxt/ui',
        '@nuxt/image',
        ['nuxt-mail', {
            message: {
                to: process.env.SMTP_AUTH_USER
            },
            smtp: {
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                auth: {
                    user: process.env.SMTP_AUTH_USER,
                    pass: process.env.SMTP_AUTH_PASS
                }
            }
        }]
    ],
    router: {
        options: {
            scrollBehaviorType: 'smooth'
        }
    },
    imports: {
        dirs: ['validations']
    }
})
