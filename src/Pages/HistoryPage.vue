<template>
	
	<div class="page" id="HistoryPage">
		
		<div class="container-fluid">
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
