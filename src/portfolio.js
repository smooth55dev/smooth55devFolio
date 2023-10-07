// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/groovyWalk.json"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const title = {
  skills : "Skills",
  experience : "Work Experiences",
  opensource : "Open Source",
  achievements : "Achievements",
  blogs : "Blogs",
  talks : "Talks",
  contact : "Contact Me"
}

const greeting = {
  username: "Anselm Kiler",
  title: "Hi there, folks! I go by the name of Anselm.",
  subTitle: emoji( "Five words to sum me up: devoted coder, unparalleled coworker. The latter, though, is subject to the opinions of my past colleagues. Nevertheless, I always strive to excel in all my roles and relish the process. 🚀" ),
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/smooth55dev",
  linkedin: "https://www.linkedin.com/in/smooth55dev/",
  gmail: "smooth@gmail.com",
  gitlab: "https://gitlab.com/smooth55dev",
  facebook: "https://www.facebook.com/smooth55dev",
  medium: "https://medium.com/@smooth55dev",
  stackoverflow: "https://stackoverflow.com/users/10422806/smooth55dev",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: false // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My livelihood",
  subTitle: "As a tech lover and skilled full stack developer, I'm constantly seeking out new technology stacks to explore.",
  skills: [
    emoji( "⚡I possess a strong proficiency in several widely-used programming languages, including Go, Typescript, Javascript, and Python." ),
    emoji("⚡ My area of expertise centers around the development of cutting-edge web technologies and products, as well as exploring topics related to deep learning and natural language processing."),
    emoji("⚡ I am passionate about creating products using Progressive Web Applications (PWA) in both traditional and single-page application (SPA) stacks, and I strive to bring this enthusiasm to every project I undertake."),
    emoji( "⚡ I have extensive experience integrating third-party services such as Firebase, AWS, and Digital Ocean into a variety of applications, and I am adept at incorporating these services to enhance the functionality of my projects." )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "flutter",
      fontAwesomeClassname: "fab fa-apple"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      title : "Education",
      schoolName: "Trier University of Applied Sciences",
      logo: require("./assets/images/Hochschule_Trier,_University_of_Applied_Sciences.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "April 2013 - July 2016",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "In my university the students' social competences are promoted by project and team oriented study methods. Research and development at Trier University of Applied Sciences aim at practice- and market-oriented results and address current issues in business and society."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  title : "Proficiency",
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "95%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  title : "Experiences",
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Software Ag",
      companylogo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHcAdwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xAA4EAABAwIEBAQCCgAHAAAAAAABAAIDBBEFEiExBkFhcRNRgaEysRQiI0JSYpGSwdEHJjNygvDx/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAMEBQECBv/EACcRAAICAgEEAQMFAAAAAAAAAAABAgMEESEFEjFBExQyQiJRUmGR/9oADAMBAAIRAxEAPwDuKIiAIiIAiLFNPFCLyyNbfa53XG0uWDKi0JMUp27Nmd2iP8rA/G4WEA01Vr+Qf2oHlUL81/p7Vcn6JZFGNxukJs/xWW/FGVuQVcE7bwytePym6khdXP7WmccZLyjOi+BfVIeQiIgCIiAIiIAvhX1aVdLd7KdptnuX9Gi3zuB+qjtsVUHOXo6lt6PE1S6XSF2SO/xjd3bp1/8AVgGRlyxup3cdSe53K+SO5DZeC7RfL5GVZdLcnwW4VpI8PJzBa89r35rHWYnSUxPizNBG4GtlFScTYVnDTVN35qr2t+EWEiQmf9UrR8UxSDKdRsQbFehW09S0uppWSNG+U3WnNKPEJH/dUW4vg96LLh+LusBI7MLak7t/sfL3U9FK2QXBXPIqoxSMe3cFWPC68MlbDcZHtD4+3Meh9rLf6dmSsfx2Pn0UsilR/VEsiLwx2YL2tcqhERAEREAUDJPnxirF/wDTijbb9x/n2U6dlT6yf6LxXLG82ZVUrXM6uY5wd7Oas/qe/p3omoW5kg6VRfEFVPBh0jqYEvsbgb2AJIHU2t6rZL99V8kLXtyuFxuvmYvTTZf0fnySfF+J5PFrqyRkDzdlPCcrGjtz7m56rdh4Ke5gdGai/mHFdLk4Oo4as1WGObFd1zTu+C/Q/d9/RWCgMNKwNq6ORoGmZrfEbfpl1/UBfUUZmNKKUXr+vBQnVYuWcepH41wpVRTSSTVFFmAc2XVzL+R8uVtvmuizSNs2WN145Wh7T0Oql8eosLxjD6ilifEXSxuaQD9ZptzG4suYO4jxjDoocOrsDc59Kzwswqgy9ud7G6r52G7mp1ImpuUVqZcjKTZbwrDFRwTtIzQ1AH/FwIPuGrn44prDb/LsZP561x+QCk6DFMQxNrY5KKnooQ4OLIXueX22uXKvj4F9dsZteD1ZfXKLR2rDKgT07HjmFvqv8LuJomA+Snwt4on1ERAEREAVR41w6aeCOqotKykf4sX5vxN9R72VuWtWQiVh05LzOCnFxfs7GTi9ooeF4tFiFPmaS2QaPjdu0+RW0Z+qjeJ8Ekpp3V1G1zXfeMe/9HsfbdQ9NjctzG9njFo18IHOOpZ8Q76jqvmsnAsqfC2jSrtjNFjdProUfUuaPiKhIsUpqn60UzSOhWaSouy4ddUe1olMtVXOylrw2QeTwD81FVn0CrdaoZJE62j2HMP2nl0BC9VLiST2WpK0lw7KxTZOt7g9HJQjLyiRw/BKZ+uZkkWn2jDoO43Hrp1KtOG8MU1gW2VNonT0swlp3FrhuORHkVc8CxYWjDjla45cpPwu3t2tt2PS+ziZ/wAkuyzyUrqO1biWjD6JtLHlA0W6sUMoe0ELKtQqhERAEREB8JUVXcQYbSSmGSpa6UbxxgvcO4aDZSFXm8B4aSCWkAjkuP0nE2KMoGUz5sr4fszbQ3GipZmTKhLtW9k1NXybLzV8QUk4LY6HEZr/AIaCW36loCofEIwqqxKGjqaSqpKiocfB+kQ2DnDWwIJseetl5lxmtnbaWqlPTMVD8RxSVWGPqICTUUkjaqOx1dk+IftLj6KpT1Cc7FGaWmTyxkoto3KzAcSjIe2V0wHOQZzb/cdR6FaTajEaLSSnLhzyk/I/2ujcFYhBjOFwvJa/M0G/mpyp4epagaxN16LRsxqrPuiVo2zj4ZymDG6WVzWVDXwPOn1hopKOJr3XYQ5t7XVhxjgmnfG5zGW9FS+HBLHik9KHF9PDK+Fr73uBaw9Dmt0sNgFlZmFCmHfBlym6U3plgjp9BYLM6N8dPKWaOtp3Go91IMgGUdlmkhH0SQkbMJKyIzakmid8rRN8L4kK6hjfe5IVhBuFzf8Aw6qXGBjb6FoXRo9Qvsk9rZktaZ7REXTgREQGOZuaMhcZ4xw84bjksjBaGodn2+8df7Hou0lVXi7Bo8RpXNeDoNwNR1HUb/qOaq5lXyV8eUTUT7J8nJXPI1utqmnLHh1+YWnX081FUOpqgWe07jZw5EdF6hOywWuDS8m/hMVfgdU+o4bkgdTynM/D5jZrDz8N3IdCdOu6tkHHGOxtDJOF53P/ACzEj2YfmqnSi72jkpqGnDg3dTLqF0FrZE6IP0beJYtxNjUToJm0+CUjhZ73SZ5SPJoGvsO4XzCsNgp2xR0sTmU8IIjD/jeTu93U+XJSFLTRDURgHzW3DFlygbqpdlWXfcdjCMPBkjiu1vYLX4imFDw9XT3s4xmNnVztB81Kxw3aLKkcV4q3F8QZh9Gc1HSvzSPG0km2nQfPsmLQ7rVFHmyfatkhwHCY8jeQAC6VF8I7Km8I0RYwEiyujRYL60zT6iIgCIiALBURB7SLLOvhCAofFPD0dXES6Iva3UFuj2Hzaf4OnZUKXDJ6WQiJwnaOQGV47tO/pddzmhDxYhV3F+GqetBOQZuypXYULHtcMnrvlDg5rRyRiRoe7Kfwu0KsFGWm1iF5r+D5RcNLi3yvoop/Ck7XfC70VGfSpv8AIn+qj+xcInRxtu57WjzJssFTxDhFE77WsZI4fch+u72VWHCsriM0ZPfVb1Jwq8W+zA9F2HSP5yPMspekY8X4mrsXYaWgjdR0jtHOv9o8d+QWfh/BLln1bNHRTuG8MBhaXtVqocNZTtGgWpTRXTHUEVZTcvJ6wukEEQFlIL4BYWC+qY8hERAEREAREQAryWgoiAxuha7cArGaSI/cCIgPgoor/CP0XttLGNmhEQGZrABoF6REAREQBERAf//Z",
      date: "June 2022 – Oct 2022",
      desc: "Software AG is an enterprise software and technology company that offers a suite of industry-leading products and solutions in areas such as API management, IoT, and business transformation.",
      descBullets: [
        "I built and integrated multiple APIs for the company's website and mobile app, which resulted in a significant increase in user engagement and revenue.",
        "I conducted thorough testing and debugging of APIs to ensure optimal performance and scalability.",
        "I collaborated with cross-functional teams, including product managers, designers, and QA engineers, to deliver high-quality software solutions.",
        "I implemented agile methodologies to streamline development processes and increase productivity."
      ]
    },
    {
      role: "Front-End Developer",
      company: "Siemens",
      companylogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgckqjCWRl9t8ZQto1_mvR9kuG18M-s1ocygz64KfGZe5ZRNIEFmKGCMfbfAVT1xkFxQ&usqp=CAU",
      date: "May 2020 – May 2022",
      desc: "WebVisit Siemens is a technology company focused on industry, infrastructure, transport, and healthcare.",
      descBullets: [
        "I monitored and improved front-end performance by 15%, documented application changes, and worked on updates. ",
        "Using React.js, I developed the latest user-facing features and built reusable components and front-end libraries for future use.",
        "To automate QA and monitoring of the donor-facing web app, I built an internal tool using NodeJS and Pupeteer.js, which improved CTR by 3%. ",
        "Additionally, I collaborated on the Complexity Score tool, which assigned cost, time, and compliance issues to remove process bottlenecks and increase efficiency by 72%."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Leoni Ag",
      companylogo: "data:image/jpeg;base64,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",
      date: "Jan 2019 – Sep 2019",
      desc: "LEONI is a worldwide supplier of wires, cables, and wiring systems, and also offers development services related to these products. The company primarily serves the automotive industry, providing technically advanced products ranging from single-core automotive cables to fully integrated wiring systems with electronics.",
      descBullets: [
        "I identified user interactions on web-based platforms and utilized React concepts to develop highly-responsive user interface components. ",
        "Additionally, I translated designs and wireframes into high-quality code, writing application interface code using JavaScript and following React.js workflows.",
        "To improve functionality and performance by 50%, I also troubleshooted interface software and debugged application codes."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  title : "Open Source Projects",
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/InteractiveBrokersLogo3.png"),
      projectName: "InteractiveBrokers",
      projectDesc: "I demonstrated my skills in developing user-friendly interfaces, integrating third-party APIs, and building scalable applications that can handle high traffic volume through the development of a data extraction tool. This tool automated the process of collecting financial data from multiple sources, showcasing my ability to create efficient and effective solutions.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.interactivebrokers.com/en/home.php"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: "https://audiocityusa.com/shop/skin/iblueweb2/images/custom/img_main_popular_blowout_deals.webp",
      projectName: "AUDIOCITYusa",
      projectDesc: "I am integrating the Wheel Fitment API (https://developer.wheel-size.com/) to develop a filter system for cars that will allow users to sort through wheel options based on wheel diameter, width, and bolt pattern.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://audiocityusa.com/"
        }
      ]
    },
    {
      image: require("./assets/images/aliexpress.png"),
      projectName: "AliExpress Shopping App",
      projectDesc: "Snap-a-Dot is a web-based preview of the Peridot app that showcases the Illustrious Dot, Kee! With Snap-a-Dot, users can engage with Kee in the real world and capture cute photos while on their adventures. The app was developed using Flutter.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://playperidot.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "ACCOMPLISHMENTS OF PROUD OF ME",

  achievementsCards: [
    {
      title: "The EdTech Cool Tool Awards",
      subtitle:
        "In 2017, Joined the Demos team and participated in the development of the Demos app.",
      image: "https://www.desmos.com/assets/img/frontpage/Homepage-image-L1.png",
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "EdTech List",
          url: "https://www.edtechdigest.com/the-edtech-awards/"
        },{
          name: "Demos Website",
          url: "https://www.desmos.com/"
        },
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: "https://play-lh.googleusercontent.com/ORzWxi-sIo_hCgSa6uzVvBUE4osKUqRVzHnniUUxA2WXD7BnZ95BNVpWFLUTKRyJRdU=w240-h480-rw",
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://developers.google.com/assistant"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: "https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/LvIq0sbMK73ycjb2yomw.svg",
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Final Project",
          url: "https://synergy-fukuyama.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "smooth55dev@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "ura_txtx", //Replace "twitter" with your twitter username without @
  cantDisplayError : "Can't load? Check privacy protection settings",
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

const footer = {
  title : emoji("Made with ❤️ by Anselm Kiler"),
  repo : "https://github.com/saadpasta/developerFolio",
  repoName : "08 / 10 / 2023"
}

export {
  illustration,
  title,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  footer,
  isHireable
};
