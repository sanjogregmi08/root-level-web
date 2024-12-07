// dummyData.js

export const blogData = [
  {
    blog_id: 1,
    title: "Top 10 Travel Destinations in 2024",
    slug: "top-10-travel-destinations-2024",
    author: "Alice Johnson",
    date: "Sunday, 12 Jan 2024",
    category: "Travel",
    tags: ["Travel", "Destinations", "Tourism"],
    summary:
      "A curated list of the must-visit destinations for travelers in 2024, including tips and insights. Explore hidden gems, iconic landmarks, and lesser-known adventures that promise unforgettable experiences for wanderlust-filled travelers.",
    content: [
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget turpis eget libero tincidunt efficitur. Nullam nec libero id nisl luctus ultricies.",
      },
      {
        type: "image",
        content:
          "https://images.unsplash.com/photo-1726179655325-6abb713219ee?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget turpis eget libero tincidunt efficitur. Nullam nec libero id nisl luctus ultricies.",
      },
    ],
  },
  {
    blog_id: 2,
    title: "Mastering Python for Data Science",
    slug: "mastering-python-for-data-science",
    author: "John Smith",
    date: "Sunday, 12 Jan 2024",
    category: "Technology",
    tags: ["Python", "Data Science", "Coding"],
    summary:
      "An in-depth guide to using Python libraries for data analysis, machine learning, and more. Learn how to manipulate data, build predictive models, and harness the power of Python to excel in the rapidly evolving field of data science.",
    content: [
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget turpis eget libero tincidunt efficitur. Nullam nec libero id nisl    luctus ultricies.",
      },
      {
        type: "image",
        content:
          "https://images.unsplash.com/photo-1726179655325-6abb713219ee?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget turpis eget libero tincidunt efficitur. Nullam nec libero id nisl    luctus ultricies.",
      },
    ],
  },
];

export const servicesData = [
  {
    id: 1,
    title: "Real Insights AI",
    icon: "LuTerminalSquare",
    description:
      "We developed a scalable and user-friendly solution to streamline operations and increase efficiency for our client in Real state.",
    links: [
      {
        text: "more-information",
        url: "#",
        buttonStyle:
          "bg-custom-primary text-white rounded-xl text-bodyMediumSmall px-4 py-1 hover:bg-black transition-all duration-200",
      },
      {
        text: "view-case-study",
        url: "#",
        buttonStyle:
          "border border-custom-primary hover:text-white rounded-xl text-bodyMediumSmall  px-4 py-1 hover:bg-black transition-all duration-200",
      },
    ],
  },
  // {
  //   id: 2,
  //   title: "Mobile Services",
  //   icon: "LuSmartphone",
  //   description:
  //     "Our mobile app development services are designed to create engaging, user-friendly applications that cater to the needs of your target audience. From concept to launch, we ensure a seamless experience for your users.",
  //   links: [
  //     {
  //       text: "more-information",
  //       url: "#",
  //       buttonStyle:
  //         "bg-custom-primary text-white rounded-xl text-bodyMediumSmall px-4 py-1 hover:bg-black transition-all duration-200",
  //     },
  //     {
  //       text: "examples",
  //       url: "#",
  //       buttonStyle:
  //         "border border-custom-primary hover:text-white rounded-xl text-bodyMediumSmall  px-4 py-1 hover:bg-black transition-all duration-200",
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   title: "Cloud Services",
  //   icon: "LuCloud",
  //   description:
  //     "Our cloud services offer secure, scalable solutions that enable your business to operate efficiently and effectively. From data storage to application hosting, we provide the infrastructure you need to succeed.",
  //   links: [
  //     {
  //       text: "more-information",
  //       url: "#",
  //       buttonStyle:
  //         "bg-custom-primary text-white rounded-xl text-bodyMediumSmall px-4 py-1 hover:bg-black transition-all duration-200",
  //     },
  //     {
  //       text: "examples",
  //       url: "#",
  //       buttonStyle:
  //         "border border-custom-primary hover:text-white rounded-xl text-bodyMediumSmall  px-4 py-1 hover:bg-black transition-all duration-200",
  //     },
  //   ],
  // },
];

