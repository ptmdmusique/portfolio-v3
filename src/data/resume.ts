export interface WorkDataType {
  date: string;
  title: string;
  description: string | readonly string[];
}
export const workData = [
  // * --- New
  {
    date: "May 2021 - Present",
    title: "ESRI - Frontend Software Engineer",
    description: [
      "Implement new features for ArcgisOnline that help companies around the world save multiple million dollars",
      "Spearhead in designing and implementing test cases for better app integrity and release confidence",
      "Design and implement code architecture that helps boost productivity as well as scalability in StencilJS and Preact",
      "Migrate and implement business logic that is directly involved in web app core functionalities that has more than 1 million users",
      "Work directly with designers, product engineers, and Enterprise teams to ensure the success of software deliverables",
    ],
  },
  {
    date: "Dec. 2019 - Dec. 2022",
    title: "Apheleia - Chief Technology Officer",
    description: [
      "Strategize and design architecture based on business requirement and participation in forming business plan",
      "Build and maintain business websites using ReactJS, Typescript, and Firebase.",
      "Deploy and manage GCP and AWS cloud infrastructure.",
      "Communicate and strategize development roadmap as well as app architecture with multiple teams.",
      "Researched and implemented Machine Learning models using GCP Vertex AI.",
      "Oversaw user research and design process for large scale SaaS platform.",
      "Design and implemented distributed system to handle large userbase using Cloud Functions and GCP PubSub.",
    ],
  },
  {
    date: "Dec. 2019 - Current",
    title: "Insite - Co-Principal Investigator",
    description: [
      "Researched, developed, and deployed agent-based model software that simulates green energy installation impact on local population using Python.",
      "Decreased model run times by 95%, from 15 minutes to 30 seconds by optimizing the core algorithm and eliminate data redundancy.",
      "Implemented a web-based app for demonstration purposes using Typescript, ReactJS, Redux.",
      "Saved project cost by 99% by implementing serverless microservices backend using Fast API, Cloud Storage database, Firebase Auth authentication, and Cloud Run for container deployment.",
    ],
  },
  {
    date: "Apr. 2019 - Dec. 2019",
    title: "Cambia Health Solution - Software Engineer Intern",
    description: [
      "Integrated container security scan into CI/CD pipeline using Python and Clojure.",
      "Managed microservices through AWS console.",
      "Built and maintained internal dashboard features using Clojure.",
      "Wrote unit and integration tests using Ruby, Clojure, and Cucumber to ensure 100% test coverage.",
    ],
  },
  // * --- Old
  {
    date: "Jan. 2018 – Apr. 2021",
    title: "Freelancer Software Dev., Self Publish",
    description: [
      "Full stack web and mobile app developer.",
      "Unity 3D Game maker. Make 2D pixel art.",
      "Design and implement animation for games.",
      "Edit videos. Integrate and manage cloud solutions using Firebase and Amazon Web Service",
    ],
  },
  {
    date: "Oct. 2018 - Apr. 2021",
    title: "Desktop Service Technician, Portland State University",
    description: [
      "Troubleshoot and fix computer issues.",
      "Perform customer services.",
      "Reimage and install Windows/Mac software.",
    ],
  },
  {
    date: "Apr. 2016 - Jun. 2019",
    title:
      "Senior Taekwondo Instructor, Master Eric's World Champion Taekwondo",
    description: [
      "Instruct student in many intense physical activities.",
      "Boost student's self-confidence.",
      "Help lead team in many tournaments.",
      "Promote teamwork and leadership skills.",
    ],
  },
  {
    date: "Feb. 2017 - Jun. 2018",
    title: "Math & Computer Science Lab Tutor, Portland Community College",
    description: [
      "Help student with homework.",
      "Teach and encourage students to solve problems creatively.",
      "Help with many electrical engineer labs, specifically in implementing Arduino robots",
    ],
  },
] as const satisfies readonly WorkDataType[];
