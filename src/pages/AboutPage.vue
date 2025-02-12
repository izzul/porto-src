<template>
  <q-page class="">
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div class="text-center q-mx-lg container">
        <h2 class="q-my-lg">
          About <span class="text-weight-bolder">Me</span>
        </h2>
        <div class="row text-left">
          <div class="col-12 col-md-4">
            <div class="q-mr-md gt-sm">
              <img src="/profile_pic.jpg" style="width: 100%;"/>
            </div>
            <div class="text-center lt-md">
              <img src="/profile_pic.jpg" style="width: 100%; max-width: 250px;"/>
            </div>
          </div>
          <div class="col-12 col-md-8 text-body1 text-weight-light q-pb-xl">
            Hi, I'm Afif, a Data Scientist and Software Engineer dedicated to helping businesses grow and stay competitive with reliable, scalable, and intelligent software solutions. With expertise in machine learning, cybersecurity, and software development, I specialize in turning complex data into actionable insights and building robust systems that drive business success.
            <h6 class="q-my-lg">
              How I Add Value:
            </h6>

            <ul>
              <li>
                <span class="text-weight-medium">Data-Driven Decision Making –</span> Leveraging analytics and AI to uncover opportunities and optimize business operations.
              </li>
              <li>
                <span class="text-weight-medium">Secure & Scalable Software –</span> Designing reliable software architectures that ensure efficiency and long-term growth.
              </li>
              <li>
                <span class="text-weight-medium">Smart Automation –</span> Implementing intelligent systems that enhance productivity and reduce costs.
              </li>
            </ul>

            <h6 class="q-my-lg">
              Experience & Projects:
            </h6>
            <ul>
              <li>
                <span class="text-weight-medium">Optimizing Public Transport –</span> Analyzed transaction data to improve efficiency and customer experience.
              </li>
              <li>
                <span class="text-weight-medium">Smart Parking System –</span> Developed an integrated sensor-based solution for better space management.
              </li>
              <li>
                <span class="text-weight-medium">Cybersecurity & AI –</span> Created a machine learning model for mobile security through behavioral profiling.
              </li>
              <li>
                <span class="text-weight-medium">Enterprise Data Solutions –</span> Assisted in mining data analytics with Pertamina to drive exploration strategies.
              </li>
            </ul>
            I thrive on solving complex problems with cutting-edge technology and am always looking for opportunities to help businesses build smarter, safer, and more efficient software solutions.
            <br/>
            <span class="text-weight-bold text-white bg-black q-px-xs cursor-pointer">Let’s connect</span> and explore how I can contribute to your next big idea!
          </div>
        </div>
      </div>
    </transition>
    <div class="text-center bg-dark q-pt-xl">
      <div class="container">
        <h3 class="q-my-lg text-white">
          My <span class="text-weight-bolder">Timeline</span>
        </h3>
        <div>
          <span class="text-center text-orange">
            <q-checkbox
              v-model="categories.study"
              color="orange"
              dark
              keep-color
              label="Study"
              />
          </span>
          <span class="text-center text-red">
            <q-checkbox
              v-model="categories.work"
              color="red"
              dark
              keep-color
              label="Work"
              />
          </span>
          <span class="text-center text-blue">
            <q-checkbox
              v-model="categories.organization"
              color="blue"
              dark
              keep-color
              label="Organization"
              />
          </span>
          <span class="text-center text-purple">
            <q-checkbox
              v-model="categories.volunteer"
              dark
              keep-color
              label="Volunteer"
              color="purple"
            />
          </span>
        </div>
        <div class="q-px-lg q-py-md text-white text-left">
          <q-timeline color="primary">
            <q-timeline-entry
              v-for="(entry, index) in timeline_display"
              :key="index"
              :title="entry.title"
              :subtitle="entry.subtitle"
              :body="entry.body"
              :heading="entry.type == 'heading'"
              :icon="categoriesIcons[entry.category]"
              :color="categoriesColors[entry.category]"
            />
          </q-timeline>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
  // const 
</script>
<script>
export default {
  data() {
    return {
      categories: {
        study: true,
        organization: true,
        work: true,
        volunteer: true,
      },
      categoriesColors: {
        study: 'orange',
        organization: 'blue',
        work: 'red',
        volunteer: 'purple',
      },
      categoriesIcons: {
        study: 'school',
        organization: 'workspaces',
        work: 'work',
        volunteer: 'support',
      },
      timeline_entries: [
        {
          'type': 'heading',
          'body': '2013',
        },
        {
          'type': 'entry',
          'category': 'study',
          'title': 'Started B.Cs. - Gadjah Mada University',
          'subtitle': 'September 2013',
          'body': 'Enrolled through direct invitation path (SNMPTN)',
        },
        {
          'type': 'entry',
          'category': 'organization',
          'title': 'Joined OmahTI student organization',
          'subtitle': 'October 2013',
          'body': 'learn and teach peers about various IT fields',
        },
        {
          'type': 'heading',
          'body': '2014',
        },
        {
          'type': 'heading',
          'body': '2017',
        },
        {
          'type': 'entry',
          'category': 'study',
          'title': 'Obtained B.Cs. Degree - Gadjah Mada University',
          'subtitle': 'October 2017',
          'body': 'Cum Laude with 3.80',
        },
        {
          'type': 'heading',
          'body': '2020',
        },
        {
          'type': 'entry',
          'category': 'study',
          'title': 'Started Master of Computer Science Study - UGM',
          'subtitle': 'September 2020',
          'body': '',
        },
        {
          'type': 'heading',
          'body': '2021',
        },
        {
          'type': 'entry',
          'category': 'study',
          'title': 'Started Master of Computer Science Study - NCU',
          'subtitle': 'September 2021',
          'body': '',
        },
        {
          'type': 'entry',
          'category': 'study',
          'title': 'Earned Master of Computer Science (UGM) & Master of Science (NCU)',
          'subtitle': 'September 2022',
          'body': '',
        },
        {
          'type': 'heading',
          'body': '2023',
        },
        {
          'type': 'entry',
          'category': 'work',
          'title': 'Assistant Researcher - Geoseismal Research Center UGM',
          'subtitle': 'September 2023 - Now',
          'body': 'body',
        },
      ],
      timeline_display: []
    }
  },
  created() {
    this.timeline_display = JSON.parse(JSON.stringify(this.timeline_entries))
  },
  watch: {
    categories: {
      handler(newVal, oldVal) {
        console.log(this.timeline_display)
        this.onCategoryChange(newVal, oldVal);
      },
      deep: true
    }
  },
  methods: {
    onCategoryChange(newVal) {
      const activeCategories = Object.keys(newVal).filter(key => newVal[key] === true)
      if (Object.keys(activeCategories).length == Object.keys(this.categories).length) {
        this.timeline_display = JSON.parse(JSON.stringify(this.timeline_entries))
      }
      
      else {
        this.timeline_display = []
        this.timeline_entries.forEach(entry => {
          if (entry.type != 'entry') {
            this.timeline_display.push(entry)
          }
          else if (activeCategories.indexOf(entry.category) >= 0) {
            this.timeline_display.push(entry)
          }
        });
        
      }
    }
  }
};
</script>