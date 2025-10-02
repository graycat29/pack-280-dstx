<template>
	
	<div class="page" id="AboutPage">
		
		<div class="container-fluid sub-page">
			<div class="container content">
				<div class="row">
					<div class="col-12">
						<div class="major-tag-line">About</div>
					</div>
				</div>
			</div>
			<div class="main-image-wrapper">
				<div class="main-image"></div>
				<div class="overlay"></div>
			</div>
		</div>
		
		<!-- Section -->
		<!-- <div class="container-fluid">
			<div class="container section sub-page">
				<div class="row align-center">
					<div class="col-lg-12">
						<div class="title">Orgin of Pack 280</div>
						<div class="description">asdf</div>
					</div>
				</div>
			</div>
		</div> -->

		<!-- Section -->
		<div class="container-fluid">
			<div class="container section sub-page">
				<div class="row align-center">
					<div class="col-lg-12">
						<div class="title">In the News</div>
						<div class="description">The Pinewood Derby is one of our Pack's favorite traditions and a beloved Cub Scout event that's been bringing families together since 1953. Scouts build and race their own wooden cars, celebrating creativity, craftsmanship, and friendly competition—while our community and local businesses add special touches that make the day unforgettable for everyone. This is an article about our Pinewood Derby from the Dripping Springs Neighbors magazine.</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Section -->
		<div class="container-fluid">
			<div class="container section sub-page">
				<div class="row align-center">
					<div class="col-12 col-sm-12">
						<img src="@/assets/story/derby-story-1.jpg" alt="Pinewood Derby Article - Part 1" class="derby-img">
					</div>
					<div class="col-12 col-sm-12">
						<img src="@/assets/story/derby-story-2.jpg" alt="Pinewood Derby Article - Part 2" class="derby-img">
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
