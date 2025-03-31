import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Yuvasri",
  initials: "P",
  url: "https://yuvasri.vercel.app",
  location: "Chennai, Tamil Nadu, India",
  locationLink: "https://www.google.com/maps/place/Chennai",
  description:
    "Full-Stack Developer, AI Enthusiast, No-Code & Low-Code Expert. Passionate about building scalable solutions using modern technologies and AI. Specializing in WordPress, Webflow, Shopify, and headless CMS for seamless and efficient web development.",
  summary:
    "Currently pursuing a degree in Electronics and Communication Engineering, I am a full-stack developer and a no-code/low-code expert specializing in WordPress, Webflow, and Shopify. With experience in AI-powered solutions, scalable web apps, and CMS development, I have built and optimized digital platforms for various industries. I’ve interned at top tech firms, developed AI-driven applications, and hold certifications in cloud computing, automation, and web development. My passion lies in leveraging no-code and low-code tools to accelerate digital transformation and enhance user experiences.",
  avatarUrl: "/me.png",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "React",
    "Next.js",
    "PHP",
    "Typescript",
    "Git",
    "Node.js",
    "Python",
    "Supabase",
    "Express.js",
    "Firebase",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "WordPress",
    "Shopify",
    "Webflow",
    "Wix",
    "Bubble.io",
    "Framer",
    "DraftBit",
    "Github",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "yuvasrip2022@gmail.com",
    tel: "+916374567856",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Yuvasri0304",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "http://linkedin.com/in/yuvasrip",
        icon: Icons.linkedin,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1UvUM-eGRgz8SQUOayPLVkrUy0qUryaHq/view?usp=sharing",
        icon: Icons.resume,

        navbar: true,
      },
      Leetcode: {
        name: "Leetcode",
        url: "https://leetcode.com/u/YUVASRI-04_30/",
        icon: Icons.leetcode,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:yuvasrip2022@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Ajashia Technologies",
      href: "https://ajashiatechnologies.neocities.org/",
      badges: [],
      location: "Hybrid",
      title: "Software Developer Intern",
      logoUrl: "/ajashia.png",
      start: "May 2024",
      end: "Nov 2024",
      description:
        "Developed a robust and scalable CMS platform, optimizing performance and security. Designed and implemented RESTful APIs for seamless content management. Containerized microservices using Docker and deployed on a production Kubernetes cluster. Built dynamic and responsive front-end interfaces using React and TypeScript, ensuring a smooth user experience.",
    },
    {
      company: "DSC Solutions",
      badges: [],
      href: "https://dscsolutions.webflow.io/",
      location: "Remote",
      title: "Wordpress & Shopify Developer Intern",
      logoUrl: "/dscsolutions.png",
      start: "December 2024",
      end: "February 2025",
      description:
        "Built and maintained responsive websites using Webflow and Shopify, ensuring seamless e-commerce experiences. Designed visually appealing layouts in Figma, improving user engagement. Applied SEO best practices to enhance website rankings. Automated workflows with Zapier and other no-code tools to streamline business operations.",
    },
  ],
  education: [
    {
      school: "Rajalakshmi Institue of Technology",
      href: "https://ritchennai.org",
      degree: "B.E. Electronics and Communication Engineering",
      logoUrl: "/ritlogo.jpg",
      start: "2022",
      end: "2026",
    },
    {
      school: "Sethu Bhaskara",
      href: "https://sethubhaskara.co.in/",
      degree: "12th Grade",
      logoUrl: "/schllogo.png",
      start: "2021",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "AgriSoft",
      href: "https://github.com/Yuvasri0304/AgriSoft",
      // dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "AgriSoft is an ERP-CRM app build for Agritech Customized for their requirements. It is a web application that helps farmers manage their crops, livestock, and finances. The app provides features such as crop management, livestock tracking, financial management, and reporting.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://github.com/Yuvasri0304/AgriSoft",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/Yuvasri0304/AgriSoft",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/h.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Gym CRM",
      href: "https://github.com/Yuvasri0304/GYM-CRM",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Developed a custom membership and gym management system using WordPress and WooCommerce, integrating Stripe for payments. Features include attendance tracking, membership automation, financial reporting, and personalized notifications. Enhanced website UI using Figma and improved SEO for higher visibility.",
      technologies: [
        "WordPress",
        "WooCommerce",
        "PHP",
        "Figma",
        "SEO",
        "Stripe",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://github.com/Yuvasri0304/GYM-CRM",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/Yuvasri0304/GYM-CRM",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/chamber.png",
      // video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "TeamSync AI",
      href: "https://github.com/Yuvasri0304/TeamSync-AI",
      // dates: "April 2023 - September 2023",
      active: true,
      description:
        "Responsive Ai powered chat app with project collaborations, file sharing, Group chat and much more.",
      technologies: [
        "Next.js",
        "Typescript",
        "Supabase",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://llm.report",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/Yuvasri0304/TeamSync-AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/chat.png",
      // video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Eventura",
      href: "https://github.com/Yuvasri0304/Eventura",
      // dates: "April 2023 - March 2024",
      active: true,
      description:
        "Built a no-code event planning and digital marketing platform using Webflow and Shopify. Designed event scheduling, staff attendance tracking, and client billing automation. Integrated Figma for UI design and optimized SEO for increased traffic.",
      technologies: [
        "Webflow",
        "Shopify",
        "Figma",
        "SEO",
        "Zapier",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Yuvasri0304/Eventura",
          icon: <Icons.github className="size-3" />,
        },
        // {
        //   type: "Website",
        //   href: "https://github.com/Yuvasri0304/Eventura",
        //   icon: <Icons.globe className="size-3" />,
        // },
      ],
      image: "/digi.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;
