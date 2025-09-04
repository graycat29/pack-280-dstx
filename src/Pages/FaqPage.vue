<template>
	
	<div class="page" id="FaqPage">
		
		<div class="container-fluid">
			<div class="container content">
				<div class="row">
					<div class="col-12">
						<div class="major-tag-line">FAQ</div>
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
				<div class="col-12 col-sm-12 col-lg-3">
					<div id="helpNavList" class="list-group">
						<a class="list-group-item list-group-item-action" id="faqSectionContactNavItem" href="#faqSectionContact" @click="snapTofaqSectionContact">Contact</a>
						<a class="list-group-item list-group-item-action" id="faqSectionFaqNavItem" href="#faqSectionFaq" @click="snapTofaqSectionFaq">FAQ</a>
					</div>
				</div>
				<div class="col-12 col-sm-12 col-lg-9">
					
					<!-- Contact -->
					<div class="container section tight">
						<div class="snap-to-help-section" id="faqSectionContact"></div>
						<div class="row">
							<div class="col-lg-12">
								<div class="title">Contact</div>
								<div class="description"><a href="mailto:pack280ds@gmail.com" target="_blank">pack280ds@gmail.com</a></div>
							</div>
						</div>
					</div>

					<!-- FAQ -->
					<div class="container section tight">
						<div class="snap-to-help-section" id="faqSectionFaq"></div>
						<div class="row">
							<div class="col-lg-12">
								<div class="title">FAQ</div>
								<div class="paragraph-list">
									
									
									<!-- GENERAL -->
									<div class="label cub-scout-blue">GENERAL</div>
							
									<div class="paragraph-title">What den would my child be in?</div>
									<div class="paragraph-description">
										<p>It's based on the grade level of the child. For example, a 1st-grader would be a Tiger and work toward earning that rank by the end of the school year. At the Rank Advancement Ceremony, they would earn their Tiger rank and sew it on their uniform. Here are the dens and what grade level they are:</p>
										<p>
											<ul>
												<li>Lion: Kindergarten</li>
												<li>Tiger: 1st grade</li>
												<li>Wolf: 2nd grade</li>
												<li>Bear: 3rd grade</li>
												<li>Webelos: 4th grade</li>
												<li>AOL (Arrow of Light): 5th grade</li>
											</ul>
										</p>
									</div>

									<div class="paragraph-title">How big are the dens?</div>
									<div class="paragraph-description">
										<p>This varies from year to year, but we generally have a few different sizes of dens. The smaller dens can have as few as 2 Scouts, and the larger dens can have as many as 10 Scouts.</p>
									</div>

									<div class="paragraph-title">Do we have to go to a specific school?</div>
									<div class="paragraph-description">
										<p>Packs are usually associated with a particular school. Ours is Walnut Springs. But you don't have to go to Walnut Springs to be in pack 280. In fact, a few of our Scouts already go to other schools.</p>
									</div>

									<div class="paragraph-title">When do we wear uniforms?</div>
									<div class="paragraph-description">
										<p>Class A for pack meetings and special events (like a Veteran's Day assembly at the school). We wear class B mostly for den meetings. Sometimes we wear both, like when we go on some campouts and have different kinds of activities.</p>
									</div>

									<div class="paragraph-title">What are the other packs in the area?</div>
									<div class="paragraph-description">
										<p>If you are looking for an all-girl or mixed-gender pack, you might want to check out the following packs:</p>
										<p>
											<ul>
												<li>
													<span>Pack 4</span>
													<!-- <span>asdf</span> -->
													<span>Rooster Springs, Sycamore Springs, and Cypress Springs Elementary Schools</span>
													<span><a href="mailto:pack4ds@gmail.com" target="_blank">pack4ds@gmail.com</a></span>
												</li>
												<li>
													<span>Pack 101</span>
													<!-- <span>asdf</span> -->
													<span>Wildwood Springs and Dripping Springs Elementary Schools</span>
													<span><a href="mailto:info.pack101ds@gmail.com" target="_blank">info.pack101ds@gmail.com</a></span>
												</li>
												<li>
													<span>Pack 1826</span>
													<!-- <span>asdf</span> -->
													<span>Driftwood area</span>
													<span><a href="mailto:scouting@pack1836.com" target="_blank">scouting@pack1836.com</a></span>
												</li>
											</ul>
										</p>
									</div>
									
									
									<!-- COST -->
									<div class="label currency">COST</div>
									
									<div class="paragraph-title">What is cost to join Scouting?</div>
									<div class="paragraph-description">
										<p>This is the answer.</p>
									</div>
									<div class="paragraph-title">How much is the Scout Life magazine subscription?</div>
									<div class="paragraph-description">
										<p>This is the answer.</p>
									</div>

									<div class="paragraph-title">Do I need to buy a Scout handbook?</div>
									<div class="paragraph-description">
										<p>This is the answer.</p>
									</div>


									<!-- UNIFORMS -->
									<div class="label cub-scout-gold-darken">UNIFORMS</div>

									<div class="paragraph-title">How much are the uniforms?</div>
									<div class="paragraph-description">
										<p>This is the answer.</p>
									</div>

									<div class="paragraph-title">Where do I get the uniforms?</div>
									<div class="paragraph-description">
										<p>This is the answer.</p>
									</div>

									<div class="paragraph-title">How much are patches and belt loop awards?</div>
									<div class="paragraph-description">
										<p>This is the answer.</p>
									</div>
																		
									
								</div>
							</div>
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
	name: "FaqPage",
	setup() {
		
		useHead({
			title: 'Cub Scout Pack 280 Dripping Springs, TX',
			link: [
			{
				rel: 'canonical',
				href: 'https://pack280bsa.org/faq'
			}
			],
			meta: [
			{
				name: 'description',
				content: 'Have questions about Cub Scout Pack 280 Dripping Springs, TX? Visit our FAQ Page for FAQs or contact us.'
			}
			]
		})
		
		return {
			snapTofaqSectionFaq() {
				document.getElementById("faqSectionFaq").scrollIntoView();
			},
			snapTofaqSectionContact() {
				document.getElementById("faqSectionContact").scrollIntoView();
			}
		}
	}
})
</script>

<style scoped>
/* Nothing here */
</style>
