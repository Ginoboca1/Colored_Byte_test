const swiper = new Swiper('.swiper', {
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	keyboard: true,
	mousewheel: true,

})



const getImages = async() =>{
	const response = await fetch('https://picsum.photos/v2/list?page=2&limit=100')
    const data = await response.json()
	const img = document.getElementById('img').src = data.url;
}










