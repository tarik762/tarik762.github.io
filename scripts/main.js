//Catch clicks in menu > li > a
const menu_a_selectors = document.getElementById('menu').querySelectorAll('ul li a')
menu_a_selectors.forEach(elem => elem.addEventListener('click', e => {

    //selectors
    const container_selector = document.getElementById('container');
    const clicked_element_selector = document.querySelector(e.target.getAttribute('href'));

    //logic to change background f buttons


    //logic to hide that one block which is shown


    //logic to expand of that one block which is checked (forever only one)
    container_selector.classList.add('to-left')
    clicked_element_selector.classList.add('to-right')

}))


