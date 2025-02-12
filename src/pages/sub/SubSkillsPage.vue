<template>
  <q-page padding>
    <HeroSection/>
    <h4 class="text-center text-weight-bolder">{{ skillName }}</h4>
  </q-page>
</template>

<script setup>
import HeroSection from 'components/HeroSection.vue'
</script>

<script>
export default {
  data() {
    return {
      skillName: '< My Skill >' 
    }
  },
  mounted() {
    this.skillName = '< ' + this.$route.name + ' >'
  },
  watch: {
    $route(to) {
      this.skillName = '< ' + to.name + ' >'
      // Your code here, e.g. updating some data or fetching new data
    }
  }
}
</script>
