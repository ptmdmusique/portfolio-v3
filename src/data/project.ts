import { CommonI18NMap } from "./i18n";

interface ProjectProps {
  title: string;
  showProject: boolean;
  liveStatus: "alive" | "constructing" | "down";
  tagList: string[];
  techstack: { icon: [string, string]; displayName: string }[];
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
    techstack: [
      { icon: ["fab", "react"], displayName: "React" },
      { icon: ["fab", "google"], displayName: "Firebase" },
    ],
    description: [
      "saasPlatform",
      "reactStack",
      "backendTeamLead",
      "soleDesigner",
      "cssStack",
    ] as const,
    href: "https://duc-duchy.io/",
    imgSrc: getPath("duc-duchy-min.png"),
  },
  {
    title: "InstaSalon",
    showProject: true,
    liveStatus: "alive",
    tagList: ["Fullstack", "Firebase", "QR Scheduling", "SaaS"],
    techstack: [
      { icon: ["fab", "react"], displayName: "React" },
      { icon: ["fab", "google"], displayName: "Firebase" },
      { icon: ["far", "qrcode"], displayName: "QR Scheduling" },
    ],
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
    techstack: [
      { icon: ["fab", "react"], displayName: "React" },
      { icon: ["fab", "google"], displayName: "Firebase" },
    ],
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
    techstack: [
      { icon: ["fab", "react"], displayName: "React" },
      { icon: ["fab", "google"], displayName: "GCP" },
      { icon: ["fab", "python"], displayName: "Python" },
    ],
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
    techstack: [
      { icon: ["fab", "react"], displayName: "React" },
      { icon: ["fab", "google"], displayName: "Firebase" },
      { icon: ["far", "comment-smile"], displayName: "IBM Chatbot" },
    ],
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
  // {
  //   title: "Duysterz Shoes",
  //   showProject: true,
  //   liveStatus: "constructing",
  //   tagList: ["Web App", "E-commerce"],
  //   techstack: [
  //     { icon: ["fab", "react"], displayName: "React" },
  //     { icon: ["fab", "python"], displayName: "Django" },
  //     { icon: ["far", "cart-plus"], displayName: "Saleor" },
  //   ],
  //   description: ["saleor", "ecommerce", "pwa", "adminDashboard"],
  //   href: "https://duysterz-shoes-store.web.app/",
  //   imgSrc: constructingImg,
  // },
  {
    title: "DT TD",
    showProject: true,
    liveStatus: "constructing",
    tagList: ["Mobile App", "AR"],
    techstack: [
      { icon: ["fab", "unity"], displayName: "Unity 3D" },
      { icon: ["far", "vr-cardboard"], displayName: "AR Foundation" },
      { icon: ["far", "code"], displayName: "C#" },
    ],
    description: ["unityARStack", "android", "dtTD", "Thang"],
    href: "",
    imgSrc: getPath("dtTD.png"),
  },
  {
    title: "Apheleia Web",
    showProject: true,
    liveStatus: "alive",
    tagList: ["Web App"],
    techstack: [
      { icon: ["fab", "react"], displayName: "React" },
      { icon: ["fab", "mailchimp"], displayName: "Mailchimp" },
      { icon: ["fab", "google"], displayName: "Firebase" },
      { icon: ["fab", "aws"], displayName: "Amazon Web Service" },
    ],
    description: ["reactStack", "mailchimp", "cssStack", "Thy"],
    href: "https://master.d1mu6qk0op5jdp.amplifyapp.com/",
    imgSrc: getPath("apheleia.png"),
  },
  {
    title: "WCT Tigard Mobile App",
    showProject: true,
    liveStatus: "down",
    tagList: ["Mobile App", "Taekwondo"],
    techstack: [
      { icon: ["fab", "react"], displayName: "React" },
      { icon: ["fab", "react"], displayName: "React Native" },
      { icon: ["fab", "google"], displayName: "Firebase" },
    ],
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
    techstack: [
      { icon: ["fab", "windows"], displayName: "Window Phone" },
      { icon: ["far", "code"], displayName: "C#" },
      { icon: ["far", "atom-alt"], displayName: "Chemistry" },
    ],
    description: ["forStudent", "chempediaStack", "windowPhone", "Viet"],
    href: "",
    imgSrc: getPath("Chempedia.png"),
  },
  {
    title: "Teddy Fighter xD",
    showProject: true,
    liveStatus: "constructing",
    tagList: ["Topdown Shooter", "Unity"],
    techstack: [
      { icon: ["fab", "unity"], displayName: "Unity 3D" },
      { icon: ["far", "code"], displayName: "C#" },
      { icon: ["far", "palette"], displayName: "Pixel Art" },
    ],
    description: ["pixel", "topdown"],
    href: "",
    imgSrc: getPath("TeddyFighter_preview.png"),
  },
  {
    title: "When the Dream Ends",
    showProject: true,
    liveStatus: "down",
    tagList: ["RPG", "Unity"],
    techstack: [
      { icon: ["fab", "unity"], displayName: "Unity 3D" },
      { icon: ["far", "code"], displayName: "C#" },
      { icon: ["far", "palette"], displayName: "Pixel Art" },
    ],
    description: ["pixel", "rpg"],
    href: "",
    imgSrc: getPath("WhenTheDreamEnds_Preview-min.png"),
  },
];
