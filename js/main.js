window.addEventListener("scroll", function(){
	const header = document.querySelector(".header");
	header.classList.toggle("stiky", this.window.scrollY > 0);
});

const burger = document.querySelector('.header-content__menu-burger');
const navLinks = document.querySelector('.header-content__menu-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})

const defaultSelect = () => {
	const element = document.querySelector(".form-ordering__select");
	const choices = new Choices(element, {
		searchEnabled: false,
		itemSelectText: '',
	});
};

defaultSelect();