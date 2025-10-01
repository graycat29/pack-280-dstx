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
			<div class="container">
				<div class="row align-center">
					<div class="col-12 col-sm-6 col-md-4 col-lg-4">
						<div class="card">
							<div class="title">Pack 280 Online Application</div>
							<div class="description">Digital method for registering youth and adult members in Scouting.</div>
							<a class="button blue" href="https://beascout.scouting.org/list/?zip=78620&program%5B0%5D=pack&cubFilter=BoysOnly&allowPeopleToApply=true&miles=20&unitID=131169" target="_blank">Go</a>
						</div>
					</div>
					<div class="col-12 col-sm-6 col-md-4 col-lg-4">
						<div class="card">
							<div class="title">Annual Health Form</div>
							<div class="description">BSA's standardized medical form that participants submit annually.</div>
							<a class="button blue" href="https://filestore.scouting.org/filestore/HealthSafety/pdf/680-001_AB.pdf?_gl=1*69urd*_gcl_au*MTExMjU0Mzk0My4xNzUzMjMyNjcxLjEwNjA1ODQxNjkuMTc1MzIzMzI1Mi4xNzUzMjMzMjUy*_ga*ODY4NTM3NzM0LjE3NTMyMzI2NzE.*_ga_20G0JHESG4*czE3NTM3MTg1MDkkbzI2JGcxJHQxNzUzNzIxNjcxJGo2MCRsMCRoMA..&_ga=2.246588612.1703513203.1753718509-868537734.1753232671" target="_blank">Go</a>
						</div>
					</div>
					<div class="col-12 col-sm-6 col-md-4 col-lg-4">
						<div class="card">
							<div class="title">Medication Form</div>
							<div class="description">This form is required for your child to carry an Epi-Pen and/or asthma inhaler with him while at camp.</div>
							<a class="button blue" href="https://www.capitolareascouting.org/wp-content/uploads/2023/07/epi_pen_and_inhalers_cac.pdf" target="_blank">Go</a>							
						</div>
					</div>
					<div class="col-12 col-sm-6 col-md-4 col-lg-4">
						<div class="card">
							<div class="title">Parental Consent / Liability Waiver for St. Martin de Porres</div>
							<div class="description">Required by the church for us to use their facilities.</div>
							<a class="button blue" href="" target="_blank">Download</a>
						</div>
					</div>
					<div class="col-12 col-sm-6 col-md-4 col-lg-4">
						<div class="card">
							<div class="title">Photo & Video Release Form</div>
							<div class="description">To give the pack permission to use your child's photo and/or video in pack digital media such as this webiste.</div>
							<a class="button blue" href="" target="_blank">Download</a>
						</div>
					</div>
					<div class="col-12 col-sm-6 col-md-4 col-lg-4">
						<div class="card">
							<div class="title">Contact Pack 280</div>
							<div class="description">Send us an email at <a href="mailto:pack280@gmail.com" target="_blank">pack280@gmail.com</a> to get in touch.</div>
							<a class="button blue" href="mailto:pack280@gmail.com" target="_blank">Email</a>
						</div>
					</div>
					<div class="col-12 col-sm-6 col-md-4 col-lg-4">
						<div class="card">
							<div class="title">Flags Over Dripping Contact</div>
							<div class="description">Phoenix Hudson Duff - <a href="mailto:npgduff@gmail.com">npgduff@gmail.com</a> (801) 550-2485</div>
							<a class="button blue" href="mailto:npgduff@gmail.com" target="_blank">Email</a>
						</div>
					</div>
					<div class="col-12 col-sm-6 col-md-4 col-lg-4">
						<div class="card">
							<div class="title">Steve Matthews Scout Store</div>
							<div class="description">
								<p>Your local Scout store in Austin.</p>
								<p>12500 N Interstate Hwy 35, Austin, TX 78753</p>
							</div>
							<a class="button blue" href="https://www.capitolareascouting.org/shop/" target="_blank">Go</a>
						</div>
					</div>
					<div class="col-12 col-sm-6 col-md-4 col-lg-4">
						<div class="card">
							<div class="title">Capitol Area Council: Quick Overview Video</div>
							<div class="description">From our council, a quick overview of what scouting is all about in Central Texas.</div>
							<a class="button blue" href="https://www.capitolareascouting.org/join/joincubscouts/cub-scout-basics/" target="_blank">Go</a>
						</div>
					</div>
					<div class="col-12 col-sm-6 col-md-4 col-lg-4">
						<div class="card">
							<div class="title">Capitol Area Council: Resources</div>
							<div class="description">From our council, a wide variety of tools, forms, and information intended for units, leaders, parents, and Scouts.</div>
							<a class="button blue" href="https://www.capitolareascouting.org/resources/" target="_blank">Go</a>
						</div>
					</div>
					<div class="col-12 col-sm-6 col-md-4 col-lg-4">
						<div class="card">
							<div class="title">Scouting America</div>
							<div class="description">Home page for Scouting America Cub Scouts.</div>
							<a class="button blue" href="https://www.scouting.org/programs/cub-scouts/" target="_blank">Go</a>
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
