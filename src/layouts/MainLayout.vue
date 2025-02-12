<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      style="background: none;"
    >
      <q-toolbar>
        <q-btn
          unelevated
          dense
          round
          text-color="black"
          icon="menu"
          class="lt-md"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        
        <q-toolbar-title
          class="text-black text-weight-bold cursor-pointer"
          @click="$router.push('/')"
        >
          <span class="bg-white q-px-xs">{{ MyName }}</span>
        </q-toolbar-title>
        
        <q-btn
          no-caps
          ripple=false
          flat
          class="text-black gt-sm bg-white"
          label="About Me"
          to="/about"
          target="_self"
          />
          
        <q-btn
          no-caps
          flat
          class="bg-dark gt-sm"
          label="Let's Connect"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          <h6 class="q-my-sm text-dark text-weight-bold" @click="$router.push('/')">{{ MyName }}</h6>
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'About Me',
    icon: 'info',
    link: '/about',
  },
  {
    title: 'Let\'s Connect',
    icon: 'mail',
    link: 'https://linkedin.com/in/afif-if',
    target: '_blank'
  }
]

const MyName = process.env.MyName

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
