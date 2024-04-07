import { gsap } from "gsap";
import { getElement } from "./utils";

const Logo = () => {
  const logo = getElement('.ssm-logo');

  if (logo) {
    gsap.to(logo, {
      duration: 4,
      delay: .50,
      // scale: 1,
      opacity: 1,
      width: '75%',
      ease: 'elastic.out'
    });
  }
}

export default Logo;