window.addEventListener('DOMContentLoaded', () => {

    const boxContent = document.querySelectorAll('.box'),
    navItemActive = document.querySelectorAll('.nav-item'),
    parentNavitem = document.querySelector('.nav');
    
    //  ! Tabs

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
    });

    // ! Modal

    const modal = document.querySelector('.modal'),
    openModalBtn = document.querySelector('.open-modal'),
    closeModalBnt = document.querySelector('.close-modal')

    function showModal() {
        modal.classList.remove('hide'),
        modal.classList.remove('fades')
        modal.classList.add('show')
        modal.classList.add('fade')
        document.body.style.overflow = 'hidden';
    }
    function hideModal() {
        modal.classList.remove('show'),
        modal.classList.remove('fade')
        modal.classList.add('hide'),
        modal.classList.add('fades')
        document.body.style.overflow = '';
    }

    openModalBtn.addEventListener('click', showModal);
    closeModalBnt.addEventListener('click', hideModal);
    
    modal.addEventListener('click', (event) => {
        if (event.target === modal){
            hideModal()
        }
    })
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape' && modal.classList.contains('show')) {
            hideModal()
        }
    })

    setTimeout(showModal, 15000)

    const loader = document.querySelector('.loader-box');

    setTimeout(() => {
        loader.style.display = 'none'
    }, 10000);

})