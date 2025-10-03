<template>

  <!-- Navigation -->
  <NavBar></NavBar>

  <!-- Pages -->
  <router-view></router-view>
  
  <!-- Footer -->
  <PageFooter></PageFooter>

</template>

<script>
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import PageFooter from "@/components/PageFooter.vue";
export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    PageFooter
  },
  setup() {
    return {

    }
  }
})
</script>

<style>
/* Nothing here */
</style>
