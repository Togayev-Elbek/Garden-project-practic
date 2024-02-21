window.addEventListener('DOMContentLoaded', () => {

    const boxContent = document.querySelectorAll('.box'),
    navItemActive = document.querySelectorAll('.nav-item'),
    parentNavitem = document.querySelector('.nav');
    

    function hideBoxContent() {
        boxContent.forEach(item => {
            item.classList.remove('show')
            item.classList.add('hide')
        })
        navItemActive.forEach(item => {
            item.classList.remove('nav-item__active')
        })
    };
    function showBoxContent(i = 0){
       boxContent[i].classList.remove('hide');
       boxContent[i].classList.add('show');
       boxContent[i].classList.add('fade')
        
       navItemActive[i].classList.add('nav-item__active')
    };

    hideBoxContent();
    showBoxContent();

    parentNavitem.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('nav-item')) {
            navItemActive.forEach((item, index) => {
                if (event.target === item) {
                    hideBoxContent();
                    showBoxContent(index);
                }
            })
        }
    })


})