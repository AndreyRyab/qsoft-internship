//собираем все пункты меню
const menuItems = Array.from(document.querySelectorAll(".menu__item"));
//собираем все картинки
const bannerItems = Array.from(document.querySelectorAll(".banner__container"));
//начальный массив объектов {картинка + пункт меню}
let items = [];

//создаём массив объектов из картинок и пунктов меню
const makeItemsArr = (items) => {
  for (let i = 0; i < bannerItems.length; i++) {
    items.push({ img: bannerItems[i], link: menuItems[i] });
  }
};

makeItemsArr(items);

//устанавливаем слушатели по ховеру
items.forEach((i) => i.link.addEventListener("mouseover", () => enableItem(i)));

//активируем объект
const enableItem = (item) => {
  disableAll(items);
  item.link.classList.add("menu__item_active");
  item.img.classList.add("banner__container_visible");
};

//отключаем объект
const disableAll = (items) => {
  items.forEach((i) => {
    i.link.classList.remove("menu__item_active");
    i.img.classList.remove("banner__container_visible");
  });
};
