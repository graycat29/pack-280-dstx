<template>
	
	<div class="page" id="ResourcesPage">
		
		<div class="container-fluid sub-page">
			<div class="container content">
				<div class="row">
					<div class="col-12">
						<div class="major-tag-line">Resources</div>
					</div>
				</div>
			</div>
			<div class="main-image-wrapper">
				<div class="main-image"></div>
				<div class="overlay"></div>
			</div>
		</div>
		
		<!-- Section -->
		<div class="container-fluid">
			<div class="container section section-margin light-bg">
				<div class="row align-center">
					<div class="col-lg-12">
						<div class="title">asdd</div>
						<div class="description">This is a description for the resources page.</div>
						<router-link class="button blue" to="/faq">asdf</router-link>
					</div>
				</div>
			</div>
		</div>

		<!-- Section -->
		<div class="container-fluid">
			<div class="container section section-margin light-bg">
				<div class="row align-center">
					<div class="col-lg-12">
						<div class="title">asdd</div>
						<div class="description">This is a description for the resources page.</div>
						<router-link class="button blue" to="/faq">asdf</router-link>
					</div>
				</div>
			</div>
		</div>

		<!-- Section -->
		<div class="container-fluid">
			<div class="container section section-margin light-bg">
				<div class="row align-center">
					<div class="col-lg-12">
						<div class="title">asdd</div>
						<div class="description">This is a description for the resources page.</div>
						<router-link class="button blue" to="/faq">asdf</router-link>
					</div>
				</div>
			</div>
		</div>
		
	</div>
	
</template>

<script>
import { defineComponent } from "vue";
import {useHead} from "@unhead/vue";

export default defineComponent({
	name: "ResourcesPage",
	setup() {
		
		useHead({
			title: 'Cub Scout Pack 280 Dripping Springs, TX',
			link: [
			{
				rel: 'canonical',
				href: 'https://pack280bsa.org/resources'
			}
			],
			meta: [
			{
				name: 'description',
				content: 'Resources for Cub Scout Pack 280 Dripping Springs, TX.'
			}
			]
		})
	}
})
</script>

<style scoped>
/* Nothing here */
</style>
