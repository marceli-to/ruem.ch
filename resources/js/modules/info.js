(function () {

  const classes = {
    hidden: 'hidden',
  };

  const states = {
    visible: 'is-visible',
  };

  const selectors = {
    btn: '[data-info-btn]',
    wrapper: '[data-info-wrapper]',
    content: '[data-info-content]',
    iconShow: '[data-info-icon-show]',
    iconHide: '[data-info-icon-hide]',
  };

  const init = () => {
    const btn = document.querySelector(selectors.btn);
    btn.addEventListener('click', toggle);
  };

  const toggle = function(){

    // toggle state visible on wrapper
    const wrapper = document.querySelector(selectors.wrapper);
    wrapper.classList.toggle(states.visible);

    const content = document.querySelector(selectors.content);
    content.classList.toggle(classes.hidden);

    // if info has class hidden, show the show icon and hide the hide icon
    // if info does not have class hidden, show the hide icon and hide the show icon
    const iconShow = document.querySelector(selectors.iconShow);
    const iconHide = document.querySelector(selectors.iconHide);
    if (info.classList.contains(classes.hidden)) {
      iconShow.classList.remove(classes.hidden);
      iconHide.classList.add(classes.hidden);
    } 
    else {
      iconShow.classList.add(classes.hidden);
      iconHide.classList.remove(classes.hidden);
    }
  };

  // init on document.ready
  document.addEventListener('DOMContentLoaded', init);
  
})();