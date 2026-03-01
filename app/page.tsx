import Image from "next/image";
import { MdEmail } from "react-icons/md";
import {
  SiAdobephotoshop,
  SiCanva,
  SiCss3,
  SiDavinciresolve,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiMeta,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiInstagram,
  SiLinkedin,
  SiWhatsapp,
  SiWordpress,
} from "react-icons/si";

export default function Home() {
  const skillGroups = [
    {
      title: "UI/UX & Designing",
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
        { label: "API Integration", icon: <SiPostman /> },
      ],
    },
    {
      title: "Database Management",
      items: [
        { label: "MySQL (SQL)", icon: <SiMysql /> },
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
              alt=""
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
      items: [
        { label: "Meta Ads", icon: <SiMeta /> },
      ],
    },
  ];

  const skills = [
    {
      title: "Frontend Stack",
      details:
        "Building responsive interfaces using HTML, CSS, JavaScript, React, and Next.js with modern component structure.",
    },
    {
      title: "Backend Stack",
      details:
        "Developing server-side functionality with Express, NordJS, SQL, MongoDB, and REST API integration for connected web applications.",
    },
    {
      title: "Photoshop",
      details:
        "High-impact visual editing for banners, social creatives, thumbnails, branding assets, and polished web graphics.",
    },
    {
      title: "Video Editing",
      details:
        "Edit short and long-form videos with pacing, transitions, titles, color correction, and social-media-ready outputs.",
    },
    {
      title: "Canva",
      details:
        "Quick design systems, marketing templates, business decks, social content, and client-facing creatives with consistent branding.",
    },
    {
      title: "WordPress",
      details:
        "Custom WordPress setup and page building with responsive structure, plugin configuration, and SEO-friendly content layout.",
    },
    {
      title: "Figma",
      details:
        "Wireframes to high-fidelity UI design, reusable component systems, and developer-friendly design handoff.",
    },
  ];

  const services = [
    "Portfolio & Business Websites",
    "Web App Development",
    "UI/UX Design in Figma",
    "Content & Creative Design",
    "Insta reel edit",
    "Social media handling",
    "Video edit for wedding and clothing brand",
    "Website development",
    "Update old website",
  ];

  const projects = [
    {
      title: "SVIET CSE Department Website",
      details:
        "An academic department portal focused on CSE students, with structured navigation for faculty, notice board, semesters, syllabus resources, and a TechXplore section that highlights student projects and technical growth.",
      link: "https://svietcse.vercel.app/",
      tools: "MERN Stack",
    },
    {
      title: "DigMarkSync Website",
      details:
        "A digital marketing agency site centered on influencer marketing and social media ads, presenting service offerings like SEO, web development, software solutions, creative design, and campaign-led brand growth.",
      link: "https://digmarksync.com/",
      tools: "HTML, CSS, JavaScript",
    },
    {
      title: "FIFO Zone Website",
      details:
        "A brand-focused business website presenting services and offerings with a clean structure, conversion-oriented layout, and clear call-to-action flow.",
      link: "https://fifozone.com/",
      tools: "WordPress",
    },
  ];

  return (
    <div className="portfolio-shell">
      <div className="background-orb orb-a" />
      <div className="background-orb orb-b" />
      <main className="portfolio-main">
        <nav className="top-nav reveal" aria-label="Primary">
          <a href="#about">About Me</a>
          <a href="#skills">Skill</a>
          <a href="#projects">Project</a>
          <a href="#contact-form">Contact Me</a>
        </nav>

        <section className="hero reveal">
          <div className="hero-grid">
            <div className="hero-left">
              <p className="eyebrow">Creative Developer</p>
              <h1>Suraj</h1>
              <p className="hero-email">
                <a href="mailto:suraj@example.com">suraj@example.com</a>
              </p>
              <div className="social-icons" aria-label="Social links">
                <a href="mailto:sunbaby7319@gmail.com" aria-label="Email">
                  <MdEmail />
                </a>
                <a
                  href="https://www.instagram.com/surajchandr1c/?__pwa=1#"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <SiInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/suraj-chandr1c-836917307"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <SiLinkedin />
                </a>
                <a
                  href="https://wa.me/917319742093"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                >
                  <SiWhatsapp />
                </a>
              </div>
            </div>

            <div className="hero-center">
              <div className="photo-frame">
                <Image
                  src="/surajpic.png"
                  alt="Suraj profile"
                  className="profile-photo"
                  width={320}
                  height={410}
                  priority
                />
              </div>
            </div>

            <div className="hero-right">
              <a className="contact-scroll-btn hero-connect-btn" href="#contact-form">
                Connect With Me
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="card-grid reveal delay-1">
          <article className="info-card">
            <h2>About Me</h2>
            <p>
              I am a Computer Science student and full-stack developer focused
              on building scalable, user-centered web applications. I
              specialize in modern frontend and backend technologies, creating
              responsive interfaces and secure, efficient server-side systems. I
              enjoy transforming ideas into reliable digital products that solve
              real problems.
            </p>
            <p>
              Alongside seeking full-time opportunities, I also work as a
              freelance developer, helping clients turn their concepts into
              professional, performance-driven websites. I prioritize clean
              code, strong architecture, and long-term maintainability. My goal
              is to continuously grow as a developer while delivering
              high-quality solutions that create measurable impact for
              businesses and users alike.
            </p>
          </article>
          <article className="info-card">
            <h2>What I Deliver</h2>
            <ul>
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </article>
        </section>

        <section id="skills" className="skills-box reveal delay-2">
          <div className="section-title">
            <p>Stack</p>
            <h2>Skills</h2>
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

        <section id="projects" className="projects reveal delay-3">
          <div className="section-title">
            <p>Selected Work</p>
            <h2>Projects</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.details}</p>
                <p className="project-tools">
                  <strong>Tools:</strong> {project.tools}
                </p>
                {"link" in project ? (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    Visit Website
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="timeline reveal delay-4">
          <div className="section-title">
            <p>How I Work</p>
            <h2>Simple Process, Reliable Delivery</h2>
          </div>
          <div className="timeline-row">
            <div>
              <span>01</span>
              <h3>Understand Goals</h3>
              <p>Project requirement, audience, and platform are finalized.</p>
            </div>
            <div>
              <span>02</span>
              <h3>Create & Build</h3>
              <p>Design and development happen in aligned iterations.</p>
            </div>
            <div>
              <span>03</span>
              <h3>Show to Client</h3>
              <p>Share progress and make changes according to client requirements.</p>
            </div>
            <div>
              <span>04</span>
              <h3>Launch & Support</h3>
              <p>Final delivery, optimization, and post-launch updates.</p>
            </div>
          </div>
        </section>

        <section className="skills reveal delay-3">
          <div className="section-title">
            <p>Detailed Skills</p>
            <h2>Tech + Design + Content</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <article key={skill.title} className="skill-card">
                <h3>{skill.title}</h3>
                <p>{skill.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact-form" className="contact-form reveal delay-4">
          <div className="section-title">
            <p>Get In Touch</p>
            <h2>Connect With Me</h2>
          </div>
          <form className="form-grid">
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label>
              Phone
              <input type="tel" name="phone" placeholder="Your phone number" />
            </label>
            <label className="full-width">
              Requirement
              <select name="requirement" defaultValue="">
                <option value="" disabled>
                  What are you looking for
                </option>
                <option value="frontend">Frontend</option>
                <option value="website">Website</option>
                <option value="ecommerce">Ecommerce</option>
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
              />
            </label>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
    </div>
  );
}
