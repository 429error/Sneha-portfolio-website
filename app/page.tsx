"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Download, Code, BarChart3, Menu, X, MessageCircle, Calendar, Phone, MapPin, Copy, Check, FileText } from 'lucide-react'
import Image from "next/image"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true) // Default to dark mode
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [selectedContactMethod, setSelectedContactMethod] = useState<string | null>(null)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const frontendProjects = [
    {
      title: "MoodVerse",
      description:
        "A mood-based quote and music recommender web app that delivers personalized content based on selected emotions.",
      techStack: ["HTML", "CSS", "Javascript"],
      liveDemo: "https://429error.github.io/moorverse/",
      github: "https://github.com/429error/moorverse",
    },
    {
      title: "Food App",
      description: "A simple food ordering UI project showcasing menus, cart functionality, and dynamic interactions.",
      techStack: ["React.js", "Vite", "CSS3", "API Integration"],
      liveDemo: "#",
      github: "https://github.com/429error/food-app",
    },
    {
      title: "WordWander",
      description:
        "A dictionary-based word quiz app that fetches word meanings using the Free Dictionary API and challenges users in a fun way.",
      techStack: ["HTML", "API Integration", "CSS3"],
      liveDemo: "https://429error.github.io/wordwander/",
      github: "https://github.com/429error/wordwander",
    },
    {
      title: "Parking Management System (Full stack)",
      description:
        "Built and deployed this web app that allows you to automate and make the parking without any human interference like the traditional parking system.",
      techStack: ["Full Stack", "API Integration", "CSS3"],
      liveDemo: "#",
      github: "https://github.com/theLivingSofa/parking",
    },
  ]

  const dataProjects = [
    {
      title: "House Price Prediction",
      description: "Exploratory data analysis and predictive modelling for housing prices",
      techStack: ["R", "ggplot2", "dplyr"],
      github: "https://github.com/429error/house-price-prediction",
      dashboard: "#",
    },
    {
      title: "Netflix Dashboard",
      description: "Dashboard created using tableau on various insights",
      techStack: ["Tableau", "Dashboard"],
      github: "https://github.com/429error/Netflix-dashboard",
      dashboard: "https://public.tableau.com/views/SnehaRaj1132220430/NETFLIX",
    },
  ]

  const frontendSkills = [
    { name: "HTML5", imageSrc: "/images/html5-logo.png" },
    { name: "CSS3", imageSrc: "/images/css3-logo.png" },
    { name: "JavaScript", imageSrc: "/images/javascript-logo.png" },
    { name: "React", imageSrc: "/images/react-logo.png" },
    { name: "Next.js", imageSrc: "/images/nextjs-logo.png" },
    { name: "Tailwind CSS", imageSrc: "/images/tailwind-logo.png" },
    { name: "REST APIs", imageSrc: "/images/api-logo.png" },
    { name: "Git", imageSrc: "/images/git-logo.png" },
    { name: "Responsive Design", imageSrc: "/images/responsive-logo.png" },
    { name: "API Integration", imageSrc: "/images/api-logo.png" },
  ]

  const dataSkills = [
    { name: "Python", imageSrc: "/images/python-logo.png" },
    { name: "R", imageSrc: "/images/r-logo.png" },
    { name: "SQL", imageSrc: "/images/sql-logo.png" },
    { name: "Tableau", imageSrc: "/images/tableau-logo.png" },
    { name: "Power BI", imageSrc: "/images/powerbi-logo.png" },
    { name: "Pandas", imageSrc: "/images/pandas-logo.png" },
    { name: "NumPy", imageSrc: "/images/numpy-logo.png" },
    { name: "Scikit-learn", imageSrc: "/images/sklearn-logo.png" },
    { name: "Excel", imageSrc: "/images/excel-logo.png" },
    { name: "Statistics", imageSrc: "/images/statistics-logo.png" },
    { name: "Machine Learning", imageSrc: "/images/ml-logo.png" },
    { name: "Data Visualization", imageSrc: "/images/dataviz-logo.png" },
  ]

  const certifications = [
    {
      name: "TATA - Cybersecurity Analyst Job Simulation",
      logoSrc: "/images/tata-logo.png",
      company: "TATA",
      color: "from-red-500 to-orange-500",
    },
    {
      name: "Deloitte Australia - Data Analytics Job Simulation",
      logoSrc: "/images/deloitte-logo.jpeg",
      company: "Deloitte",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "TATA - Data Visualization Job Simulation",
      logoSrc: "/images/tata-logo.png",
      company: "TATA",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Machine Learning With Python",
      logoSrc: "/images/freecodecamp-logo.png",
      company: "FreeCodeCamp",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "J.P.Morgan - Excel Skills Job Simulation",
      logoSrc: "/images/jpmorgan-logo.jpeg",
      company: "J.P.Morgan",
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "Responsive Web Design Developer Certification",
      logoSrc: "/images/freecodecamp-logo.png",
      company: "FreeCodeCamp",
      color: "from-indigo-500 to-purple-500",
    },
    {
      name: "Goldman Sachs - Internal Audit Job Simulation",
      logoSrc: "/images/goldman-logo.png",
      company: "Goldman Sachs",
      color: "from-gray-500 to-slate-500",
    },
  ]

  const handleResumeDownload = () => {
    // Create a direct download link
    const link = document.createElement('a')
    link.href = 'https://drive.google.com/file/d/1wRctvyoUz6u2rmiUSBL8AMgh2p3NwC7p/view?usp=sharing'
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('snehaa.new@gmail.com')
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  const contactMethods = [
    {
      id: 'email',
      title: 'Email Me',
      description: 'Drop me a line anytime',
      icon: Mail,
      action: () => window.open('mailto:snehaa.new@gmail.com', '_blank'),
      gradient: 'from-blue-500 to-cyan-500',
      hoverGlow: 'hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]'
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      description: 'Let\'s connect professionally',
      icon: Linkedin,
      action: () => window.open('https://www.linkedin.com/in/sneha-raj10', '_blank'),
      gradient: 'from-blue-600 to-blue-800',
      hoverGlow: 'hover:shadow-[0_0_40px_rgba(37,99,235,0.4)]'
    },
    {
      id: 'github',
      title: 'GitHub',
      description: 'Check out my code',
      icon: Github,
      action: () => window.open('https://www.github.com/429error', '_blank'),
      gradient: 'from-gray-600 to-gray-800',
      hoverGlow: 'hover:shadow-[0_0_40px_rgba(75,85,99,0.4)]'
    },
    {
      id: 'resume',
      title: 'Download Resume',
      description: 'View my complete profile',
      icon: FileText,
      action: handleResumeDownload,
      gradient: 'from-purple-500 to-pink-500',
      hoverGlow: 'hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              Portfolio
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "projects", "skills", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="capitalize hover:text-white hover:scale-110 transition-all duration-300 text-gray-300 relative group"
                >
                  {section}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="hover:scale-110 transition-transform duration-300 hover:bg-gray-800"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:scale-110 transition-transform duration-300 hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["home", "about", "projects", "skills", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block px-3 py-2 hover:bg-gray-800 rounded-md w-full text-left capitalize hover:scale-105 transition-all duration-300"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="hover:scale-105 transition-transform duration-500">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent hover:from-purple-400 hover:via-pink-300 hover:to-cyan-300 transition-all duration-500">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-pink-400 hover:via-cyan-400 hover:to-purple-400 transition-all duration-500">
                SNEHA RAJ
              </span>
            </h1>
          </div>
          <div className="hover:scale-105 transition-transform duration-500">
            <p className="text-xl sm:text-2xl mb-8 text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-300 hover:to-purple-300 hover:bg-clip-text transition-all duration-500">
              Frontend Developer & Data Analyst
            </p>
          </div>
          <div className="hover:scale-105 transition-transform duration-500">
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-400">
              I create beautiful, functional web experiences and transform data into actionable insights. Passionate
              about bridging the gap between technology and data-driven decision making.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-white to-gray-200 text-black hover:from-cyan-400 hover:to-blue-500 hover:text-white hover:scale-110 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300 shadow-lg"
            >
              Explore My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleResumeDownload}
              className="flex items-center gap-2 border-gray-600 text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:scale-110 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300 bg-transparent"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 hover:scale-105 transition-transform duration-300">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="hover:scale-105 transition-transform duration-500">
              <p className="text-lg mb-6 text-gray-300">
                I'm a passionate tech enthusiast with a love for both frontend development and data analysis. I enjoy
                building clean, responsive web apps using React, Next.js and Tailwind and uncovering insights from data
                using Python, SQL and Tableau. Also i am interested in the management field.
              </p>
              <p className="text-lg mb-6 text-gray-300">
                My unique combination of technical skills allows me to build data-driven applications that not only look
                great but also provide valuable business intelligence. I'm passionate about using technology to solve
                real-world problems and drive informed decision-making.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Problem Solver", "Team Player", "Continuous Learner", "Detail Oriented"].map((quality) => (
                  <Badge
                    key={quality}
                    variant="secondary"
                    className="bg-gray-800 text-white hover:bg-gray-700 hover:scale-110 transition-all duration-300"
                  >
                    {quality}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-2xl border border-gray-800 hover:scale-105 hover:shadow-3xl transition-all duration-500">
              <h3 className="text-xl font-semibold mb-4 text-white">Tech Stack</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2 text-gray-200">
                    <Code className="h-4 w-4" />
                    Frontend Development
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind"].map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2 text-gray-200">
                    <BarChart3 className="h-4 w-4" />
                    Data Analysis
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "R", "SQL", "Tableau", "Pandas", "Excel"].map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 hover:scale-105 transition-transform duration-300">
            Projects
          </h2>

          {/* Frontend Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <Code className="h-6 w-6 text-white" />
              Frontend Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {frontendProjects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-gray-900 border-gray-800 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:scale-105 hover:border-purple-500/50 transition-all duration-500 group overflow-hidden"
                >
                  <CardHeader>
                    <CardTitle className="text-white group-hover:text-gray-200 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-110 transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="border-gray-600 text-gray-300 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 bg-transparent"
                      >
                        <a href={project.liveDemo} className="flex items-center gap-1">
                          <ExternalLink className="h-3 w-3" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="border-gray-600 text-gray-300 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 bg-transparent"
                      >
                        <a href={project.github} className="flex items-center gap-1">
                          <Github className="h-3 w-3" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Data Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <BarChart3 className="h-6 w-6 text-white" />
              Data Analysis Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dataProjects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-gray-900 border-gray-800 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:scale-105 hover:border-purple-500/50 transition-all duration-500 group overflow-hidden"
                >
                  <CardHeader>
                    <CardTitle className="text-white group-hover:text-gray-200 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-110 transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="border-gray-600 text-gray-300 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 bg-transparent"
                      >
                        <a href={project.dashboard} className="flex items-center gap-1">
                          <BarChart3 className="h-3 w-3" />
                          Dashboard
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="border-gray-600 text-gray-300 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 bg-transparent"
                      >
                        <a href={project.github} className="flex items-center gap-1">
                          <Github className="h-3 w-3" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 hover:scale-105 transition-transform duration-300">
            Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-900 border-gray-800 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] hover:scale-105 hover:border-cyan-400/50 transition-all duration-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Code className="h-5 w-5" />
                  Frontend Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {frontendSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 hover:scale-110 transition-all duration-300 group"
                    >
                      <Image
                        src={skill.imageSrc || "/placeholder.svg"}
                        alt={skill.name}
                        width={24}
                        height={24}
                        className="group-hover:scale-125 transition-transform duration-300"
                      />
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] hover:scale-105 hover:border-cyan-400/50 transition-all duration-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <BarChart3 className="h-5 w-5" />
                  Data Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {dataSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 hover:scale-110 transition-all duration-300 group"
                    >
                      <Image
                        src={skill.imageSrc || "/placeholder.svg"}
                        alt={skill.name}
                        width={24}
                        height={24}
                        className="group-hover:scale-125 transition-transform duration-300"
                      />
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 hover:scale-105 transition-transform duration-300">
            Certifications
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="text-center bg-gray-900 border-gray-800 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:scale-110 hover:border-purple-400/50 transition-all duration-500 group overflow-hidden relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
                <CardContent className="pt-6 relative z-10">
                  <div className="mb-4 flex justify-center">
                    <Image
                      src={cert.logoSrc || "/placeholder.svg"}
                      alt={cert.company}
                      width={48}
                      height={48}
                      className="group-hover:scale-125 transition-transform duration-300 rounded-md object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-white group-hover:text-gray-200 transition-colors duration-300 mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {cert.company}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4 hover:scale-105 transition-transform duration-300">
            Let's Connect
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Ready to collaborate? Choose your preferred way to reach out. I'm always excited to discuss new opportunities and innovative projects.
          </p>
          
          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((method) => {
              const IconComponent = method.icon
              return (
                <Card
                  key={method.id}
                  className={`bg-gray-900 border-gray-800 hover:scale-110 hover:border-purple-400/50 transition-all duration-500 group cursor-pointer overflow-hidden relative ${method.hoverGlow}`}
                  onClick={method.action}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <CardContent className="pt-6 text-center relative z-10">
                    <div className="mb-4 flex justify-center">
                      <div className={`p-3 rounded-full bg-gradient-to-br ${method.gradient} group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-white group-hover:text-gray-200 transition-colors duration-300 mb-2">
                      {method.title}
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {method.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Quick Contact Info */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-900 border-gray-800 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] hover:scale-105 hover:border-cyan-400/50 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Quick Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-cyan-400" />
                    <span className="text-gray-300">snehaa.new@gmail.com</span>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={copyEmail}
                    className="hover:bg-gray-600 transition-colors duration-300"
                  >
                    {copiedEmail ? (
                      <Check className="h-4 w-4 text-green-400" />
                    ) : (
                      <Copy className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
                  <MapPin className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-300">Available for remote work</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
                  <Calendar className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300">Usually responds within 24 hours</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:scale-105 hover:border-purple-400/50 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-white">What I'm Looking For</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Frontend Development Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Data Analysis Opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Full-time Positions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-300">Freelance Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-gray-300">Collaboration & Networking</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
            © 2025 Sneha Raj. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}
