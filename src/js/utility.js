function FormValidator(formId) {
    const form = document.querySelector(`#${formId}`);

    const validateField = (fieldId) => {
        const field = form.querySelector(`#${fieldId}`);
        const spanError = form.querySelector(`#${fieldId} ~ span.error`);

        if (field.validity.valid) {
            spanError.textContent = '';
            spanError.classList.toggle('active');
        } else {
            spanError.classList.toggle('active');

            if (field.validity.valueMissing) {
                spanError.textContent = 'This field is required.';
            } else if (field.validity.typeMismatch) {
                spanError.textContent = `This field has been filled in incorrectly. ${field.validationMessage}`;
            } else if (field.validity.tooShort) {
                spanError.textContent = `This field has been filled in incorrectly. ${field.validationMessage}`;
            } else if (field.validity.tooLong) {
                spanError.textContent = `This field has been filled in incorrectly. ${field.validationMessage}`;
            } else if (field.validity.patternMismatch) {
                spanError.textContent = `This field was not filled in correctly. 
                Please enter a city name. ${field.validationMessage}`;
            }
        }
    };

    const validateForm = () => {
        form.querySelectorAll('input').forEach(input => {
            validateField(input.id);
        });
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        validateForm();
    };

    const addEvents = () => {
        form.addEventListener('submit', onSubmitHandler);
    }

    return { addEvents };
}

export { FormValidator };