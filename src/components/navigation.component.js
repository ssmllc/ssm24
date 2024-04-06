
import gsap from "gsap";
import CreateComponent from "./create.component";
import { getElement } from "./utils";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin);

const toggleMenu = () => {
  const navigationMenu = getElement('.ssm-navigation');
  navigationMenu.setAttribute('data-active', 'false');

  const isOpen = getElement('.ssm-exit--menu').getAttribute('data-active');

  if (isOpen === 'false') {
    gsap.to(getElement('.ssm-navigation'), {
      display: 'flex',
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
      ease: 'power1.out',
      display: 'none'
    });
    getElement('.ssm-exit--menu_label').innerText = "Menu";
    getElement('.ssm-exit--menu').setAttribute('data-active', 'false');
  }
}

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

  getElement('body').appendChild(ssmNavigation);

  const buttonProjects = getElement('.ssm-navigation--button.projects');
  buttonProjects.addEventListener('click', () => {
    toggleMenu();
  });

  const buttonServices = getElement('.ssm-navigation--button.services');
  buttonServices.addEventListener('click', () => {
    gsap.to(window, { duration: 1, scrollTo: { y: "#services", offsetY: 150 } });
    toggleMenu();
  });

  const buttonAbout = getElement('.ssm-navigation--button.about');
  buttonAbout.addEventListener('click', () => {
    gsap.to(window, { duration: 1, scrollTo: { y: "#about", offsetY: -150 } });
    toggleMenu();
  });

  const buttonContact = getElement('.ssm-navigation--button.contact');
  buttonContact.addEventListener('click', () => {
    gsap.to(window, { duration: 1, scrollTo: { y: "#contact", offsetY: 375 } });
    toggleMenu();
  });
}

export default Navigation;