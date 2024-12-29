<template>
	<div class="accordion" id="accordionMain">
		<div v-for="(item, index) in items" :key="index" class="accordion-item">
			<h2 class="accordion-header">
				<button
					class="accordion-button"
					type="button"
					data-bs-toggle="collapse"
					aria-expanded="false"
					:data-bs-target="'#collapse_' + index"
					:aria-controls="'collapse_' + index"
				>
					<h2 class="h6 fw-bold">{{ item.title }}</h2>
				</button>
			</h2>
			<div :id="'collapse_' + index" class="accordion-collapse collapse" data-bs-parent="#accordionMain">
				<div class="accordion-body" v-html="item.content"></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Accordion',
	data() {
		return {
			items: [
				{
					title: 'Сколько можно находится в Сербии без визы?',
					content: `
						<div class="fw-bold">Ответ: 30 дней</div>
                        <div class="mt-1">
                            Согласно закону
                            <a href="https://serbia.mid.ru/ru/consular-services/consulate/dlya_vyezzhayushchikh_v_serbiyu/" target="_blank" rel="noopener noreferrer">
                                "ОБ УСЛОВИЯХ ВЗАИМНЫХ ПОЕЗДОК ГРАЖДАН РОССИИ И СЕРБИИ"
                            </a>
                            граждане РФ могут находится в Сербии не имея визы в течении 30 дней.
                        </div>`,
				},
				{
					title: 'Визран из Белграда',
					content: `
                        <div class="fw-bold">
                            Ответ: Проверенный перевозчик RARE TRANSFER
                            <a href="https://t.me/VVValensiya?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%AF%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20visarun.site.%20%D0%9C%D0%BD%D0%B5%20%D0%BD%D1%83%D0%B6%D0%BD%D0%BE%20%D0%BD%D0%B0%20%D0%B2%D0%B8%D0%B7%D1%80%D0%B0%D0%BD,%20%D0%BF%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D0%B6%D0%B8%D1%82%D0%B5%20%D0%B4%D0%B0%D1%82%D1%8B%20%D0%B8%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F" target="_blank" rel="noopener noreferrer">
                                Записаться на визран
                            </a> | 
                            <a href="https://t.me/vizaran_by_rare" target="_blank" rel="noopener noreferrer">
                                ТГ Группа
                            </a>
                        </div>
                    `,
				},
				{
					title: 'Визран из Ниша',
					content: `
                        <div class="fw-bold">
                            Ответ:
                            <a href="https://t.me/generatortransport?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%AF%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20visarun.site.%20%D0%9C%D0%BD%D0%B5%20%D0%BD%D1%83%D0%B6%D0%BD%D0%BE%20%D0%BD%D0%B0%20%D0%B2%D0%B8%D0%B7%D1%80%D0%B0%D0%BD,%20%D0%BF%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D0%B6%D0%B8%D1%82%D0%B5%20%D0%B4%D0%B0%D1%82%D1%8B%20%D0%B8%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F" target="_blank" rel="noopener noreferrer">
                                Проверенный перевозчик Balkan Transport
                            </a>
                        </div>
                        <div class="mt-1">
                            Визран из Ниша осуществляется через Болгарскую границу.
                            <br><br>
                            Время в пути составляет от 60 до 90 минут в одну сторону. Границу переходите пешком в любое свободное окно. Пешие туристы идут без очереди.
                            <br><br>
                            После прохода Сербской границе нужно пройти 10-20 метров в сторону Болгарской границы, затем свернуть налево и перейти на другую сторону по траве. (Для визранщиков там даже опустили цепочку)
                            После проходим Сербскую границу обратно. На Болгарскую границу идти не нужно.
                        </div
                    `,
				},
			],
		}
	},
	methods: {},
}
</script>
<style scoped lang="scss">
#accordionMain {
	font-family: 'Roboto', inherit, sans-serif;
}
</style>