export const careerData = [
  {
    title: "Engineering",
    jobList: [
      {
        id: 1,
        position: "Software Engineer",
        location: "Remote",
        type: "Full-Time",
        description:
          "We are looking for a talented software engineer to join our team. The ideal candidate will have experience in Python, JavaScript, and cloud services.",
        requirements: [
          "Bachelor's degree in Computer Science or related field",
          "2+ years of experience in software development",
          "Proficiency in Python, JavaScript, and cloud services",
          "Strong problem-solving skills",
        ],
        responsibilities: [
          "Develop software solutions to meet client needs",
          "Collaborate with team members to design and implement new features",
          "Troubleshoot and debug code to ensure optimal performance",
          "Contribute to all phases of the development lifecycle",
        ],
        applyLink: "#",
      },
      {
        id: 2,
        position: "Data Scientist",
        location: "Remote",
        type: "Full-Time",
        description:
          "We are seeking a data scientist to join our team. The ideal candidate will have experience in data analysis, machine learning, and statistical modeling.",
        requirements: [
          "Master's degree in Data Science, Statistics, or related field",
          "3+ years of experience in data analysis",
          "Proficiency in Python, R, and SQL",
          "Strong analytical and problem-solving skills",
        ],
        responsibilities: [
          "Analyze and interpret complex data sets",
          "Develop predictive models to optimize business processes",
          "Collaborate with cross-functional teams to drive data-driven decision-making",
          "Present findings to stakeholders in a clear and concise manner",
        ],
        applyLink: "#",
      },
      {
        id: 3,
        position: "DevOps Engineer",
        location: "Hybrid",
        type: "Full-Time",
        description:
          "We are looking for a DevOps Engineer to enhance our CI/CD pipelines and improve deployment efficiency.",
        requirements: [
          "Bachelor's degree in Computer Science or related field",
          "3+ years of experience in DevOps roles",
          "Strong experience with Docker, Kubernetes, and cloud platforms (AWS, Azure, GCP)",
          "Proficiency in scripting languages like Bash or Python",
        ],
        responsibilities: [
          "Maintain and optimize CI/CD pipelines",
          "Collaborate with developers to ensure smooth deployment processes",
          "Monitor infrastructure and ensure high availability of services",
          "Implement security best practices in deployment workflows",
        ],
        applyLink: "#",
      },
      {
        id: 4,
        position: "Front-End Developer",
        location: "Remote",
        type: "Contract",
        description:
          "We are seeking a skilled front-end developer with expertise in React.js and modern web development practices.",
        requirements: [
          "Bachelor's degree in Computer Science or related field",
          "2+ years of experience with front-end development",
          "Proficiency in React.js, HTML, CSS, and JavaScript",
          "Strong knowledge of responsive design principles",
        ],
        responsibilities: [
          "Build intuitive and responsive user interfaces",
          "Optimize components for maximum performance",
          "Collaborate with designers and backend developers to implement new features",
          "Write clean, maintainable, and efficient code",
        ],
        applyLink: "#",
      },
    ],
  },
  {
    title: "Marketing",
    jobList: [
      {
        id: 5,
        position: "Marketing Specialist",
        location: "Remote",
        type: "Part-Time",
        description:
          "Join our marketing team to plan and execute campaigns that drive engagement and growth.",
        requirements: [
          "Bachelor's degree in Marketing, Business, or related field",
          "1+ years of experience in marketing roles",
          "Experience with digital marketing tools (Google Ads, Analytics, SEO)",
          "Strong communication and creative skills",
        ],
        responsibilities: [
          "Develop and execute marketing campaigns",
          "Analyze campaign performance metrics and adjust strategies",
          "Collaborate with content and design teams for promotional materials",
          "Maintain brand consistency across all marketing efforts",
        ],
        applyLink: "#",
      },
      // {
      //   id: 6,
      //   position: "Social Media Manager",
      //   location: "Remote",
      //   type: "Full-Time",
      //   description:
      //     "We are looking for a Social Media Manager to handle our online presence and engage with our audience.",
      //   requirements: [
      //     "Bachelor's degree in Marketing or related field",
      //     "2+ years of experience in social media management",
      //     "Proficiency in social media platforms and tools (Hootsuite, Buffer)",
      //     "Strong writing and editing skills",
      //   ],
      //   responsibilities: [
      //     "Create and manage content for social media platforms",
      //     "Monitor and respond to user engagement",
      //     "Develop strategies to grow followers and engagement",
      //     "Analyze performance data to inform future campaigns",
      //   ],
      //   applyLink: "#",
      // },
    ],
  },
];
