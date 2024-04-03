
import gsap from "gsap";
import CreateComponent from "./create.component";
import { getElement } from "./utils";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin);

const Navigation = () => {
  const ssmNavigation = CreateComponent({
    elementType: 'div',
    className: 'ssm-navigation'
  });

  const ssmNavigationProjectsButton = CreateComponent({
    elementType: 'button',
    className: ['ssm-navigation--button', 'projects'],
    dataSet: { attribute: 'data-active', value: 'false' },
    textContent: 'Projects'
  });

  const ssmNavigationServicesButton = CreateComponent({
    elementType: 'button',
    className: ['ssm-navigation--button', 'services'],
    dataSet: { attribute: 'data-active', value: 'false' },
    textContent: 'Services'
  });

  const ssmNavigationAboutButton = CreateComponent({
    elementType: 'button',
    className: ['ssm-navigation--button', 'about'],
    dataSet: { attribute: 'data-active', value: 'false' },
    textContent: 'About'
  });

  const ssmNavigationContactButton = CreateComponent({
    elementType: 'button',
    className: ['ssm-navigation--button', 'contact'],
    dataSet: { attribute: 'data-active', value: 'false' },
    textContent: 'Contact'
  });

  ssmNavigation.appendChild(ssmNavigationProjectsButton);
  ssmNavigation.appendChild(ssmNavigationServicesButton);
  ssmNavigation.appendChild(ssmNavigationAboutButton);
  ssmNavigation.appendChild(ssmNavigationContactButton);

  getElement('.ssm-banner').prepend(ssmNavigation);

  const buttonServices = getElement('.ssm-navigation--button.services');
  buttonServices.addEventListener('click', () => {
    gsap.to(window, { duration: 1, scrollTo: { y: "#services", offsetY: 150 } });
  });

  const buttonAbout = getElement('.ssm-navigation--button.about');
  buttonAbout.addEventListener('click', () => {
    gsap.to(window, { duration: 1, scrollTo: { y: "#about", offsetY: -150 } });
  });

  const buttonContact = getElement('.ssm-navigation--button.contact');
  buttonContact.addEventListener('click', () => {
    gsap.to(window, { duration: 1, scrollTo: { y: "#contact", offsetY: 375 } });
  });
}

export default Navigation;