import PhotoSwipeLightbox from './photoswipe/photoswipe-lightbox.esm.min.js'
const lightbox = new PhotoSwipeLightbox({
	gallery: '.gallery',
	children: 'a',
	pswpModule: () => import('./photoswipe/photoswipe.esm.min.js'),
})
lightbox.on('uiRegister', function () {
	lightbox.pswp.ui.registerElement({
		name: 'custom-caption',
		order: 9,
		isButton: false,
		appendTo: 'root',
		html: 'Caption text',
		onInit: (el, pswp) => {
			lightbox.pswp.on('change', () => {
				const currSlideElement = lightbox.pswp.currSlide.data.element
				if (currSlideElement) {
					el.innerHTML = currSlideElement.querySelector('img').getAttribute('alt')
					const img = el.parentNode.querySelector('.pswp__img')
					img.style.marginBottom = '32px'
				}
			})
		},
	})
})
lightbox.init()
