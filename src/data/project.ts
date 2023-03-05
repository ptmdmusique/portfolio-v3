import { IconProps } from "ducduchy-react-components";
import { CommonI18NMap } from "./i18n";

export const techStackInfo = {
  react: { icon: ["fab", "react"], displayName: "React" },
  firebase: { icon: ["fab", "google"], displayName: "Firebase" },
  qrScheduling: { icon: ["far", "qrcode"], displayName: "QR Scheduling" },
  gcp: { icon: ["fab", "google"], displayName: "GCP" },
  ibmChatbot: { icon: ["far", "comment-smile"], displayName: "IBM Chatbot" },
  unity: { icon: ["fab", "unity"], displayName: "Unity 3D" },
  python: { icon: ["fab", "python"], displayName: "Python" },
  arFoundation: { icon: ["far", "vr-cardboard"], displayName: "AR Foundation" },
  cSharp: { icon: ["far", "code"], displayName: "C#" },
  mailchimp: { icon: ["fab", "mailchimp"], displayName: "Mailchimp" },
  aws: { icon: ["fab", "aws"], displayName: "AWS" },
  reactNative: { icon: ["fab", "react"], displayName: "React Native" },
  windowPhone: { icon: ["fab", "windows"], displayName: "Windows Phone" },
  chemistry: { icon: ["far", "atom-alt"], displayName: "Chemistry" },
  pixelArt: { icon: ["far", "palette"], displayName: "Pixel Art" },
} as const satisfies Record<
  string,
  { icon: readonly [IconProps["icon"][0], string]; displayName: string }
>;

export interface ProjectProps {
  title: string;
  showProject: boolean;
  liveStatus: "alive" | "constructing" | "down";
  tagList: string[];
  techstack: (keyof typeof techStackInfo)[];
  description: readonly (keyof CommonI18NMap["pages"]["projects"]["description"])[];
  href?: string;
  imgSrc: string;
}

const getPath = (fileName: string) => `/images/projects/${fileName}`;

export const professionalProjects: ProjectProps[] = [
  {
    title: "Duc Duchy",
    showProject: true,
    liveStatus: "alive",
    tagList: ["Firebase", "React"],
    techstack: ["react", "firebase"],
    description: ["showOffAboutMyself", "sandbox"] as const,
    href: "https://duc-duchy.io/",
    imgSrc: getPath("duc-duchy-min.png"),
  },
  {
    title: "InstaSalon",
    showProject: true,
    liveStatus: "alive",
    tagList: ["Fullstack", "Firebase", "QR Scheduling", "SaaS"],
    techstack: ["react", "firebase", "qrScheduling"],
    description: [
      "saasPlatform",
      "reactStack",
      "backendTeamLead",
      "soleDesigner",
      "cssStack",
    ] as const,
    href: "https://dev.instasalon.beauty/",
    imgSrc: getPath("insta-salon.png"),
  },
  {
    title: "TDN Quiz Platform",
    showProject: true,
    liveStatus: "alive",
    tagList: ["Web App", "Fullstack", "Firebase"],
    techstack: ["react", "firebase"],
    description: [
      "quizPlatScale",
      "reactStack",
      "soleDeveloper",
      "soleDesigner",
      "cssStack",
      "dedicatedToHS",
    ] as const,
    href: "https://tdn-quizeria.web.app/",
    // href: "https://msq-dev-v2.web.app/login",
    imgSrc: getPath("tdn.png"),
  },
  {
    title: "Insite Agent-based modelling",
    showProject: true,
    liveStatus: "alive",
    tagList: ["Web App", "ABM", "Cloud"],
    techstack: ["react", "gcp", "python"],
    description: [
      "insiteEnergy",
      "gcpStackCICD",
      "reactStack",
      "cssStack",
      "pythonBackendStack",
      "principalInvestigator",
    ],
    href: "https://insite-abm.web.app/",
    imgSrc: getPath("insite_2.png"),
  },
  {
    title: "Corona Hub",
    showProject: true,
    liveStatus: "alive",
    tagList: ["Web App", "Corona Health"],
    techstack: ["react", "firebase", "ibmChatbot"],
    description: [
      "reactStack",
      "capstone",
      "capstoneTechlead",
      "capstoneDetail",
      "fromScratch",
      "cssStack",
      "restful",
    ],
    href: "https://coronahub.web.app/",
    imgSrc: getPath("capstone.png"),
  },
  {
    title: "DT TD",
    showProject: true,
    liveStatus: "constructing",
    tagList: ["Mobile App", "AR"],
    techstack: ["unity", "arFoundation", "cSharp"],
    description: ["unityARStack", "android", "dtTD", "Thang"],
    href: "",
    imgSrc: getPath("dtTD.png"),
  },
  {
    title: "Apheleia Web",
    showProject: true,
    liveStatus: "alive",
    tagList: ["Web App"],
    techstack: ["react", "mailchimp", "aws"],
    description: ["reactStack", "mailchimp", "cssStack", "Thy"],
    href: "https://master.d1mu6qk0op5jdp.amplifyapp.com/",
    imgSrc: getPath("apheleia.png"),
  },
  {
    title: "WCT Tigard Mobile App",
    showProject: true,
    liveStatus: "down",
    tagList: ["Mobile App", "Taekwondo"],
    techstack: ["react", "firebase", "reactNative"],
    description: [
      "reactStack",
      "ios",
      "wct",
      "adminDashboard",
      "mobileCSSStack",
      "Thang",
    ],
    href: "",
    imgSrc: getPath("wctTigard_preview.png"),
  },
];

export const funProjects: ProjectProps[] = [
  {
    title: "Chempedia",
    showProject: true,
    liveStatus: "down",
    tagList: ["Mobile App", "Window Phone", "Chemistry"],
    techstack: ["windowPhone", "cSharp", "chemistry"],
    description: ["forStudent", "chempediaStack", "windowPhone", "Viet"],
    href: "",
    imgSrc: getPath("Chempedia.png"),
  },
  {
    title: "Teddy Fighter xD",
    showProject: true,
    liveStatus: "constructing",
    tagList: ["Topdown Shooter", "Unity"],
    techstack: ["unity", "cSharp", "pixelArt"],
    description: ["pixel", "topdown"],
    href: "",
    imgSrc: getPath("TeddyFighter_preview.png"),
  },
  {
    title: "When the Dream Ends",
    showProject: true,
    liveStatus: "down",
    tagList: ["RPG", "Unity"],
    techstack: ["unity", "cSharp", "pixelArt"],
    description: ["pixel", "rpg"],
    href: "",
    imgSrc: getPath("WhenTheDreamEnds_Preview-min.png"),
  },
];
