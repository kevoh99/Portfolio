const navToggle = document.querySelector('.toggler')
const navLinks = document.querySelectorAll('.menu-icon')

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open')
})

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open')
  })
})
