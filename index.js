document.addEventListener('DOMContentLoaded', () => {
    const refs = {
        modalOverlay: document.querySelector('.modal-overlay'),
        orderButton: document.querySelector('.order-button'),
        closeModalButton: document.querySelector('.modal-close')
    }

    const closeModal = () => {
        refs.modalOverlay.classList.remove('is-open')
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
})
