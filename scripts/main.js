//start-overlay hiding
document.querySelector('#start-overlay-text h2').classList.add('hide');
document.querySelector('#start-overlay-text h3').classList.add('hide');
document.getElementById('body').classList.add('not-overflow');
document.getElementById('start-overlay').classList.add('hide');
document.getElementById('start-overlay').addEventListener('transitionend', e => {
    document.getElementById('body').classList.remove('not-overflow');
    document.getElementById('start-overlay').remove();
});

//Catch clicks in menu > li > a
const menu_a_selectors = document.getElementById('menu').querySelectorAll('ul li a')
menu_a_selectors.forEach(elem => {
    elem.addEventListener('click', e => {

        e.preventDefault();

        //selectors
        const container_selector = document.getElementById('container');
        const clicked_element_selector = document.querySelector(e.target.getAttribute('href'));



        menu_a_selectors.forEach(elem => {
            //logic to disable background of buttons
            elem.classList.remove('checked');

            //logic to hide that one block which is not shown
            if (document.querySelector(elem.getAttribute('href')) && elem.getAttribute('href') !== e.target.getAttribute('href'))
                document.querySelector(elem.getAttribute('href')).classList.remove('to-right');
        });

        //logic to enable background of buttons
        if (clicked_element_selector)
            e.target.classList.add('checked');


        //logic to expand of that one block which is checked (forever only one)
        if (clicked_element_selector) {
            container_selector.classList.add('to-left');
            clicked_element_selector.classList.add('to-right');
        }
        else {
            //logic if clicked button home
            container_selector.classList.remove('to-left');

        }

    })
})

//mobile menu actions
const mobile_menu_sel = document.getElementById('mobile-menu').querySelectorAll('ul li a');

mobile_menu_sel.forEach(elem => {
    elem.addEventListener('click', e => {
        mobile_menu_sel.forEach(elem => {
            elem.classList.remove('checked');
        });
        e.target.classList.add('checked');
        document.getElementById('overlay').classList.remove('show');
        document.getElementById('body').classList.remove('not-overflow');
        document.getElementById('mobile-menu').classList.remove('open');
    });
})

//click on sandwitch
document.getElementById('sandwitch').addEventListener('click', e => {
    document.getElementById('overlay').classList.add('show');
    document.getElementById('body').classList.add('not-overflow');
    document.getElementById('mobile-menu').classList.add('open');
})

//click on close sandwitch
document.getElementById('mobile-menu-close').addEventListener('click', e => {
    document.getElementById('overlay').classList.remove('show');
    document.getElementById('body').classList.remove('not-overflow');
    document.getElementById('mobile-menu').classList.remove('open');
})

//Print my age
document.getElementById('b-year').appendChild(document.createTextNode((birthDate => { return Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10) })('1989-11-06')));
