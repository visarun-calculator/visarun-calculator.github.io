<template>
	<header class="py-3 border-bottom mb-3">
		<div class="container">
			<div class="row d-flex align-items-center">
				<div class="col-md-3 col-12 text-center text-md-start">
					<img src="@/assets/logo/logo.png" alt="Visarun logo" height="70" />
				</div>
				<h1 class="title col-md-6 col-12 text-center">Калькулятор визарана в Сербии</h1>
				<ul class="col-md-3 col-12 d-flex justify-content-md-end justify-content-center nav nav-pills">
					<li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Калькулятор</a></li>
					<!-- <li class="nav-item"><a href="#" class="nav-link">Инфорамация</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Памятка</a></li> -->
				</ul>
			</div>
		</div>
	</header>

	<main class="container">
		<Calculator class="col-md-6 offset-md-3 mt-5" @dateOfVisarun="change" ref="calculator"></Calculator>
		<div class="col-xl-8 offset-xl-2 mt-5">
			<transition name="fade">
				<div v-if="info">
					<div class="show_info p-3">
						<div class="show_info__block show_info__block_date">
							<span class="show_info__label">День выезда:&nbsp;</span>
							<span class="date_of_run">{{ $refs.calculator.formatDate(info.dateOfVisarun, 0, 0, true) }}</span>
						</div>
						<hr class="sep" />
						<div class="show_info__block">
							<span class="show_info__label">Осталось дней:&nbsp;</span>
							<span v-if="info.daysLeft > 0">
								{{ info.daysLeft }}
							</span>
							<span v-else-if="info.daysLeft == 0" class="day_today">0</span>
							<span v-else class="day_today">Опоздали на {{ info.daysLeft * -1 }}!</span>
						</div>
					</div>
				</div>
				<div v-else style="min-height: 185px; transition: none" class="d-flex align-items-center justify-content-center">
					Результата пока нет. Выберите дату выше.
				</div>
			</transition>
		</div>

		<Accordion class="col-xl-8 offset-xl-2 mt-5"></Accordion>
	</main>

	<footer class="border-top mt-4">
		<div class="container d-flex flex-column align-items-center justify-content-center p-2">
			<div class="mt-2">
				© Сайт создал
				<a href="" style="letter-spacing: 2px; text-decoration: none">AID</a>
				- {{ new Date().getFullYear() }}
			</div>
			<div class="mt-2">
				<a href="https://github.com/LokkiDog" class="link-dark">
					<font-awesome-icon size="lg" title="Github" :icon="['fab', 'github']" class="ms-2" />
				</a>
				<a href="https://t.me/Izvekov_Alex" class="link-dark">
					<font-awesome-icon size="lg" title="Telegram" :icon="['fab', 'telegram']" class="ms-2" />
				</a>
				<a href="https://www.instagram.com/web_izvekov/" class="link-dark">
					<font-awesome-icon size="lg" title="Instagram" :icon="['fab', 'instagram']" class="ms-2" />
				</a>
				<a href="https://www.linkedin.com/in/alexander-izvekov-462480252/" class="link-dark">
					<font-awesome-icon size="lg" title="Linkedin" :icon="['fab', 'linkedin']" class="ms-2" />
				</a>
			</div>
		</div>
	</footer>
</template>
<script>
import Accordion from './components/Accordion.vue'
import Calculator from './components/Calculator.vue'

export default {
	components: { Calculator, Accordion },
	data() {
		return {
			info: null,
		}
	},
	methods: {
		change(newVal) {
			this.info = newVal
		},
	},
}
</script>

<style scoped lang="scss">
.show_info {
	background-color: #1faa49;
	box-shadow: rgb(0, 0, 0, 0.8) 5px 5px 0px 0px;
	border-radius: 5px;
	color: #fff;
	font-size: 2.5rem;

	display: grid;
	grid-template-columns: 3fr 5fr;
	grid-template-rows: 1fr 1fr 1f;

	transition: 200ms linear 50ms;

	.date_of_run {
		color: #e6ff00;
	}
	.sep {
		grid-row: 2;
		grid-column-start: 1;
		grid-column-end: 3;
	}
	.day_today {
		color: #e6ff00;
	}
	&__block {
		display: flex;
		grid-column: 1 / 3;
		&_date {
			flex-wrap: wrap;
			white-space: nowrap;
		}
	}
	&__label {
		white-space: nowrap;
	}
}
@media screen and (max-width: 992px) {
	.title {
		font-size: 1.7rem;
	}
}
@media screen and (max-width: 676px) {
	.title {
		font-size: 1.5rem;
	}
	.show_info {
		font-size: 1.8rem;
	}
}
@media screen and (max-width: 500px) {
	.show_info {
		font-size: 1.5rem;
	}
}
@media screen and (max-width: 430px) {
	.show_info {
		font-size: 1.2rem;
	}
}
@media screen and (max-width: 360px) {
	.show_info {
		font-size: 1rem;
	}
}

.fade-enter-active {
	transition: opacity 0.5s ease;
}
.fade-leave-active {
	transition: none;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
