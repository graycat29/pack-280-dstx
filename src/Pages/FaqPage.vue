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
									
									<div class="paragraph-title">Is this a question?</div>
									<div class="paragraph-description">
										<p>This is the answer.</p>
										<p>
											<ul>
												<li>1</li>
												<li>2</li>
												<li>3</li>
											</ul>
										</p>
									</div>
									
									<div class="paragraph-title">Is this a question?</div>
									<div class="paragraph-description">
										<p>This is the answer.</p>
									</div>

									<div class="paragraph-title">Is this a question?</div>
									<div class="paragraph-description">
										<p>This is the answer.</p>
									</div>
									
									
									<!-- COST -->
									<div class="label currency">COST</div>
									
									<div class="paragraph-title">Is this a question?</div>
									<div class="paragraph-description">
										<p>This is the answer.</p>
									</div>

									<div class="paragraph-title">Is this a question?</div>
									<div class="paragraph-description">
										<p>This is the answer.</p>
									</div>
									
									
									<!-- OTHER -->
									<div class="label cub-scout-gold">OTHER</div>
									
									<div class="paragraph-title">Is this a question?</div>
									<div class="paragraph-description">
										<p>This is the answer.</p>
									</div>

									<div class="paragraph-title">Is this a question?</div>
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
