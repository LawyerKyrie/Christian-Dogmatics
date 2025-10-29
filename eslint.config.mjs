// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
).override('nuxt/typescript', {
  rules: {
    'nuxt/nuxt-config-keys-order': 'off'
  }
})
