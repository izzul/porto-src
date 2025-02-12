<template>
  <q-item>
    <q-btn
      unelevated
      dense
      flat
      :target="props.target"
      :to="props.link"
      :label="props.title"
    />
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
  },

  target: {
    type: String,
    default: '_self'
  }
})
</script>
