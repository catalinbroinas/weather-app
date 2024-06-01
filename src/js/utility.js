import { format, parseISO } from 'date-fns';

function DomUtility() {
    // Add ripple effect to buttons
    const rippleEffect = (btn) => {
        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        btn.appendChild(ripple);

        // Get position of X
        const x = btn.clientX - btn.offsetLeft;

        // Get position of Y 
        const y = btn.clientY - btn.offsetTop;

        // Position the span element 
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        // Remove span after 0.3s 
        setTimeout(() => {
            ripple.remove();
        }, 300);
    };

    const createDOMElement = ({
        elementTag,
        elementClass,
        elementId,
        elementText,
        elementAtrType,
        elementAtrValue,
        clickHandler
    }) => {
        const element = document.createElement(elementTag);

        if (elementClass) {
            elementClass.forEach(className => element.classList.add(className));
        }

        if (elementId) {
            element.setAttribute('id', elementId);
        }

        if (elementAtrType) {
            element.setAttribute(elementAtrType, elementAtrValue);
        }

        if (elementText) {
            element.textContent = elementText;
        }

        if (clickHandler) {
            element.addEventListener('click', clickHandler);
        }

        return element;
    };

    // Create an alert element with an icon and text
    const createAlert = ({ text, mdiIcon }) => {
        const alert = createDOMElement({
            elementTag: 'div',
            elementId: 'alert-weather',
            elementClass: ['alert', 'alert-danger']
        });
        const alertIcon = createDOMElement({
            elementTag: 'i',
            elementClass: ['mdi', mdiIcon, 'alert-icon']
        });
        const alertText = createDOMElement({
            elementTag: 'span',
            elementClass: ['alert-text'],
            elementText: text
        });

        alert.appendChild(alertIcon);
        alert.appendChild(alertText);

        return alert;
    };

    // Convert a date string to a formatted date string in the template 'EEEE dd MMMM yyyy | HH:mm'
    const formatDate = (dateString) => {
        const date = parseISO(dateString);
        return format(date, 'EEEE dd MMMM yyyy | HH:mm');
    };

    return {
        rippleEffect,
        formatDate,
        createDOMElement,
        createAlert
    };
}

function FormValidator(formId) {
    const form = document.querySelector(`#${formId}`);

    const validateField = (fieldId) => {
        const field = form.querySelector(`#${fieldId}`);
        const spanError = form.querySelector(`#${fieldId} ~ span.error`);

        if (field.validity.valid) {
            spanError.textContent = '';
            field.classList.remove('invalid');
            field.classList.add('valid');
            spanError.classList.remove('active');
        } else {
            field.classList.remove('valid');
            field.classList.add('invalid');
            spanError.classList.add('active');

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

    const checkValidate = () => {
        return form.checkValidity();
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        setTimeout(validateForm, 500);
    };

    const clearForm = () => {
        form.querySelectorAll('input').forEach(input => {
            input.classList.remove('valid');
            input.classList.remove('invalid');
        });
        form.querySelector('span.error').classList.remove('active');
        form.querySelector('span.error').textContent = '';
    };

    const addEvents = () => {
        form.addEventListener('submit', onSubmitHandler);
        form.addEventListener('input', clearForm);
    };

    return { addEvents, checkValidate };
}

export {
    DomUtility,
    FormValidator
};