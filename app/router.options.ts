import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    // Return to a saved position if one exists (e.g., when navigating back)
    if (savedPosition) {
      return savedPosition
    }
    // Scroll to an element with a hash, if it's present in the URL
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    // Otherwise, scroll to the top of the page
    return { top: 0, behavior: 'smooth' }
  }
}
