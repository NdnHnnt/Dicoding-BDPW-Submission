const toggle = document.getElementById('toggleButton');
const list = document.getElementById('navlist');

toggle.addEventListener('click', () => {
  list.classList.toggle('active');
})
