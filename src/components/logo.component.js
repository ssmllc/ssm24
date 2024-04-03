import { gsap } from "gsap";
import { getElement } from "./utils";

const Logo = () => {
  const logo = getElement('.ssm-logo');

  if (logo) {
    gsap.to(logo, {
      duration: 2,
      delay: .50,
      // scale: 1,
      opacity: 1,
      width: '80%',
      ease: 'power4.out'
    });
  }
}

export default Logo;