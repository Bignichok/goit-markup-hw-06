document.addEventListener('DOMContentLoaded', () => {
    const refs = {
        modalOverlay: document.querySelector('.modal-overlay'),
        orderButton: document.querySelector('.order-button'),
        closeModalButton: document.querySelector('.modal-close'),
        closeMenuButton: document.querySelector('.menu-close'),
        mobileMenu: document.querySelector('.mobile-menu'),
        menuButton: document.querySelector('.menu-button')
    }

    const closeModal = () => {
        refs.modalOverlay.classList.remove('is-open')
    }

    const closeMenu = () => {
        refs.mobileMenu.classList.remove('is-open')
    }

    refs.orderButton.addEventListener('click', () => {
        refs.modalOverlay.classList.add('is-open')
    })

    refs.closeModalButton.addEventListener('click', () => {
        closeModal()
    })

    refs.modalOverlay.addEventListener('click', () => {
        closeModal()
    })

    refs.menuButton.addEventListener('click', () => {
        refs.mobileMenu.classList.add('is-open')
    })

    refs.closeMenuButton.addEventListener('click', () => {
        closeMenu()
    })
})
