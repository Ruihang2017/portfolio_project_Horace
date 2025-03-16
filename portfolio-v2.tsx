"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Code,
  User,
  Briefcase,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Moon,
  Sun,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PortfolioV2() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  // Cambiar tema claro/oscuro
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  // Cambiar sección activa basado en scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Home", icon: <Code size={18} /> },
    { id: "about", label: "About", icon: <User size={18} /> },
    { id: "projects", label: "Projects", icon: <Briefcase size={18} /> },
    { id: "education", label: "Education", icon: <GraduationCap size={18} /> },
    { id: "contact", label: "Contact", icon: <Mail size={18} /> },
  ]

  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "SQL", "Python", "FastAPI", "Prisma", "graphQL", "S3"] },
    { category: "Tool", items: ["Git", "VS Code", "Trae"] },
  ]

  const projects = [
    {
      title: "Management Dashboard",
      description: "a collaborative MERN-stack single-page application designed to address real-world problems by providing a user-focused platform for task management and forum discussions.",
      technologies: ["React", "Node.js", "MongoDB", "GrapQL"],
      image: "/Screenshot 2023-10-30 230129.png?height=200&width=350",
      github: "https://github.com/Ruihang2017/ManagementDashboardV3",
      demo: "https://management-dashboard-3-10095453001b.herokuapp.com/",
    },
    {
      title: "Task Manager",
      description: "A website that allows you to create an account and post task so you and fellow employees can track their progress.",
      technologies: ["JavaScript", "HTML", "CSS", "MySQL", "Sequelize", "Handlebars"],
      image: "/job-flow.png?height=200&width=350",
      github: "https://github.com/Bemonn/JobFlow",
      demo: "https://jobflow-d14d2890d879.herokuapp.com/",
    },
    {
      title: "Weather & Travel App",
      description: "Aplicación que muestra el clima actual y pronóstico utilizando una API externa.",
      technologies: ["JavaScript", "HTML", "CSS"],
      image: "/weather-travel-app.png?height=200&width=350",
      github: "https://github.com/Ruihang2017/NavigateUrWeek",
      demo: "https://shs-peb.github.io/NavigateUrWeek/index.html",
    },
  ]

  const educationAndWork = [
    {
      period: "11/2023 – Present",
      title: "Software Developer",
      institution: "Coates Group – Sydney",
      description: [
        "Developed computer vision-based applications for real-time analytics and decision-making.",
        "Led the development of a socket-based rules engine for event-driven automation.",
        "Built and deployed multiple prototypes as part of a three-person team, taking ownership of key features.",
        "Expanded expertise in Python, FastAPI, Prisma, AWS S3, and various backend libraries."
      ]
    },
    {
      period: "05/2023 – 11/2023",
      title: "Full Stack Web Development (Bootcamp)",
      institution: "University of Sydney",
      description: [
        "Gained hands-on experience with MERN stack (MongoDB, Express, React, Node.js) and SQL-based technologies (MySQL, Sequelize, Handlebars)."
      ]
    },
    {
      period: "04/2022 – 11/2023",
      title: "Design Engineer",
      institution: "Coates Group – Sydney",
      description: [
        "Developed a backend system for a McDonald’s self-ordering KIOSK prototype using Python and ROS2.",
        "Conducted research on customer identification models for AI-driven suggestive selling.",
        "Support the industrial designer with Mechanical engineering experience with FEA."
      ]
    },
    {
      period: "01/2019 – 03/2022",
      title: "Design Engineer",
      institution: "Zumtobel Group – Sydney",
      description: [
        "Design and develop new families based on the target product specifications within the respect of the New Product Development(NPD) process.",
        "Design and develop a luminaire base on customer/project requirements.",
        "Perform all the aspects of the product localisation together with Product Management, Production and Purchasing.",
        "Work with stakeholders (Sales, Customer Service, Product Management, Suppliers) to assess and understand customer or market requirement to develop a finished product.",
        "Ensure timely completion of project to support customer delivery schedule or products launch plans.",
        "Maintains relations with suppliers together with Product Management and Purchasing.",
        "Product Master Data Maintenance(SAP).",
        "Enforcement of the Quality Management System of the Company in accordance with ISO9001 requirements.",
        "Investigation and rectification of quality complaints related to design fault."
      ]
    },
    {
      period: "04/2018 - 01/2019",
      title: "CAD Drafter",
      institution: "MW Toolbox & Trailer PTY LTD - Sydney",
      description: [
        "Customise toolboxes, canopies and trailers using 2D(Autocad) & 3D(SOLIDWORKS).",
        "Nesting and CAM software for sheetmetal cutting.",
        "Developed a stand-alone application(C#.NET) to partially automate the design process."
      ]
    },
    {
      period: "06/2016 - 10/2020",
      title: "Statistician(Part Time)",
      institution: "John Pyne Skin cancer research centre - Sydney",
      description: [
        "Tabulation, statistical analysis of data through the MATLAB and Prism.",
        "Co-author of the 4 published papers."
      ]
    },
    {
      period: "04/2017 - 02/2018",
      title: "Programmer",
      institution: "BigBossDM PTY LTD - Sydney",
      description: [
        "Game Front-end development uses C# and Unity.",
        "Co-author of the 4 published papers."
      ]
    },
    {
      period: "11/2015 - 02/2016",
      title: "Research Internship",
      institution: "University of New South Wales - Sydney",
      description: [
        "Designed and implemented experiments individually which contributed to the overall scope of the project.",
        "Designed an in vitro model for electrode impedance study due to protein adsorption and tested with Cochlear implants."
      ]
    },
    {
      period: "11/2014 - 12/2014",
      title: "Sales Internship",
      institution: "Xian Janssen Pharmaceutical Ltd – Hangzhou – CHINA",
      description: [
        "Designed and implemented experiments individually which contributed to the overall scope of the project.",
        "Designed an in vitro model for electrode impedance study due to protein adsorption and tested with Cochlear implants."
      ]
    },
    {
      period: "2012 – 2017",
      title: "Bachelor (Honours) of Mechatronic/Master of Biomedical Engineering",
      institution: "University of New South Wales - Sydney",
      description: [
        "Achieved high distinction in Solid Mechanics, Thermodynamics and Electronics linear system control.",
        "Thesis topic: Developed a software that will assist the asset/diagnosis of facial paralysis.",
        "2016 Secretary(Design), Engineering World Health.",
        "2014 Secretary(Design), Engineering World Health.",
        "2015 - Taste of Research Summer Scholarships.",
        "2012 - Academic Achievement Awards."
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f172a] text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-indigo-500 flex items-center justify-center text-white font-bold">
              HH
            </div>
            <span className="font-bold text-xl hidden sm:block">HORACE</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeSection === item.id
                    ? "bg-gray-100 dark:bg-gray-800 text-teal-500 dark:text-teal-400"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800/50"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} className="rounded-full">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>

            <Button className="hidden md:flex bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white border-0">
              <a href="#contact">
                Contact me
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white dark:bg-[#0f172a] pt-16"
          >
            <nav className="container mx-auto px-4 py-8 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-gray-100 dark:bg-gray-800">{item.icon}</div>
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <ChevronRight size={20} className="text-gray-400" />
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="order-2 md:order-1"
              >
                <Badge className="mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400 hover:bg-teal-500/20 dark:hover:bg-teal-400/20">
                  Fully Stack Developer
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Hello, I'm {" "}
                  <span className="bg-gradient-to-r from-teal-500 to-indigo-500 bg-clip-text text-transparent">
                    HORACE (RUIHANG) HOU
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Experienced Software Developer & Design Engineer with expertise in full-stack web development
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-gradient-to-r from-teal-500 toF-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white border-0">
                  <a href="#projects">
                    View projects
                  </a> <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  {/* <Button variant="outline" className="border-gray-300 dark:border-gray-700">
                  Download CV
                  </Button> */}
                </div>

                <div className="mt-12 flex gap-4">
                  <a
                    href="https://github.com/Ruihang2017"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ruihang-horace-hou-b9b73099/"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#contact"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="order-1 md:order-2 flex justify-center"
              >
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-teal-500 to-indigo-500 blur-3xl opacity-20 absolute -inset-4"></div>
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-gray-200 dark:border-gray-800 overflow-hidden relative z-10">
                    <img
                      src="/Screenshot 2025-03-16 at 8.15.57 pm.png?height=400&width=400"
                      alt="Tu foto"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400">
                About Me
              </Badge>
              <h3 className="text-2xl font-semibold mb-4">                
                I enjoy building innovative solutions through software and technology.
              </h3>
              {/* <p className="text-gray-600 dark:text-gray-300">
                I enjoy building innovative solutions through software and technology.
              </p> */}
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Professional Summary</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Experienced Software Developer & Design Engineer with a strong background in full-stack web development, 
                  computer vision, and product design. Proficient in Python, JavaScript, React, Node.js, and SQL/NoSQL databases,
                   with hands-on experience in FastAPI, Prisma, AWS S3, and socket-based systems. Passionate about building 
                   scalable applications, solving complex problems, and integrating AI/ML solutions into real-world products.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                    <div className="text-3xl font-bold text-teal-500 dark:text-teal-400 mb-1">1+</div>
                    <div className="text-gray-600 dark:text-gray-300">Years of experience</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                    <div className="text-3xl font-bold text-indigo-500 dark:text-indigo-400 mb-1">5+</div>
                    <div className="text-gray-600 dark:text-gray-300">Completed projects</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">My skills</h3>
                <Tabs defaultValue="Frontend" className="w-full">
                  <TabsList className="grid grid-cols-3 mb-6">
                    {skills.map((skill) => (
                      <TabsTrigger key={skill.category} value={skill.category}>
                        {skill.category}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {skills.map((skill) => (
                    <TabsContent key={skill.category} value={skill.category} className="mt-0">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {skill.items.map((item) => (
                          <div
                            key={item}
                            className="p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center gap-2"
                          >
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500"></div>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400">
              Projects
              </Badge>
              <h2 className="text-3xl font-bold mb-4">My recent work</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Here is a selection of projects I have worked on recently.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden h-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                        <div className="flex gap-3">
                          <a
                            href={project.github}
                            className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                          >
                            <Github size={18} className="text-white" />
                          </a>
                          <a
                            href={project.demo}
                            className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                          >
                            <ExternalLink size={18} className="text-white" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-0"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" className="border-gray-300 dark:border-gray-700">
                View more projects
              </Button>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-gray-100 dark:bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400">
                Education
              </Badge>
              <h2 className="text-2xl font-bold mb-4">My work experience and educational journey</h2>
            </div>

            <div className="max-w-4xl mx-auto">
              {educationAndWork.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 mb-12 last:mb-0"
                >
                  <div className="hidden sm:block pt-1">
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500"></div>
                    </div>
                    {index !== educationAndWork.length - 1 && (
                      <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 ml-6 mt-2"></div>
                    )}
                  </div>

                  <Card className="flex-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <CardContent className="p-6">
                      <Badge className="mb-2 bg-indigo-500/10 text-indigo-500 dark:bg-indigo-400/10 dark:text-indigo-400">
                        {item.period}
                      </Badge>
                      <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-4">{item.institution}</p>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                        {item.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400">
              {/* <a href="#contact"> */}
                Contact  Me
              {/* </a> */}
              </Badge>
              <h3 className="text-2xl font-bold mb-4">Interested in working together or have any questions?</h3>
            </div>

            <div className="max-w-5xl mx-auto">
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="grid md:grid-cols-5">
                  <div className="md:col-span-2 bg-gradient-to-br from-teal-500 to-indigo-500 p-8 text-white">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                    <p className="mb-8 opacity-90">
                      Complete the form and I will get in touch with you as soon as possible.
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-full bg-white/20">
                          <Mail size={20} />
                        </div>
                        <span>ruihang2017@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-full bg-white/20">
                          <Github size={20} />
                        </div>
                        <span>https://github.com/Ruihang2017</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-full bg-white/20">
                          <Linkedin size={20} />
                        </div>
                        <span>https://www.linkedin.com/in/ruihang-horace-hou-b9b73099/</span>
                      </div>
                    </div>

                    <div className="absolute bottom-8 left-8 right-8 opacity-10">
                      <Code size={180} />
                    </div>
                  </div>

                  <div className="md:col-span-3 p-8">
                    <form className="space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
                        />
                      </div>
                      <Button className="w-full bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white border-0">
                        Send message
                      </Button>
                    </form>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-indigo-500 flex items-center justify-center text-white font-bold text-xs">
                HH
              </div>
              <span className="font-bold">Horace</span>
            </div>

            <div className="text-gray-500 dark:text-gray-400 text-sm text-center">
              © {new Date().getFullYear()} Horace. All rights reserved.
            </div>

            <div className="flex gap-4 mt-4 md:mt-0">
              {/* <a
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
              >
                <Mail size={18} />
              </a> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

