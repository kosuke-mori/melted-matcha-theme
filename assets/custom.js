/*
* Broadcast Theme
*
* Use this file to add custom Javascript to Broadcast.  Keeping your custom
* Javascript in this fill will make it easier to update Broadcast. In order
* to use this file you will need to open layout/theme.liquid and uncomment
* the custom.js script import line near the bottom of the file.
*/


(function() {
  // Add custom code below this line



document.addEventListener("DOMContentLoaded", function () {
  function toggleAccordion(toggle, panel) {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    const chevron = toggle.querySelector(".chevron");

    if (isExpanded) {
      toggle.setAttribute("aria-expanded", "false");
      panel.style.maxHeight = null;
      setTimeout(() => { panel.hidden = true; }, 300);
      if (chevron) chevron.textContent = "+";
    } else {
      toggle.setAttribute("aria-expanded", "true");
      panel.hidden = false;

      requestAnimationFrame(() => {
        if (!panel.classList.contains('accordion-panel--main')) {
          // For main menus, animate to scrollHeight
          panel.style.maxHeight = panel.scrollHeight + "px";
        } else {
          // For submenus, allow natural height to push layout
          panel.style.maxHeight = 'none';
        }
      });

      if (chevron) chevron.textContent = "–";
    }
  }

  function setupAccordion(root) {
    const toggles = root.querySelectorAll(".accordion-toggle");
    toggles.forEach((toggle) => {
      const panel = toggle.nextElementSibling;
      panel.hidden = true;
      panel.style.maxHeight = null;
      toggle.setAttribute("aria-expanded", "false");

      toggle.addEventListener("click", function () {
        toggleAccordion(toggle, panel);
      });
    });
  }

  setupAccordion(document);
});






  // ^^ Keep your scripts inside this IIFE function call to
  // avoid leaking your variables into the global scope.
})();
