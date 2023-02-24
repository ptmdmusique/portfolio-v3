import { library } from "@fortawesome/fontawesome-svg-core";
import * as fab from "@fortawesome/free-brands-svg-icons";
// import * as fas from "@fortawesome/pro-solid-svg-icons";
// import * as fal from "@fortawesome/pro-light-svg-icons";
import * as far from "@fortawesome/pro-regular-svg-icons";
// import * as fad from "@fortawesome/pro-duotone-svg-icons";

export const initializeIconList = () => {
  const iconList = [
    fab.faGithub,
    fab.faLinkedin,

    // * Route info
    far.faHeart,
    far.faAddressCard,
    far.faLightbulbOn,
    far.faAddressBook,
  ];

  // Set up icon libraries
  library.add(...iconList);
};
