/*
В этом задании вам предстоит разработать интерактивный слайдер, который позволит пользователю переключаться между 
созданными нейросетью изображениями веб-технологий.
Изучите файл index.html. В этом задании надо будет работать с секцией "Урок 6". Разметка уже написано - 
нужно добавить только js-код.

Задание:
- Добавьте функциональность кнопкам "prev" и "next", чтобы при их нажатии изображение в теге `<img>` менялось на 
предыдущее или следующее
- Обеспечьте циклическое переключение изображений: после последнего изображения следует первое, и наоборот.

Адреса изображений находятся в массиве WEB_TECH_IMAGE
Первоначально отображается первое изображение из WEB_TECH_IMAGE

🧙‍♂️ Совет: обратите внимание на управление индексом текущего изображения — это ключ к успешному переключению изображений.
*/

const WEB_TECH_IMAGES = [
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/32f74d50-68d0-46aa-b035-7b3a5300d2c1_js-magic-logo.jpg',
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/c8a1f4a6-1337-4899-bdfd-a8c9c7bb806a_css-magic-logo.jpg',
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/784380b9-6937-42a6-bdfe-869835820234_html-magic-logo.jpg',
]

let currentIndex = 0; // текущий индекс


const imgElement = document.getElementById('web-tech-image');  //находим индекс элемента по ID
function updateImage() {
  imgElement.src = WEB_TECH_IMAGES[currentIndex]; // Обновляем изображение
}

const prevBtn = document.getElementById('prev-button'); //находим индекс элемента по ID
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--; // Переход к предыдущему изображению
  } else {
    currentIndex = WEB_TECH_IMAGES.length - 1; // Если текущее изображение первое, переходим к последнему
  }
  updateImage();
});

const nextBtn = document.getElementById('next-button'); // находим индекс элемента по ID
nextBtn.addEventListener('click', () => {
  if (currentIndex < WEB_TECH_IMAGES.length - 1) {
    currentIndex++; // Переход к следующему изображению
  } else {
    currentIndex = 0; // Если текущее изображение последнее, переходим к первому
  }
  updateImage();
});
