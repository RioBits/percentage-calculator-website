const xofy = document.getElementById('xofy')
// const fromxtoy = document.getElementById('fromxtoy')

xofy.addEventListener('click', () => {
  const num1 = prompt('x')
  const num2 = prompt('y')

  const result = +num2 * 0.01 * +num1

  alert(result)
})
