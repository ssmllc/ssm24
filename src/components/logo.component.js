import { gsap } from "gsap";
import { getElement } from "./utils";

const Logo = () => {
  const logo = getElement('.ssm-logo');

  let mm = gsap.matchMedia();

  if (logo) {
    gsap.to(logo, {
      duration: 4,
      delay: .50,
      // scale: 1,
      opacity: 1,
      width: '75%',
      ease: 'elastic.out'
    });

    mm.add("(min-width: 1900px)", () => {
      gsap.to(logo, {
        duration: 4,
        delay: .50,
        // scale: 1,
        opacity: 1,
        width: '65%',
        ease: 'elastic.out'
      });
    });
  }
}

export default Logo;