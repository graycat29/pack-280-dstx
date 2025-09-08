<template>
	
	<div class="page" id="ResourcesPage">
		
		<div class="container-fluid">
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
		
		<div class="container">
			<div class="row">
				<div class="col-12">
					<span>asdf</span>
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
