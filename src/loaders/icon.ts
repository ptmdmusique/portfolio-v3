import * as fab from "@fortawesome/free-brands-svg-icons";
import * as fas from "@fortawesome/pro-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import * as far from "@fortawesome/pro-regular-svg-icons";

// https://github.com/FortAwesome/Font-Awesome/issues/19348
const { library, config } = require("@fortawesome/fontawesome-svg-core");
config.autoAddCss = false;

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
