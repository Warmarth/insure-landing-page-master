import snappy from "../assets/images/icon-snappy-process.svg";
import afford from "../assets/images/icon-affordable-prices.svg";
import people from "../assets/images/icon-people-first.svg";
import facebook from "../assets/images/icon-facebook.svg";
import x from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";
import heroSmall from "../assets/images/image-intro-mobile.jpg";
import heroBig from "../assets/images/image-intro-desktop.jpg";

import bg_footer from "../assets/images/bg-pattern-footer-desktop.svg";
import bg_footer1 from "../assets/images/bg-pattern-footer-mobile.svg";
import bg_work from "../assets/images/bg-pattern-how-we-work-desktop.svg";
import bg_work1 from "../assets/images/bg-pattern-how-we-work-mobile.svg";
import bg_left from "../assets/images/bg-pattern-intro-left-desktop.svg";
import bg_left1 from "../assets/images/bg-pattern-intro-left-mobile.svg";
import bg_right from "../assets/images/bg-pattern-intro-right-desktop.svg";
import bg_right1 from "../assets/images/bg-pattern-intro-right-mobile.svg";

const navitem = ["how we work", "blog", "account"];
const Hero = {
  title: `humanizing your insurance.`,
  content: ` Get your life insurance coverage easier and faster. We blend our expertise 
  and technology to help you find the plan that’s right for you. Ensure you 
  and your loved ones are protected.
`,
  small: heroSmall,
  big: heroBig,
};
const patterns = {
  pattern_1: bg_footer,
  pattern_2: bg_footer1,
  pattern_3: bg_work,
  pattern_4: bg_work1,
  pattern_5: bg_left,
  pattern_6: bg_left1,
  pattern_7: bg_right,
  pattern_8: bg_right1,
};

const proceedure = {
  title: "we're differenet",
  card: [
    {
      icon: snappy,
      title: "snappy process",
      content: ` Our application process can be completed in minutes, not hours. Don’t get 
  stuck filling in tedious forms.`,
    },
    {
      icon: afford,
      title: "Affordable Prices",
      content: `We don’t want you worrying about high monthly costs. Our prices may be low,but we still offer the best coverage possible.`,
    },
    {
      icon: people,
      title: "people first",
      content: ` Our plans aren’t full of conditions and clauses to prevent payouts. We make 
  sure you’re covered when you need it.`,
    },
  ],
  footerTags: {
    icons: [facebook, x, pinterest, instagram],
    company: {
      title: `our company`,
      content: ["how we work", "why insure", "view plans", "Review"],
    },
    help: {
      title: "help me",
      content: ["faq", "terms of use", "privacy policy", "cookies"],
    },
    contact: {
      title: "contact",
      content: ["sales", "support", "live chat"],
    },
    others: {
      title: "others",
      content: ["careers", "press", "licenses"],
    },
  },
};
export { navitem, Hero, proceedure, patterns };
