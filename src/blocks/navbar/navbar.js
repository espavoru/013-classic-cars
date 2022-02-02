document.querySelector('.navbar__menu-btn').addEventListener('click', () => {
  document.querySelectorAll('.target').forEach(item => {
    item.classList.toggle('change')
  })
})

document.querySelectorAll('.page__wrapper').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.target').forEach(item => {
      item.classList.remove('change')
    })
  })
})
