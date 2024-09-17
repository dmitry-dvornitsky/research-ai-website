// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    typeCheck: true,
  },

  modules: [
    ['@nuxt/fonts',
      {
        fonts: {
          families: [
            { name: 'Inter', provider: 'google' },
          ],
        },
      },
    ],
    ['@nuxtjs/tailwindcss',
      {
        configPath: 'tailwind.config.ts',
      },
    ],
    [
      '@nuxt/eslint',
      {
        config: {
          stylistic: true,
        },
      },
    ],
    '@pinia/nuxt',
  ],

  compatibilityDate: '2024-09-02',
})
