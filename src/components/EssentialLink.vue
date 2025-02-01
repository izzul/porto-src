<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    :href="props.link"
  >
    <q-item-section>
      <q-item-label lines="1" class="left-border-sm q-pl-sm">{{ props.title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },

  link: {
    type: String,
    default: '#'
  },

  icon: {
    type: String,
    default: ''
  }
})
</script>
