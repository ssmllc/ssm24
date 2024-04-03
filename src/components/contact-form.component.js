import { gsap } from "gsap";
import { getElement, getAllElements } from "./utils";

const ContactForm = () => {
  const formInputFields = getAllElements(".field input[type='text'");
  formInputFields.forEach(textInput => {
    textInput.addEventListener('focus', (event) => {
      if (textInput.value === '') {
        // console.log('textInput focus', textInput.parentNode);
        textInput.parentNode.querySelector('.field-label').setAttribute('data-active', 'true');
        textInput.parentNode.setAttribute('data-active', 'true');
      }
    });

    textInput.addEventListener('blur', (event) => {
      if (textInput.value === '') {
        // console.log('textInput blur', textInput.value);
        textInput.parentNode.querySelector('.field-label').setAttribute('data-active', 'false');
        textInput.parentNode.setAttribute('data-active', 'false');
      }
    });
  });
}

export default ContactForm;