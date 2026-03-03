import type { Metadata } from "next";
import Image from "next/image";
import { sendContactEmail } from "./actions";
import { MdEmail } from "react-icons/md";

import {
  SiAdobephotoshop,
  SiCanva,
  SiCss3,
  SiDavinciresolve,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiGithub,
  SiHtml5,
  SiInstagram,
  SiJavascript,
  SiLinkedin,
  SiMeta,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiWhatsapp,
  SiWordpress,
} from "react-icons/si";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio.example";

export const metadata: Metadata = {
  description:
    "Suraj is a full-stack developer and UI/UX designer creating fast, conversion-focused websites, web apps, and digital creative content.",
};

const skillGroups = [
  {
    title: "UI/UX Design",
    items: [
      { label: "Figma", icon: <SiFigma /> },
      { label: "Photoshop", icon: <SiAdobephotoshop /> },
      { label: "Canva", icon: <SiCanva /> },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      { label: "HTML5", icon: <SiHtml5 /> },
      { label: "CSS3", icon: <SiCss3 /> },
      { label: "JavaScript", icon: <SiJavascript /> },
      { label: "React.js", icon: <SiReact /> },
      { label: "Next.js", icon: <SiNextdotjs /> },
    ],
  },
  {
    title: "Frameworks & Platforms",
    items: [
      { label: "React.js", icon: <SiReact /> },
      { label: "Next.js", icon: <SiNextdotjs /> },
      { label: "Express.js", icon: <SiExpress /> },
      { label: "Node.js", icon: <SiNodedotjs /> },
      { label: "WordPress", icon: <SiWordpress /> },
      { label: "GitHub", icon: <SiGithub /> },
    ],
  },
  {
    title: "Backend Development",
    items: [
      { label: "Node.js", icon: <SiNodedotjs /> },
      { label: "Express.js", icon: <SiExpress /> },
    ],
  },
  {
    title: "APIs & Integration",
    items: [
      { label: "REST API", icon: <SiFastapi /> },
      { label: "Postman", icon: <SiPostman /> },
    ],
  },
  {
    title: "Database Management",
    items: [
      { label: "MySQL", icon: <SiMysql /> },
      { label: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    title: "Video Editing",
    items: [
      {
        label: "CapCut",
        icon: (
          <Image
            src="/capcut.png"
            alt="CapCut logo"
            width={18}
            height={18}
            className="skill-brand-icon"
          />
        ),
      },
      { label: "DaVinci Resolve", icon: <SiDavinciresolve /> },
    ],
  },
  {
    title: "Digital Marketing",
    items: [{ label: "Meta Ads", icon: <SiMeta /> }],
  },
];

const services = [
  "Business and portfolio websites",
  "Modern web app development",
  "UI/UX design in Figma",
  "Landing pages for lead generation",
  "Instagram reel editing",
  "Social media content handling",
  "Video editing for wedding and clothing brands",
  "WordPress website setup and optimization",
  "Legacy website redesign and updates",
];

const projects = [
  {
    title: "SVIET CSE Department Website",
    details:
      "A complete academic portal for CSE students with faculty information, notices, semester resources, syllabus access, and a TechXplore section to showcase student innovation.",
    link: "https://svietcse.vercel.app/",
    tools: "MERN Stack",
  },
  {
    title: "DigMarkSync Website",
    details:
      "A digital marketing website focused on influencer campaigns and social media advertising, with clear service positioning for SEO, software, web, and creative growth solutions.",
    link: "https://digmarksync.com/",
    tools: "HTML, CSS, JavaScript",
  },
  {
    title: "FIFO Zone Website",
    details:
      "A conversion-oriented business website with clear messaging, streamlined navigation, and service-first content structure to improve lead quality.",
    link: "https://fifozone.com/",
    tools: "WordPress",
  },
];

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Suraj",
        url: siteUrl,
        jobTitle: "Full-Stack Developer",
        description:
          "Full-stack developer and UI/UX designer building modern websites, web apps, and digital creative solutions.",
        sameAs: [
          "https://www.instagram.com/surajchandr1c/?__pwa=1#",
          "https://www.linkedin.com/in/suraj-chandr1c-836917307",
        ],
      },
      {
        "@type": "WebSite",
        name: "Suraj Portfolio",
        url: siteUrl,
        description:
          "Portfolio website showcasing full-stack development, UI/UX design, and creative services.",
      },
      {
        "@type": "Service",
        serviceType: "Full-Stack Web Development and UI/UX Design",
        provider: {
          "@type": "Person",
          name: "Suraj",
        },
        areaServed: "Worldwide",
        url: siteUrl,
      },
      {
        "@type": "ItemList",
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.title,
          url: project.link,
        })),
      },
    ],
  };

  return (
    <div className="portfolio-shell">
      <div className="background-orb orb-a" />
      <div className="background-orb orb-b" />
      <main className="portfolio-main">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <nav className="top-nav reveal" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact-form">Contact</a>
        </nav>

        <header className="hero reveal" id="home">
          <div className="hero-grid">
            <div className="hero-left">
              <p className="eyebrow">Full-Stack Developer</p>
              <h1>suraj chandr1c</h1>
              <p className="hero-email">
                <a href="mailto:surajkumar40407@gmail.com">surajkumar40407@gmail.com</a>
              </p>
              <p className="hero-summary">
                I build fast, scalable websites and web apps with clean design,
                strong architecture, and content that drives business results.
              </p>
              <div className="social-icons" aria-label="Social links">
                <a href="mailto:surajkumar40407@gmail.com" aria-label="Email Suraj">
                  <MdEmail />
                </a>
                <a
                  href="https://www.instagram.com/surajchandr1c/?__pwa=1#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Suraj on Instagram"
                >
                  <SiInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/suraj-chandr1c-836917307"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Suraj on LinkedIn"
                >
                  <SiLinkedin />
                </a>
                <a
                  href="https://github.com/surajchandr1c"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Suraj on GitHub"
                >
                  <SiGithub />
                </a>
                <a
                  href="https://wa.me/917319742093"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Message Suraj on WhatsApp"
                >
                  <SiWhatsapp />
                </a>
              </div>
            </div>

            <div className="hero-center">
              <div className="photo-frame">
                <Image
                  src="/surajpic.png"
                  alt="Portrait of Suraj Chandr"
                  className="profile-photo"
                  width={320}
                  height={410}
                  priority
                />
              </div>
            </div>

            <div className="hero-right">
              <a className="contact-scroll-btn hero-connect-btn" href="#contact-form">
                Start a Project
              </a>
            </div>
          </div>
        </header>

        <section id="about" className="card-grid reveal delay-1" aria-labelledby="about-title">
          <article className="info-card">
            <h2 id="about-title">About Me</h2>
            <p>
              I am a Computer Science student and full-stack developer focused on
              building user-centered digital products. My stack includes modern
              frontend frameworks, robust backend architecture, and efficient
              data management to deliver reliable web applications.
            </p>
            <p>
              I also work with clients as a freelance developer, turning ideas
              into professional, performance-focused websites and web apps. I
              prioritize clean code, maintainable structure, and measurable
              business outcomes.
            </p>
          </article>
          <article className="info-card" aria-labelledby="services-title">
            <h2 id="services-title">What I Deliver</h2>
            <ul>
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </article>
        </section>

        <section id="skills" className="skills-box reveal delay-2" aria-labelledby="skills-title">
          <div className="section-title">
            <p>Stack</p>
            <h2 id="skills-title">Technical Skills</h2>
          </div>
          <div className="skills-box-grid" aria-label="Skills grouped by type">
            {skillGroups.map((group) => (
              <article key={group.title} className="skill-group-card">
                <h3>{group.title}</h3>
                <div className="skill-group-items">
                  {group.items.map((item) => (
                    <div key={item.label} className="tech-item" title={item.label}>
                      <span className="tech-icon" aria-hidden="true">
                        {item.icon}
                      </span>
                      <span className="tech-label">{item.label}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="projects reveal delay-3" aria-labelledby="projects-title">
          <div className="section-title">
            <p>Selected Work</p>
            <h2 id="projects-title">Featured Projects</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.details}</p>
                <p className="project-tools">
                  <strong>Tools:</strong> {project.tools}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title}`}
                >
                  View Live Project
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="timeline reveal delay-4" aria-labelledby="process-title">
          <div className="section-title">
            <p>How I Work</p>
            <h2 id="process-title">Simple Process, Reliable Delivery</h2>
          </div>
          <div className="timeline-row">
            <div>
              <span>01</span>
              <h3>Understand Goals</h3>
              <p>Requirements, audience, and scope are finalized.</p>
            </div>
            <div>
              <span>02</span>
              <h3>Design and Build</h3>
              <p>UI and development move together in iterative sprints.</p>
            </div>
            <div>
              <span>03</span>
              <h3>Review and Improve</h3>
              <p>Feedback is applied quickly to align with business needs.</p>
            </div>
            <div>
              <span>04</span>
              <h3>Launch and Support</h3>
              <p>Final deployment, optimization, and post-launch updates.</p>
            </div>
          </div>
        </section>

        <section
          id="contact-form"
          className="contact-form reveal delay-4"
          aria-labelledby="contact-title"
        >
          <div className="section-title">
            <p>Get In Touch</p>
            <h2 id="contact-title">Connect With Me</h2>
          </div>
          <form className="form-grid" action={sendContactEmail}>
            <label>
              Name
              <input
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your name"
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Your email address"
                required
              />
            </label>
            <label>
              Phone
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="Your phone number"
                required
              />
            </label>
            <label>
              City
              <input
                type="text"
                name="city"
                autoComplete="address-level2"
                placeholder="Your city"
                required
              />
            </label>
            <label className="full-width">
              Requirement
              <select name="requirement" defaultValue="" required>
                <option value="" disabled>
                  What are you looking for?
                </option>
                <option value="frontend">Frontend Development</option>
                <option value="website">Website Development</option>
                <option value="ecommerce">Ecommerce Website</option>
                <option value="video-editing">Video Editing</option>
                <option value="social-media-handling">Social Media Handling</option>
                <option value="meta-ads">Meta Ads</option>
              </select>
            </label>
            <label className="full-width">
              Message
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about your project"
                required
              />
            </label>
            <button type="submit">Send Message</button>
            {status === "sent" ? (
              <p className="form-status" role="status">
                Message sent successfully. I will contact you soon.
              </p>
            ) : null}
            {status === "missing" || status === "config-error" ? (
              <p className="form-status form-status-error" role="status">
                Unable to send message right now. Please verify all fields and try again.
              </p>
            ) : null}
          </form>
        </section>
      </main>
    </div>
  );
}
