export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: 'Christian Doctrine'
  },
  header: {
    title: '',
    to: '/',
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/LawyerKyrie/',
      'target': '_blank',
      'aria-label': 'GitHub'
    }]
  },
  footer: {
    credits: `@LawyerKyrie • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-discord',
      'to': 'https://github.com/LawyerKyrie/Christian-Dogmatics/discussions',
      'target': '_blank',
      'aria-label': 'Discussions on GitHub'
    }, {
      'icon': 'i-simple-icons-x',
      'to': 'https://go.nuxt.com/x',
      'target': '_blank',
      'aria-label': 'Nuxt on X'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/LawyerKyrie/Christian-Dogmatics/',
      'target': '_blank',
      'aria-label': 'Christian-Dogmatics on GitHub'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/LawyerKyrie/Christian-Dogmatics/content',
      links: [{
        icon: 'i-lucide-star',
        label: 'Star on GitHub',
        to: 'https://github.com/LawyerKyrie/Christian-Dogmatics',
        target: '_blank'
      }, {
        icon: 'i-lucide-book-open',
        label: 'nuxt-docs-ui-theme',
        to: 'https://github.com/LawyerKyrie/nuxt-docs-ui-theme',
        target: '_blank'
      }]
    }
  }
})
