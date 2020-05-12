import $ from 'jquery';
/* Scripts for css grid dashboard */

$(document).ready(() => {
  addResizeListeners();
  setSidenavListeners();
  setUserDropdownListener();
  setMenuClickListener();
  setSidenavCloseListener();
});

// Set constants and grab needed elements


function toggleClassDrop(el, className) {
  if (el.hasClass(className)) {
    el.removeClass(className);
  } else {
    el.addClass(className);
  }
}

// User avatar dropdown functionality
function setUserDropdownListener() {
  const userAvatar = $('.header__avatar');

  userAvatar.on('click', function(e) {
    const dropdown = $(this).children('.dropdown');
    toggleClassDrop(dropdown, 'dropdown--active');
  });
}

// Sidenav list sliding functionality
function setSidenavListeners() {
  const subHeadings = $('.navList__subheading'); console.log('subHeadings: ', subHeadings);
  const SUBHEADING_OPEN_CLASS = 'navList__subheading--open';
  const SUBLIST_HIDDEN_CLASS = 'subList--hidden';

  subHeadings.each((i, subHeadingEl) => {
    $(subHeadingEl).on('click', (e) => {
      const subListEl = $(subHeadingEl).siblings();

      // Add/remove selected styles to list category heading
      if (subHeadingEl) {
        toggleClassDrop($(subHeadingEl), SUBHEADING_OPEN_CLASS);
      }

      // Reveal/hide the sublist
      if (subListEl && subListEl.length === 1) {
        toggleClassDrop($(subListEl), SUBLIST_HIDDEN_CLASS);
      }
    });
  });
}

function toggleClassMenu(el, className) {
  if (el.hasClass(className)) {
    el.removeClass(className);
  } else {
    el.addClass(className);
  }
}

// If user opens the menu and then expands the viewport from mobile size without closing the menu,
// make sure scrolling is enabled again and that sidenav active class is removed
function addResizeListeners() {
  var sidenavEl = $('.sidenav');
  var gridEl = $('.grid');
  var SIDENAV_ACTIVE_CLASS = 'sidenav--active';
  var GRID_NO_SCROLL_CLASS = 'grid--noscroll';
  $(window).resize(function(e) {
    const width = window.innerWidth; console.log('width: ', width);

    if (width > 750) {
      sidenavEl.removeClass(SIDENAV_ACTIVE_CLASS);
      gridEl.removeClass(GRID_NO_SCROLL_CLASS);
    }
  });
}

// Menu open sidenav icon, shown only on mobile
function setMenuClickListener() {
  var sidenavEl = $('.sidenav');
  var gridEl = $('.grid');
  var SIDENAV_ACTIVE_CLASS = 'sidenav--active';
  var GRID_NO_SCROLL_CLASS = 'grid--noscroll';
  $('.header__menu').on('click', function(e) { console.log('clicked menu icon');
    toggleClassMenu(sidenavEl, SIDENAV_ACTIVE_CLASS);
    toggleClassMenu(gridEl, GRID_NO_SCROLL_CLASS);
  });
}

// Sidenav close icon
function setSidenavCloseListener() {
  var sidenavEl = $('.sidenav');
  var gridEl = $('.grid');
  var SIDENAV_ACTIVE_CLASS = 'sidenav--active';
  var GRID_NO_SCROLL_CLASS = 'grid--noscroll';
  $('.sidenav__brand-close').on('click', function(e) {
    toggleClassMenu(sidenavEl, SIDENAV_ACTIVE_CLASS);
    toggleClassMenu(gridEl, GRID_NO_SCROLL_CLASS);
  });
}