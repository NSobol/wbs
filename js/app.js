'use strict';
document.addEventListener('DOMContentLoaded', () => {
  /*Переключение табов*/
  const tabs = document.querySelectorAll('.tab');
  let arrayTabs = Array.from(tabs);
  const contents = document.querySelectorAll('.tab-content');
  let arrayContents = Array.from(contents);
  let tabIndex = arrayTabs.findIndex((elem) =>
    elem.classList.contains('tab-active')
  );

  function change(tabIndex) {
    arrayTabs[tabIndex].classList.toggle('tab-active');
    arrayContents[tabIndex].classList.toggle('tab-content-active');
  }

  function getTab(index) {
    change(tabIndex);
    tabIndex = index;
    change(tabIndex);
  }

  const ul = document.querySelector('.menu-tabs');
  ul.addEventListener('click', (event) => {
    const li = event.target.closest('li');
    let index = arrayTabs.findIndex((elem) => elem === li);
    if (li) {
      getTab(index);
    }
  });

  /*Меню футера*/
  const footerMenu = document.querySelector('.footer-top-right-menu');
  const footerMenuList = document.querySelectorAll(
    '.footer-top-right-menu-item'
  );
  let activMenu;
  footerMenu.addEventListener('click', (e) => {
    let li = e.target.closest('li');

    if (activMenu === li) {
      activMenu.classList.toggle('activ');
    } else {
      li.classList.add('activ');
      activMenu?.classList?.remove('activ');
      activMenu = li;
    }
  });

  /*Селект-меню первого блока*/
  const select = document.querySelector('#select');
  const btnSelect = document.querySelector('.treatment-online-reason-select');
  const selectMenu = select.querySelector('.treatment-online-reason-menu');
  select.addEventListener('click', (event) => {
    btnSelect.classList.toggle('treatment-online-reason-select-active');
    selectMenu.classList.toggle('treatment-online-reason-menu-active');
  });
});
