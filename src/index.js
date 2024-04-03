import Logo from "./components/logo.component";
import ProjectsSlider from "./components/projects-slider.component";
import Navigation from "./components/navigation.component";
import ContactForm from "./components/contact-form.component";
import { getAllElements, getElement } from "./components/utils";
import "./scss/styles.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  smooth: 1,
});

(() => {

  Navigation();
  ProjectsSlider();
  Logo();
  ContactForm();

  gsap.to(".ssm-services--header", {
    scrollTrigger: {
      trigger: ".ssm-services",
      // markers: true,
      start: 'top 80%',
      onEnter: () => { getElement('.ssm-services').setAttribute('data-active', 'true') },
    },
  });

  let mm = gsap.matchMedia();

  mm.add("(min-width: 1280px)", () => {
    gsap.to(".ssm-parallax", {
      scrollTrigger: {
        trigger: ".ssm-parallax",
        // markers: true,
        scrub: true,
        start: 'top bottom',
        ease: 'power1.easeout',
      },
      duration: 5,
      yPercent: -20,
    });
  });

  getElement('.ssm-exit--menu').addEventListener('click', () => {
    const isOpen = getElement('.ssm-exit--menu').getAttribute('data-active');

    if (isOpen === 'false') {
      gsap.to(getElement('.ssm-navigation'), {
        opacity: 1,
        duration: 1,
        ease: 'power1.out'
      });
      getElement('.ssm-exit--menu_label').innerText = "Close";
      getElement('.ssm-exit--menu').setAttribute('data-active', 'true');
    } else {
      gsap.to(getElement('.ssm-navigation'), {
        opacity: 0,
        duration: 1,
        ease: 'power1.out'
      });
      getElement('.ssm-exit--menu_label').innerText = "Menu";
      getElement('.ssm-exit--menu').setAttribute('data-active', 'false');
    }
  });

  const inputTextFields = getAllElements('.ssm-contact--input_textbox');
  const submitButton = document.getElementById('submitbutton');
  const contactName = getElement("#contact_name");
  const contactEmail = getElement("#contact_email");
  const contactTelephone = getElement("#contact_telephone");
  const contactMessage = getElement("#message");

  let errorFields = [];

  inputTextFields.forEach(input => {
    input.addEventListener('blur', () => {
      if (input.value === '') {
        if (!errorFields.includes(input.name)) {
          errorFields.push(input.name);
          console.log('errorFields', errorFields);
        }
      } else {
        if (errorFields.includes(input.name)) {
          const newFields = errorFields.filter(field => field !== input.name);
          errorFields = [...newFields]
          console.log('newFields', errorFields);
        }
      }

      if ((contactName.value !== '' && contactEmail.value !== '' && contactTelephone.value !== '' && contactMessage.value !== '') && errorFields.length <= 0) {
        submitButton.setAttribute('disabled', 'false');
      } else {
        submitButton.setAttribute('disabled', 'true');
      }
    });
  });
})();