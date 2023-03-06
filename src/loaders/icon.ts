import "@fortawesome/fontawesome-svg-core/styles.css";
import * as fab from "@fortawesome/free-brands-svg-icons";
import * as fas from "@fortawesome/free-solid-svg-icons";

// https://github.com/FortAwesome/Font-Awesome/issues/19348
const { library, config } = require("@fortawesome/fontawesome-svg-core");
config.autoAddCss = false;

export const initializeIconList = () => {
  library.add(
    ...[
      fas.faEllipsisV,
      fas.faCaretUp,
      fas.faArrowUpRightFromSquare,
      fas.faInfoCircle,

      fas.faSun,
      fas.faMoon,

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
      fas.faAtom,
      fas.faPalette,
      fas.faVrCardboard,
      fas.faCode,
      fas.faQrcode,
      fas.faComment,

      // * Route info
      fas.faHeart,
      fas.faAddressCard,
      fas.faLightbulb,
      fas.faEnvelope,
    ],
  );
};
