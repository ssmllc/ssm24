import { gsap } from "gsap";
import { getElement } from "./utils";

let showProjects = false;

const ShowOverlay = () => {
  let isVisible = false;

  const overlay = getElement('.ssm-overlay');
  const hideProjectsButton = getElement('.ssm-projects--hide');

  overlay.addEventListener('click', () => {
    if (isVisible && showProjects) {
      gsap.to('.ssm-projects', {
        duration: 1,
        ease: 'power4.out',
        bottom: '-100%',
      });

      overlay && gsap.to(overlay, {
        duration: 1,
        ease: 'power4.out',
        opacity: 0,
      });

      overlay && gsap.to(overlay, { display: 'none' });

      getElement('.ssm-navigation--button.projects').setAttribute('data-active', 'false');
      isVisible = false;
      showProjects = false;
    }
  });

  hideProjectsButton.addEventListener('click', () => {
    if (isVisible && showProjects) {
      gsap.to('.ssm-projects', {
        duration: 1,
        ease: 'power4.out',
        bottom: '-100%',
      });

      overlay && gsap.to(overlay, {
        duration: 1,
        ease: 'power4.out',
        opacity: 0,
      });

      overlay && gsap.to(overlay, { display: 'none' });

      getElement('.ssm-navigation--button.projects').setAttribute('data-active', 'false');
      isVisible = false;
      showProjects = false;
    }
  });

  if (!isVisible) {
    overlay && gsap.to(overlay, { display: 'block' });

    overlay && gsap.to(overlay, {
      duration: 1,
      ease: 'power4.out',
      opacity: 1,
    });

    isVisible = true;
  }
}

const ProjectsSlider = () => {
  const slider = getElement('.ssm-projects--slider');
  const projectsButton = getElement('.ssm-navigation--button.projects');
  const sliderProject = slider && getElement('.ssm-projects--preview', slider);
  const next = getElement('.ssm-button--next');
  const prev = getElement('.ssm-button--prev');
  const offset = 15;
  const delta = sliderProject && (sliderProject.getBoundingClientRect().width) + offset;
  let counter = 0;

  projectsButton && projectsButton.addEventListener('click', () => {
    if (!showProjects) {
      gsap.to('.ssm-projects', {
        display: 'flex',
        delay: .5,
        duration: 1,
        ease: 'power4.out',
        bottom: '100px',
      });

      let mm = gsap.matchMedia();

      mm.add("(min-width: 400px)", () => {
        gsap.to('.ssm-projects', {
          delay: .5,
          duration: 1,
          ease: 'power4.out',
          bottom: '125px',
        });
      });
    }

    ShowOverlay();

    projectsButton.setAttribute('data-active', 'true');
    showProjects = true;
  });

  next && next.addEventListener('click', () => {
    if (counter >= 3) {
      document.querySelector('.ssm-projects--current_start').innerHTML = '04';
    } else {
      counter++;
      // console.log('counter', counter);
      document.querySelector('.ssm-projects--current_start').innerHTML = `0${counter + 1}`;
    }
    gsap.to(slider, {
      x: `-${delta * counter}px`
    });
  });

  prev && prev.addEventListener('click', () => {
    if (counter <= 0) {
      document.querySelector('.ssm-projects--current_start').innerHTML = '01';
    } else {
      counter--;
      document.querySelector('.ssm-projects--current_start').innerHTML = `0${counter + 1}`;
    }

    gsap.to(slider, {
      x: `-${delta * counter}px`
    })
  });
}

export default ProjectsSlider;