const selectElement = (Element) => document.querySelector(Element);

selectElement('.mobile-menu').addEventListener('click', ()=>{
    selectElement('header').classList.toggle('active');
})

