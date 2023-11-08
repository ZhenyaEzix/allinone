const node_for_click = document.getElementById('for_click_all')
function find_edit(){
document.getElementsByClassName('block1')[0].innerText = 'УФМС РОССИИ ПО ГОР. Мухосранск'
document.getElementsByClassName('block')[0].innerText = 'ПО РАЙОНУ Шпионов'
document.getElementsByClassName('block2')[0].innerText = '00.00.0000 '
document.getElementsByClassName('block4')[0].innerText = 'Bond '
document.getElementsByClassName('block5')[0].innerText = 'James '
document.getElementsByClassName('block6')[0].innerText = 'Borisov'
document.getElementsByClassName('block7')[0].innerText = 'male '
document.getElementsByClassName('block8')[0].innerText = '0.00.0000 '
}
node_for_click.addEventListener("click",find_edit)