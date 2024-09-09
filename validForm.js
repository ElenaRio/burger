const modalFormDostavka = document.getElementById('order-form');
const closeModalBtn = modalFormDostavka.querySelector('.modal-btn__close');
const deliveryForm = document.getElementById('delivery');
const addressFields = document.getElementById('address-fields');
const radioButtons = deliveryForm.querySelectorAll('input[name="format-dostavku"]');




deliveryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const name = deliveryForm.elements['name'].value.trim();
    const phone = deliveryForm.elements['phone'].value.trim();
    const address = deliveryForm.elements['address'].value.trim();
    const deliveryType = deliveryForm.elements['format-dostavku'].value;



    const phoneRegex = /^\+380\d{9}$/;

    if (!name || !phone || (deliveryType === 'delivery' && !address)) {
        alert("Будь ласка, заповніть усі обов'язкові поля.");
        return;
    }

    if (!phoneRegex.test(phone)) {
        alert('Будь ласка, введіть номер телефону у форматі +380XXXXXXXXX.');
        return;
    }

    alert(`${name}, 'дякуємо за Ваше замовлення'`);
    console.log('Форму успішно відправлено');
    deliveryForm.reset();
    modalFormDostavka.classList.remove('visible');
});


radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
        if (radio.value === 'delivery') {
            addressFields.classList.remove('modal-form__fieldset_hiden');
            addressFields.querySelector('input[name="address"]').required = true;
        } else {
            addressFields.classList.add('modal-form__fieldset_hiden');
            addressFields.querySelector('input[name="address"]').required = false;
        }
    });
});


