import * as fab from "@fortawesome/free-brands-svg-icons";
import * as fas from "@fortawesome/pro-solid-svg-icons";
// import * as fal from "@fortawesome/pro-light-svg-icons";
import * as far from "@fortawesome/pro-regular-svg-icons";
// import * as fad from "@fortawesome/pro-duotone-svg-icons";

// https://github.com/FortAwesome/Font-Awesome/issues/19348
const { library } = require("@fortawesome/fontawesome-svg-core");

export const initializeIconList = () => {
  library.add(
    ...[
      far.faEllipsisV,
      fas.faTriangle,
      far.faArrowUpRightFromSquare,
      far.faInfoCircle,

      far.faSun,
      far.faMoon,

      fas.faCogs,

      fab.faGithub,
      fab.faLinkedin,

      fab.faReact,
      fab.faGoogle,
      fab.faUnity,
      fab.faPython,
      fab.faMailchimp,
      fab.faAws,
      fab.faWindows,
      far.faAtomAlt,
      far.faPalette,
      far.faVrCardboard,
      far.faCode,
      far.faQrcode,
      far.faCommentSmile,

      // * Route info
      far.faHeart,
      far.faAddressCard,
      far.faLightbulbOn,
      far.faEnvelope,
      fas.faHeart,
      fas.faAddressCard,
      fas.faLightbulbOn,
      fas.faEnvelope,
    ],
  );
};
