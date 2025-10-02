<template>
	<div class="container-fluid navigation" id="navigation" :class="{ 'active': showNavbar }">
		<div class="container">
			<router-link to="/" class="link" :class="{ 'active': $route.name === 'home' }">Home</router-link>
			<router-link to="/about" class="link" :class="{ 'active': $route.name === 'about' }">About</router-link>
			<router-link to="/fod" class="link" :class="{ 'active': $route.name === 'fod' }">FOD</router-link>
			<router-link to="/faq" class="link" :class="{ 'active': $route.name === 'faq' }">FAQ</router-link>
			<router-link to="/resources" class="link" :class="{ 'active': $route.name === 'resources' }">Resources</router-link>
		</div>
	</div>
</template>

<script>
import {computed, defineComponent} from "vue";
import { useStore } from "vuex"
import { useRoute } from 'vue-router'
import {useScroll} from "@vueuse/core"

export default defineComponent({
	name: "NavBar",
	setup() {
		const store = useStore()
		const route = useRoute()
		const { y } = useScroll(window)
		const showNavbar = computed(() => {
			return y.value > 0
		})
		return {
			showNavbar
		}
	}
})
</script>

<style scoped>
/* Nothing here */
</style>
