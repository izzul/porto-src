<template>
  <transition
    appear
    enter-active-class="animated slideInUp"
    leave-active-class="animated slideOutUp"
  >

    <div class="text-center q-mx-lg">
      <h2 class="q-my-lg">
        Building <span class="text-weight-bolder">Scalable</span> Solutions
      </h2>
      <h2 class="q-my-lg">
        with <span class="text-weight-bold">Data, Code, and AI</span>
      </h2>
      <h6 class="text-grey text-weight-regular q-my-lg">
        I develop data-driven applications, optimize AI models, and build scalable SaaS solutions.
      </h6>
      <span>
        <q-btn
          no-caps
          unelevated
          color="black"
          label="Backend + Frontend Dev"
          class="q-my-md q-mx-sm q-py-sm"
          to="/sub/fullstack"
          />
          <q-btn
          no-caps
          unelevated
          color="black"
          label="Dev Ops"
          class="q-my-md q-mx-sm q-py-sm"
          to="/sub/devops"
          />
          <q-btn
          no-caps
          unelevated
          color="black"
          label="Data Engineer"
          class="q-my-md q-mx-sm q-py-sm"
          to="/sub/data"
          />
          <q-btn
          no-caps
          unelevated
          color="black"
          label="AI Engineer"
          class="q-my-md q-mx-sm q-py-sm"
          to="/sub/ai"
        />
      </span>
    </div>
  </transition>
</template>

<script setup>
//
</script>
