
function readyDom() {
	alert('DOM загружен');

	// изображение ещё не загружено, так что размер будет 0x0
	alert(`Размер изображения: ${img.offsetWidth}x${img.offsetHeight}`);
}



document.addEventListener("DOMContentLoaded", readyDom);

window.onload = function () {
	alert('Страница загружена');

	// к этому моменту страница загружена
	alert(`Размер изображения: ${img.offsetWidth}x${img.offsetHeight}`);
};