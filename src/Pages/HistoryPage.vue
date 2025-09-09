<template>
	
	<div class="page" id="HistoryPage">
		
		<div class="container-fluid sub-page">
			<div class="container content">
				<div class="row">
					<div class="col-12">
						<div class="major-tag-line">History</div>
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
			<div class="container section sub-page">
				<div class="row align-center">
					<div class="col-lg-12">
						<div class="title">asdf</div>
						<div class="description">Instead of selling popcorn, our Pack proudly participates in Flags Over Dripping, a community flag service that raises the funds we need to run our program all year. Here's how it works: on major holidays, we place American flags in the yards of local residents and businesses who subscribe to the service. It's a meaningfulway to show community pride and keep our Scouts active and visible in Dripping Springs.</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Section -->
		<div class="container-fluid">
			<div class="container section sub-page photo-grid">
				<div class="row align-center">
					<div class="col-12 col-sm-6 col-md-4 offset-md-2">
						<img src="@/assets/fod/fod-post.jpg" alt="Flags Over Dripping - Posting Flag" class="activity-img">
					</div>
					<div class="col-12 col-sm-6 col-md-4">
						<img src="@/assets/fod/fod-pledge.jpg" alt="Flags Over Dripping - Pledge of Allegiance" class="activity-img">
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
	name: "HistoryPage",
	setup() {
		
		useHead({
			title: 'Cub Scout Pack 280 Dripping Springs, TX',
			link: [
			{
				rel: 'canonical',
				href: 'https://pack280bsa.org/history'
			}
			],
			meta: [
			{
				name: 'description',
				content: 'Learn about the history of Cub Scout Pack 280 Dripping Springs, TX.'
			}
			]
		})
	}
})
</script>

<style scoped>
/* Nothing here */
</style>
