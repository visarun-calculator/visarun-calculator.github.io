<script>
import Calculator from './components/Calculator.vue'

export default {
	components: {Calculator},
	data() {
		return {
		info: null
		}
	},
	methods: {
		change(newVal){
			this.info = newVal
		}
	}
}
</script>

<template>
  <header class="py-3 border-bottom mb-3">
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col-xl-3">
          <img src="@/assets/logo/logo.png" alt="Visarun logo" height="70">
        </div>
        <h1 class="col-xl-6 text-center">Калькулятор визарана в Сербии</h1>
        <ul class=" col-xl-3 d-flex justify-content-end nav nav-pills">
          <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Калькулятор </a></li>
          <!-- <li class="nav-item"><a href="#" class="nav-link">Инфорамация</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Памятка</a></li> -->
        </ul>
      </div>
    </div>
    
  </header>

  <main class="container">
    <Calculator class="col-xl-6 offset-xl-3 mt-5" @dateOfVisarun="change" ref="calculator"></Calculator>
    <div class="col-xl-8 offset-xl-2 mt-5">
		<transition name="fade">
			<div v-if="info">
				<div class="show_info p-3">
					<span class="">День выезда: </span>
					<span class="date_of_run">{{ $refs.calculator.formatDate(info.dateOfVisarun, 0, 0, true) }}</span>
					<hr class='sep'>
					<span class="">Осталось дней:</span>
					<span v-if="info.daysLeft > 0">
						{{ info.daysLeft}}
					</span>
					<span v-else-if="info.daysLeft == 0" class="day_today">
						Сегодня!
					</span>
					<span v-else class="day_today">
						Опоздали на {{ info.daysLeft * (-1)}}!
					</span>
				</div>
			</div>
			<div v-else style="min-height: 185px; transition: none;" class="d-flex align-items-center justify-content-center">
				Результата пока нет. Выберите дату выше.
			</div>
		</transition>
        
    </div>

	<div class="faq col-xl-8 offset-xl-2 mt-5">
		<div class="card p-3 my-2">
			<h2 class="h6 fw-bold">Сколько можно находится в Сербии без визы?</h2>
			<div class="fw-bold">Ответ: 30 дней</div>
			<div class="mt-1">
				Согласно закону <a href="https://serbia.mid.ru/ru/consular-services/consulate/dlya_vyezzhayushchikh_v_serbiyu/" nofollow>"ОБ УСЛОВИЯХ ВЗАИМНЫХ ПОЕЗДОК ГРАЖДАН РОССИИ И СЕРБИИ"</a>
				граждане РФ могут находится в Сербии не имея визы в течении 30 дней.

			</div>

		</div>
	</div>
  </main>

  <footer class="border-top mt-4">
	<div class="container d-flex flex-column align-items-center justify-content-center p-2">
		<div class="mt-2">
			© Сайт создал <a href="" style="letter-spacing: 2px; text-decoration: none;">AID</a> - {{ new Date().getFullYear() }}
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

<style scoped>
.show_info {
	background-color: #1faa49;
	box-shadow: rgb(0,0,0,0.8) 5px 5px 0px 0px;
	color: #fff;
	font-size: 2.5rem;

	display: grid;
	grid-template-columns: 3fr 5fr;
	grid-template-rows: 1fr 1fr 1f;

	transition: 200ms linear 50ms;
	
	.date_of_run {
		color: #e6ff00;
	}
	.sep{
		grid-row: 2;
		grid-column-start: 1;
		grid-column-end: 3;
	}
	.day_today {
		color: red;
		text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
             1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
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

/* FAQ */
.faq{
	.card {
		background-color: pink;
		opacity: 0.8;
		border: 4px solid rgb(247, 129, 149);
	}
}

.link-dark {
	:hover {
		color: #1faa49;
	}
}
</style>
