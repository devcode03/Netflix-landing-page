const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content Item
function selectItem(e) {
  removeBorder();
  removeShow();
  removeCurrentTab();
  // Add border to current tab
  this.classList.add('tab-border');
  this.classList.add('current-tab');

  // grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //ADd show class
  tabContentItem.classList.add('show');
}

// Remove border
function removeBorder(e) {
  tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeCurrentTab(e) {
  tabItems.forEach(item => item.classList.remove('current-tab'));
}

//Remove Show
function removeShow(e) {
  tabContentItems.forEach(item => item.classList.remove('show'));
}

// Listen for Tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));
