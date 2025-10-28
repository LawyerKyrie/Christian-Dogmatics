<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UPageAside>
          <UContentNavigation
            highlight
            type="single"
            :navigation="navigation"
            :default-open="false"
          />
        </UPageAside>
      </template>

      <slot />
    </UPage>
  </UContainer>
</template>
