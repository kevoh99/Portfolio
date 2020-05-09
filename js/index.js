const navLinks = document.querySelectorAll('.nav-link')
const navToggle = document.querySelector('.menu-btn')

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.checked = false
  })
})
