import tailwind from 'eslint-plugin-tailwindcss'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  { rules: { '@typescript-eslint/no-namespace': 'off' } },
  tailwind.configs['flat/recommended'],
)
