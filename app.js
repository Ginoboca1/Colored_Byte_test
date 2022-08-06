const swiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  keyboard: true,
  mousewheel: true,
});

let button = document.getElementById("button");

button.addEventListener("click", function () {
  if (button.classList.contains("button")) {
    button.classList.remove("button");
    button.classList.add("button-heart-active");
  } else {
    button.classList.remove("button-heart-active");
    button.classList.add("button");
  }
});




/* problem with the location of the fetching images into the html*/

const requestUrl = "https://picsum.photos/v2/list?page=2&limit=100";

/*
const getImages = async () => {
  const response = await fetch(requestUrl);
  const data = await response.json();
  const arrayImg = data;
  const newArray = arrayImg.slice(1, 4);

  newArray.map((e) => {
    const url = e.url;

    const image = `
		<div class = "swiper-slide">
		  <div class = "image__wrapper">
		      <img src = "${url}" alt = "" >
		   </div>  
	    </div>
		`
    document.getElementById("swiperContainer").innerHTML += image;
  });
};
*/
