// LJFC mockup — small interactions only.
// Mobile nav toggle + chip filter visual state.

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('[data-hamburger]');
  const drawer = document.querySelector('[data-drawer]');
  if (burger && drawer) {
    burger.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // chip filter (visual only)
  document.querySelectorAll('[data-chips]').forEach(group => {
    group.querySelectorAll('.chip').forEach(c => {
      c.addEventListener('click', e => {
        e.preventDefault();
        group.querySelectorAll('.chip').forEach(x => x.classList.remove('is-active'));
        c.classList.add('is-active');
      });
    });
  });
});
