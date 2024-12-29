<template>
	<div class="calculator__wrapper h5">
		<label for="calculator">Дата въезда в Сербию:</label>
		<VueDatePicker
			class="mt-1"
			id="calculator"
			multi-calendars
			text-input
			locale="ru"
			format="dd.MM.yyyy"
			required
			v-model="date"
			:placeholder="`Например ${formatDate(new Date(), -20)}`"
			:auto-apply="true"
			:enable-time-picker="false"
		></VueDatePicker>
	</div>
</template>
<script>
import { ref } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

import Accordion from './Accordion.vue'

export default {
	name: 'Calculator',
	components: { VueDatePicker, Accordion },
	emits: ['dateOfVisarun'],
	setup() {
		const date = ref()
		return { date }
	},
	data() {
		return {
			days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
			months: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
		}
	},
	watch: {
		info: {
			handler(val, oldVal) {
				this.$emit('dateOfVisarun', val)
			},
		},
	},
	computed: {
		dateOfRun() {
			if (!this.date) {
				return null
			}
			let newDate = new Date(this.date)
			newDate.setDate(newDate.getDate() + 29)
			return newDate
		},
		info() {
			if (!this.dateOfRun) {
				return null
			}
			return {
				dateOfVisarun: this.dateOfRun,
				daysLeft: this.calcDays(),
			}
		},
	},
	methods: {
		calcDays() {
			this.$gtag.event('calcDays', { method: 'Google' })
			var date1 = new Date()
			var date2 = new Date(this.dateOfRun)
			var timeDiff = date2.getTime() - date1.getTime()
			var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))
			return diffDays
		},
		formatDate(date, addDays = 0, addMonths = 1, userFriendly = false) {
			date.setDate(date.getDate() + addDays)
			date.setMonth(date.getMonth() + addMonths)

			let d = `${date.getDate()}`.padStart(2, '0'),
				m = `${date.getMonth()}`.padStart(2, '0')

			if (userFriendly) {
				m = this.months[date.getMonth()]
				let wd = this.days[date.getDay()]
				return `${wd}, ${d} ${m} ${date.getFullYear()}`
			}
			return `${d}.${m}.${date.getFullYear()}`
		},
	},
}
</script>
<style lang="scss">
.calculator__wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;

	#calculator {
		max-width: 300px;
	}

	label {
		width: fit-content;
		white-space: nowrap;
		margin-right: 20px;
	}
}

@media screen and (max-width: 676px) {
	.calculator__wrapper {
		label {
			width: 300px;
			margin: 0;
			text-align: left;
		}
	}
}

:root {
	/*General*/
	--dp-font-family: -apple-system, blinkmacsystemfont, 'Oswald', roboto, oxygen, ubuntu, cantarell, 'Open Sans', 'Helvetica Neue',
		sans-serif !important;
}
</style>
