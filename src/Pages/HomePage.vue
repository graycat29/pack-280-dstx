<template>
	<div class="page" id="homePage">
		
		
		<!-- Intro -->
		<div class="container-fluid">
			<div class="container intro">
				<div class="row">
					<div class="col-12 col-sm-12 col-md-12 intro-block">
						<div class="tag-line-container">
							<div class="major-tag-line">Cub Scout Pack 280</div>
							<div class="sub-tag-line">Dripping Springs, TX</div>
						</div>
					</div>
				</div>
			</div>
			<div class="main-image-wrapper">
				<div class="image-carousel" @mouseenter="pauseCarousel" @mouseleave="resumeCarousel">
					<div 
						v-for="(image, index) in carouselImages" 
						:key="index"
						:class="['carousel-image', { 'active': currentImageIndex === index }]"
						:style="{ backgroundImage: `url(${image.src})` }"
					></div>
				</div>
				<div class="overlay"></div>
				<div class="carousel-dots">
					<div 
						v-for="(image, index) in carouselImages" 
						:key="index"
						:class="['dot', { 'active': currentImageIndex === index }]"
						@click="goToImage(index)"
						:title="image.alt"
					></div>
				</div>
				<div class="carousel-controls">
					<button class="control-btn prev" @click="previousImage" title="Previous Image">
						‹
					</button>
					<button class="control-btn next" @click="nextImage" title="Next Image">
						›
					</button>
				</div>
			</div>
		</div>
		
		
		<!-- Section -->
		<div class="container-fluid">
			<div class="container section">
				<div class="row align-center">
					<div class="col-lg-12">
						<div class="title">What Scouting Is All About</div>
						<div class="description">Cub Scouting is where adventure, learning, and family come together. Boys and girls in grades K-5 join age-based “dens,” each with their own activities and achievements. Along the way, Scouts learn practical skills, responsibility, and leadership while having fun with friends. What makes Cub Scouts unique is that it's family-oriented—parents, siblings, and grandparents are always welcome to join in the fun, from den meetings to campouts under the Texas stars.</div>
					</div>
				</div>
				<!-- <div class="row align-items-start">
					<div class="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3"></div>
				</div> -->
			</div>
		</div>


		<!-- Section -->
		<div class="container-fluid">
			<div class="container section dark-bg fire-bg">
				<div class="row align-center">
					<div class="col-lg-12">
						<div class="title">About Pack 280</div>
						<div class="description">Pack 280 is a family pack that welcomes both boys and girls. We offer a traditional Cub Scout experience with strong leadership, close friendships, and a strong sense of camaraderie—adventure the whole family can share.</div>
						<router-link class="button red" to="/about">Read More</router-link>
					</div>
				</div>
			</div>
		</div>


		<!-- Section -->
		<div class="container-fluid">
			<div class="container section">
				<div class="row align-center">
					<div class="col-lg-12">
						<div class="title">What Scouts Get To Do</div>
						<div class="description">Adventure is at the heart of Scouting! Our pack goes on incredible trips and activities that kids will never forget. We've had the chance to spend the night at NASA's Space Center Houston—where Scouts sleep under the space shuttle, beside a Falcon 9 rocket, or even near an Apollo capsule—as well as aboard the historic USS Lexington aircraft carrier. Every year we race in the Pinewood Derby and Rain-gutter Regatta, launch rockets, and camp throughout the Texas Hill Country. Camp Tahuaya is another highlight—where Scouts can try BB guns, archery, slingshots, fishing, kayaking, and so much more. Here's a little bit of what we're doing this year:</div>
						<div class="info">
							<template v-for="event in events" :key="event.date">
								<div class="label-line" :class="{ past: isPast(event) }"></div>
								<div class="subtitle" :class="{ past: isPast(event) }">
									<span>{{ event.date }}</span>
									<span>{{ event.name }}</span>
								</div>
							</template>
						</div>
					</div>
				</div>
			</div>
		</div>


		<!-- Section -->
		<div class="container-fluid">
			<div class="container section light-bg">
				<div class="row align-center">
					<div class="col-lg-12">
						<div class="title">Cost & Commitment</div>
						<div class="description">Scouting is an investment in adventure and growth, but we work to keep it affordable. Annual dues cover registration and program costs, with optional subscriptions like Scout Life magazine. Uniforms are required, but many families donate gently used gear so younger Scouts can “age up” without extra expense. Some special trips and high-adventure camps may have additional fees. Time-wise, families can expect one monthly pack meeting (1-1.5 hours), about two den meetings per month (1-1.5 hours each), plus one big campout or event monthly. Throughout the year, Scouts also get to join special community events like the Founders Day parade and Flags Over Dripping.</div>
						<router-link class="button blue" to="/faq">See FAQ For More</router-link>
					</div>
				</div>
			</div>
		</div>


		<!-- Section -->
		<div class="container-fluid">
			<div class="container section">
				<div class="row align-center">
					<div class="col-lg-12">
						<div class="title">Parent Involvement</div>
						<div class="description">Cub Scouting is a family-centered program—it simply doesn't work without the energy and support of our parents. Whether it's helping lead a den, pitching in at campouts, or volunteering for events, every parent has a role to play. The more families get involved, the richer the experience is for the Scouts. Our pack thrives because moms, dads, and grandparents jump in and make the adventure possible.</div>
					</div>
				</div>
			</div>
		</div>


		<!-- Section -->
		<div class="container-fluid">
			<div class="container section dark-bg flags-bg">
				<div class="row align-center">
					<div class="col-lg-12">
						<div class="title">Flags Over Dripping</div>
						<div class="description">Instead of selling popcorn, our pack proudly participates in Flags Over Dripping (FOD), a
							community flag service that raises the funds we need to run our program all year.</div>
						<router-link class="button blue" to="/fod">Learn More</router-link>
					</div>
				</div>
			</div>
		</div>


		<!-- Section -->
		<div class="container-fluid">
			<div class="container section">
				<div class="row align-center">
					<div class="col-lg-12">
						<div class="title">The Path to Eagle Scout</div>
						<div class="description">Cub Scouting is just the beginning of a journey that can lead to great things. Many Scouts continue on to earn the rank of Eagle Scout—an accomplishment achieved by only about 6% of Scouts nationwide. Eagle Scouts often earn special recognition: some colleges award scholarships or credit, and the U.S. military offers Eagle Scouts the chance to enlist at a higher rank. Did you know that about two-thirds of all astronauts were Scouts and 39 of them made Eagle Scout? Or that U.S. presidents like John F. Kennedy, Gerald Ford, and George W. Bush were involved in Scouting? In Pack 280, many of our dads are Eagle Scouts too—proof that Scouting builds lifelong character and leadership.</div>
					</div>
				</div>
			</div>
		</div>


		<!-- Section -->
		<div class="container-fluid">
			<div class="container section dark-bg founders-bg">
				<div class="row align-center">
					<div class="col-lg-12">
						<div class="title">Resources</div>
						<div class="description">Need forms? More information? Check out our resources page for everything you need.</div>
						<router-link class="button gold" to="/resources">All Resources</router-link>
					</div>
				</div>
			</div>
		</div>


		<!-- Section -->
		<div class="container-fluid">
			<div class="container section">
				<div class="row align-center">
					<div class="col-lg-12">
						<div class="title">Contact Us</div>
						<div class="description"><a href="mailto:pack280ds@gmail.com">pack280ds@gmail.com</a></div>
					</div>
				</div>
			</div>
		</div>

		
	</div>
