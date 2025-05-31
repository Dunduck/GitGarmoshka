let faqItems = document.querySelectorAll('.faq-item')

faqItems.forEach(element => {
    element.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('opened')
    })
})
