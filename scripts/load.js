document.addEventListener('DOMContentLoaded',
  function(){
    console.log('DOM Tree has been loaded.');
  }
);
window.addEventListener('load',
  function(){
    console.log('All contens have been loaded');
    // document.querySelector("#loading").style.cssText = 'display:none !important';
    document.querySelector("#loading").classList.add("-visible");

  }
);
