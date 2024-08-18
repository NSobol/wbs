'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  let arrayTabs = Array.from(tabs);
  const contents = document.querySelectorAll('.tab-content');
  let arrayContents = Array.from(contents);

  console.log(tabs);
  console.log(contents);

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
    console.log(tabIndex);
  }

  const ul = document.querySelector('.menu-tabs');
  ul.addEventListener('click', (event) => {
    const li = event.target.closest('li');
    let index = arrayTabs.findIndex((elem) => elem === li);
    if (li) {
      getTab(index);
    }
  });
});