</template>


<script>
import { ref, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import { useElementVisibility } from '@vueuse/core';
import {useHead} from "@unhead/vue";

// Import images
import mainImage1 from '@/assets/home/main-image-1.jpg'
import mainImage2 from '@/assets/home/main-image-2.jpg'
import mainImage3 from '@/assets/home/main-image-3.jpg'
import mainImage4 from '@/assets/home/main-image-4.jpg'
import mainImage5 from '@/assets/home/main-image-5.jpg'
import mainImage6 from '@/assets/home/main-image-6.jpg'
import mainImage7 from '@/assets/home/main-image-7.jpg'
import mainImage8 from '@/assets/home/main-image-8.jpg'
import mainImage9 from '@/assets/home/main-image-9.jpg'
import mainImage10 from '@/assets/home/main-image-10.jpg'
import mainImage11 from '@/assets/home/main-image-11.jpg'
import mainImage12 from '@/assets/home/main-image-12.jpg'
import mainImage13 from '@/assets/home/main-image-13.jpg'
import mainImage14 from '@/assets/home/main-image-14.jpg'
import mainImage15 from '@/assets/home/main-image-15.jpg'
import mainImage17 from '@/assets/home/main-image-17.jpg'
import mainImage18 from '@/assets/home/main-image-18.jpg'
import mainImage19 from '@/assets/home/main-image-19.jpg'
import mainImage20 from '@/assets/home/main-image-20.jpg'
import mainImage21 from '@/assets/home/main-image-21.jpg'
import mainImage22 from '@/assets/home/main-image-22.jpg'
import mainImage23 from '@/assets/home/main-image-23.jpg'
import mainImage24 from '@/assets/home/main-image-24.jpg'
import mainImage25 from '@/assets/home/main-image-25.jpg'

export default ({
	name: 'HomePage',
	setup() {
		const store = useStore()
		const currentImageIndex = ref(0)
		let carouselInterval = null

		const events = [
			{ date: 'June 13, 2026', name: 'Rocket Launch', endDate: '2026-06-13' },
			{ date: 'June 30, 2026', name: 'America 250 BBQ', endDate: '2026-06-30' },
			{ date: 'July 25, 2026', name: 'Pool Party', endDate: '2026-07-25' },
			{ date: 'September 11-13, 2026', name: 'Lost Pines AOL Invitational Campout', endDate: '2026-09-13' },
			{ date: 'September 26, 2026', name: 'Reimers Ranch Park Day Hike', endDate: '2026-09-26' },
			{ date: 'October 24-25, 2026', name: 'Cave Without a Name Campout', endDate: '2026-10-25' },
			{ date: 'November 8, 2026', name: 'Raingutter Regatta', endDate: '2026-11-08' },
			{ date: 'November 13-15, 2026', name: 'Pedernales Falls State Park Campout', endDate: '2026-11-15' },
			{ date: 'December 12-13, 2026', name: 'Camp Tom Wooten Campout', endDate: '2026-12-13' },
			{ date: 'January 24, 2027', name: 'Pinewood Derby', endDate: '2027-01-24' },
			{ date: 'February 28, 2027', name: 'Blue and Gold Banquet / AOL Crossover Ceremony', endDate: '2027-02-28' },
			{ date: 'March 5-7, 2027', name: 'Camp Tahuaya', endDate: '2027-03-07' },
			{ date: 'April 2-4, 2027', name: 'Enchanted Rock Campout', endDate: '2027-04-04' },
			{ date: 'May 16, 2027', name: 'Rank Advancement', endDate: '2027-05-16' },
		]

		const isPast = (event) => {
			const today = new Date()
			today.setHours(0, 0, 0, 0)
			const [year, month, day] = event.endDate.split('-').map(Number)
			const end = new Date(year, month - 1, day)
			return end < today
		}
		
		// Carousel images with imported image paths
		const carouselImages = ref([
			{ src: mainImage24, alt: 'Cub Scout Pack 280 Image 24' },
			{ src: mainImage25, alt: 'Cub Scout Pack 280 Image 25' },
			{ src: mainImage23, alt: 'Cub Scout Pack 280 Image 23' },
			{ src: mainImage5, alt: 'Cub Scout Pack 280 Image 5' },
			{ src: mainImage17, alt: 'Cub Scout Pack 280 Image 17' },
			{ src: mainImage1, alt: 'Cub Scout Pack 280 Image 1' },
			// { src: mainImage18, alt: 'Cub Scout Pack 280 Image 18' },
			{ src: mainImage10, alt: 'Cub Scout Pack 280 Image 10' },
			{ src: mainImage12, alt: 'Cub Scout Pack 280 Image 12' },
			{ src: mainImage2, alt: 'Cub Scout Pack 280 Image 2' },
			{ src: mainImage9, alt: 'Cub Scout Pack 280 Image 9' },
			// { src: mainImage4, alt: 'Cub Scout Pack 280 Image 4' },
			{ src: mainImage6, alt: 'Cub Scout Pack 280 Image 6' },
			{ src: mainImage7, alt: 'Cub Scout Pack 280 Image 7' },
			// { src: mainImage13, alt: 'Cub Scout Pack 280 Image 13' },
			{ src: mainImage11, alt: 'Cub Scout Pack 280 Image 11' },
			{ src: mainImage14, alt: 'Cub Scout Pack 280 Image 14' },
			{ src: mainImage19, alt: 'Cub Scout Pack 280 Image 19' },
			{ src: mainImage15, alt: 'Cub Scout Pack 280 Image 15' },
			{ src: mainImage3, alt: 'Cub Scout Pack 280 Image 3' },
			{ src: mainImage22, alt: 'Cub Scout Pack 280 Image 22' },
			{ src: mainImage20, alt: 'Cub Scout Pack 280 Image 20' },
			{ src: mainImage21, alt: 'Cub Scout Pack 280 Image 21' },
			{ src: mainImage8, alt: 'Cub Scout Pack 280 Image 8' },
		])

		const goToImage = (index) => {
			currentImageIndex.value = index
			resetCarouselTimer()
		}

		const nextImage = () => {
			currentImageIndex.value = (currentImageIndex.value + 1) % carouselImages.value.length
			resetCarouselTimer()
		}

		const previousImage = () => {
			currentImageIndex.value = currentImageIndex.value === 0 
				? carouselImages.value.length - 1 
				: currentImageIndex.value - 1
			resetCarouselTimer()
		}

		const pauseCarousel = () => {
			stopCarousel()
		}

		const resumeCarousel = () => {
			startCarousel()
		}

		const startCarousel = () => {
			carouselInterval = setInterval(nextImage, 3000) // Change image every 3 seconds
		}

		const stopCarousel = () => {
			if (carouselInterval) {
				clearInterval(carouselInterval)
				carouselInterval = null
			}
		}

		const resetCarouselTimer = () => {
			stopCarousel()
			startCarousel()
		}

		onMounted(() => {
			startCarousel()
		})

		onUnmounted(() => {
			stopCarousel()
		})

		useHead({
			title: 'Cub Scout Pack 280 Dripping Springs, TX',
			link: [
			{
				rel: 'canonical',
				href: 'https://pack280bsa.org'
			}
			],
			meta: [
			{
				name: 'description',
				content: 'Welcome to the Cub Scout Pack 280 Dripping Springs, TX website.'
			}
			]
		})

		return {
			events,
			isPast,
			currentImageIndex,
			carouselImages,
			goToImage,
			nextImage,
			previousImage,
			pauseCarousel,
			resumeCarousel,
			resetCarouselTimer
		}
	}
})
</script>

<style scoped>
.image-carousel {
	position: relative;
	width: 100%;
	height: 100%;
}
.carousel-image {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	opacity: 0;
	transition: opacity 0.5s ease-in-out;
}
.carousel-image.active {
	opacity: 1;
}
.carousel-dots {
	position: absolute;
	bottom: 20px;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	gap: 0.4rem;
	z-index: 10;
}
.dot {
	width: 0.5rem;
	height: 0.5rem;
	border-radius: 50%;
	background-color: rgba(255, 255, 255, 0.5);
	cursor: pointer;
	transition: all 0.3s ease;
}
.dot:hover {
	background-color: rgba(255, 255, 255, 0.8);
	transform: scale(1.2);
}
.dot.active {
	background-color: #fff;
	box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}
.carousel-controls {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	width: 100%;
	pointer-events: none;
	z-index: 10;
}
.control-btn {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	background: rgba(0, 0, 0, 0.5);
	color: white;
	border: none;
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
	font-size: 2rem;
	padding: 0.7rem 0 1rem;
    line-height: 2rem;
	cursor: pointer;
	transition: all 0.3s ease;
	pointer-events: auto;
	display: flex;
	align-items: center;
	justify-content: center;
}
.control-btn:hover {
	background: rgba(0, 0, 0, 0.8);
	transform: translateY(-50%) scale(1.1);
}
.control-btn.prev {
	left: 20px;
}
.control-btn.next {
	right: 20px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
	.carousel-dots {
		bottom: 15px;
		gap: 0.2rem;
	}
	.dot {
		width: 0.3rem;
		height: 0.3rem;
	}
	.control-btn {
		width: 35px;
		height: 35px;
		font-size: 20px;
	}
	.control-btn.prev {
		left: 15px;
	}
	.control-btn.next {
		right: 15px;
	}
}
.info .subtitle.past {
	opacity: 0.4;
	color: #6b6b6b;
}
.info .subtitle.past span {
	color: inherit;
}
.info .label-line.past {
	opacity: 0.25;
}
</style>
