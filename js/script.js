const closeMenu1 = document.getElementById('close1')
const closeMenu2 = document.getElementById('close2')
const closeMenu3 = document.getElementById('close3')
const checkbox = document.getElementById('side-menu')

closeMenu1.addEventListener('click', ()=> {
    checkbox.checked = false
})
closeMenu2.addEventListener('click', ()=> {
    checkbox.checked = false
})
closeMenu3.addEventListener('click', ()=> {
    checkbox.checked = false
})