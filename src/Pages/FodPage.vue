<template>
	
	<div class="page" id="FodPage">
		
		<div class="container-fluid sub-page">
			<div class="container content">
				<div class="row">
					<div class="col-12">
						<div class="major-tag-line">Flags Over Dripping</div>
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
						<div class="title">What Is Flags Over Dripping?</div>
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
		
		<!-- Section -->
		<div class="container-fluid">
			<div class="container section sub-page dark-bg flags-bg-2">
				<div class="row align-center">
					<div class="col-lg-12">
						<div class="title">Why This Matters</div>
						<div class="description">
							<p>It pays for campouts, supplies, badges, awards, and fun events.</p>
							<p>It means no door-to-door selling or extra fundraisers.</p>
							<p>It teaches Scouts the value of service and responsibility.</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Section -->
		<div class="container-fluid">
			<div class="container section sub-page">
				<div class="row align-center">
					<div class="col-lg-12">
						<div class="title">Flag Schedule</div>
						<div class="description">Subscribers to the service will have American flags placed in their yards on the following major holidays.</div>
						<div class="info">
							<div class="label-line"></div>
							<div class="subtitle">
								<span>September 1, 2025</span>
								<span>Labor Day</span>
							</div>
							<div class="label-line"></div>
							<div class="subtitle">
								<span>November 11, 2025</span>
								<span>Veterans Day</span>
							</div>
							<div class="label-line"></div>
							<div class="subtitle">
								<span>January 19, 2026</span>
								<span>MLK Day</span>
							</div>
							<div class="label-line"></div>
							<div class="subtitle">
								<span>February 16, 2026</span>
								<span>Presidents Day</span>
							</div>
							<div class="label-line"></div>
							<div class="subtitle">
								<span>May 25, 2026</span>
								<span>Memorial Day</span>
							</div>
							<div class="label-line"></div>
							<div class="subtitle">
								<span>June 14, 2026</span>
								<span>Flag Day</span>
							</div>
							<div class="label-line"></div>
							<div class="subtitle">
								<span>June 19, 2026</span>
								<span>Juneteenth</span>
							</div>
							<div class="label-line"></div>
							<div class="subtitle">
								<span>July 4, 2026</span>
								<span>Independence Day</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Section -->
		<div class="container-fluid">
			<div class="container section sub-page light-blue-bg">
				<div class="row align-center">
					<div class="col-lg-12">
						<div class="title">We Need Everyone's Help</div>
						<div class="description">
							<p>This fundraiser only works when every family does their part. Whether it's placing flags, helping with delivery/pickup, managing routes, or organizing logistics, there's a role for everyone. Many hands make light work! Each family will be required to pitch in and we'll meet our goals with less stress and more fun. Let's work together to keep Scouting strong and popcorn-free!</p>
							<p>For more info or to sign up for your family's role in Flags Over Dripping, contact:</p>
							<p>Phoenix Hudson Duff - <a href="mailto:npgduff@gmail.com">npgduff@gmail.com</a> (801) 550-2485</p>
						</div>
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
	name: "FodPage",
	setup() {
		
		useHead({
			title: 'Cub Scout Pack 280 Dripping Springs, TX',
			link: [
			{
				rel: 'canonical',
				href: 'https://pack280bsa.org/fod'
			}
			],
			meta: [
			{
				name: 'description',
				content: 'Learn about the Flags Over Dripping activities of Cub Scout Pack 280 Dripping Springs, TX.'
			}
			]
		})
	}
})
</script>

<style scoped>
/* Nothing here */
</style>
