"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Linkedin, Instagram, Youtube, Mail, ExternalLink, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Ganti Custom Behance Icon Component dengan yang lebih sederhana
const BehanceIcon = ({ size = 20 }: { size?: number }) => (
  <div className="font-bold text-sm" style={{ fontSize: `${size * 0.6}px` }}>
    Be
  </div>
)

// Language translations
const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      skills: "Skills",
      services: "Services",
      contact: "Contact Us",
    },
    hero: {
      welcome: "WELCOME TO MY WEBSITE",
      name: "BAYU SEPTIAN\nNADSER.",
      contactUs: "Contact Us",
      followUs: "Follow Us",
      introduction: "Introduction",
      title: "Graphic and Design\nUI/UX Design",
      description:
        "I have experience in the world of design. Whether it's in making designs for print such as flyers and the like, or digital such as website and application designs.",
      learnMore: "Learn More",
    },
    about: {
      title: "Hello There",
      description:
        "I'm Bayu Septian Nadser, from Indonesia. I am a designer who is able to make various products. Starting from simple illustrations, designs for printing purposes such as flyers, posters, infographics, and the like. But now I focus on web and app design or UI/UX design. I have been in the world of design for three years. And what I can do will certainly help you all.",
    },
    skills: {
      title: "SKILLS",
      toolsTitle: "With Tools",
      items: [
        { title: "UI/UX\nDesign" },
        { title: "Motion\nGraphic" },
        { title: "Print\nDesign" },
        { title: "Design\nResearch" },
      ],
    },
    services: {
      title: "Services",
      uiux: {
        title: "UI/UX Design",
        description:
          "Well, I'm a professional graphic designer with more than 1 year experience in this world of UI/UX design. I will work on your projects and you will get some amazing experience in my service. You will be amazed by my quality of work, thats promise!",
        button: "See More Projects",
      },
      motion: {
        title: "Motion Graphics",
        description:
          "Well, I have more than 2 year experience in this world of motion graphics design. I will work on your projects and you will get some amazing experience in my service. You will be amazed by my quality of work, thats promise!",
        button: "See More Projects",
      },
      print: {
        title: "Print Design",
        description:
          "Well, I'm a professional graphic designer with more than 2 year experience in this world of print design (flyer, poster, banner, brochure, etc). I will work on your projects and you will get some amazing experience in my service. You will be amazed by my quality of work, thats promise!",
        button: "See More Projects",
      },
    },
    contact: {
      title: "Let's Work Together",
      description:
        "Ready to bring your ideas to life? Let's discuss your project and create something amazing together.",
      button: "Get In Touch",
    },
    footer: {
      copyright: "© 2024 Bayu Septian Nadser. All rights reserved.",
    },
  },
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang Kami",
      skills: "Keahlian",
      services: "Layanan",
      contact: "Kontak",
    },
    hero: {
      welcome: "SELAMAT DATANG DI WEBSITE SAYA",
      name: "BAYU SEPTIAN\nNADSER.",
      contactUs: "Hubungi Kami",
      followUs: "Ikuti Kami",
      introduction: "Perkenalan",
      title: "Grafis dan Desain\nUI/UX Design",
      description:
        "Saya memiliki pengalaman di dunia desain. Baik itu dalam membuat desain untuk cetak seperti flyer dan sejenisnya, atau digital seperti desain website dan aplikasi.",
      learnMore: "Pelajari Lebih Lanjut",
    },
    about: {
      title: "Halo Semuanya",
      description:
        "Saya Bayu Septian Nadser, dari Indonesia. Saya adalah seorang desainer yang mampu membuat berbagai produk. Mulai dari ilustrasi sederhana, desain untuk keperluan cetak seperti flyer, poster, infografis, dan sejenisnya. Tapi sekarang saya fokus pada desain web dan aplikasi atau UI/UX design. Saya sudah berkecimpung di dunia desain selama tiga tahun. Dan apa yang bisa saya lakukan tentunya akan membantu kalian semua.",
    },
    skills: {
      title: "KEAHLIAN",
      toolsTitle: "Dengan Tools",
      items: [
        { title: "UI/UX\nDesign" },
        { title: "Motion\nGraphic" },
        { title: "Print\nDesign" },
        { title: "Riset\nDesain" },
      ],
    },
    services: {
      title: "Layanan",
      uiux: {
        title: "UI/UX Design",
        description:
          "Saya adalah seorang desainer grafis profesional dengan pengalaman lebih dari 1 tahun di dunia UI/UX design. Saya akan mengerjakan proyek Anda dan Anda akan mendapatkan pengalaman yang luar biasa dalam layanan saya. Anda akan terpukau dengan kualitas kerja saya, itu janji!",
        button: "Lihat Lebih Banyak Proyek",
      },
      motion: {
        title: "Motion Graphics",
        description:
          "Saya memiliki pengalaman lebih dari 2 tahun di dunia motion graphics design. Saya akan mengerjakan proyek Anda dan Anda akan mendapatkan pengalaman yang luar biasa dalam layanan saya. Anda akan terpukau dengan kualitas kerja saya, itu janji!",
        button: "Lihat Lebih Banyak Proyek",
      },
      print: {
        title: "Print Design",
        description:
          "Saya adalah seorang desainer grafis profesional dengan pengalaman lebih dari 2 tahun di dunia print design (flyer, poster, banner, brosur, dll). Saya akan mengerjakan proyek Anda dan Anda akan mendapatkan pengalaman yang luar biasa dalam layanan saya. Anda akan terpukau dengan kualitas kerja saya, itu janji!",
        button: "Lihat Lebih Banyak Proyek",
      },
    },
    contact: {
      title: "Mari Bekerja Sama",
      description:
        "Siap mewujudkan ide Anda? Mari diskusikan proyek Anda dan ciptakan sesuatu yang luar biasa bersama-sama.",
      button: "Hubungi Kami",
    },
    footer: {
      copyright: "© 2024 Bayu Septian Nadser. Semua hak dilindungi.",
    },
  },
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const nameRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [language, setLanguage] = useState<"en" | "id">("en")

  const t = translations[language]

  useEffect(() => {
    // Add smooth scroll behavior to html
    document.documentElement.style.scrollBehavior = "smooth"

    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (nameRef.current && isHovering) {
        const rect = nameRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    if (isHovering) {
      document.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isHovering])

  // Auto slide for UI/UX carousel
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % uiuxProjects.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(slideInterval)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "id" : "en"))
  }

  const handleNavClick = (targetId: string) => {
    setIsMenuOpen(false)

    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      const element = document.getElementById(targetId)
      if (element) {
        const headerHeight = 80 // Height of fixed header
        const elementPosition = element.offsetTop - headerHeight

        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        })
      }
    }, 100)
  }

  const handleEmailClick = () => {
    window.open("https://mail.google.com/mail/u/0/?fs=1&to=bayuseptiann355@gmail.com&tf=cm", "_blank")
  }

  const uiuxProjects = [
    {
      id: 1,
      title: "Nike Campaign Design",
      image: "/placeholder.svg?height=320&width=480&text=Nike+Campaign",
      description: "Modern sports campaign design",
    },
    {
      id: 2,
      title: "Mobile App Interface",
      image: "/placeholder.svg?height=320&width=480&text=Mobile+App+UI",
      description: "Clean mobile application design",
    },
    {
      id: 3,
      title: "E-commerce Website",
      image: "/placeholder.svg?height=320&width=480&text=E-commerce+Design",
      description: "Modern e-commerce platform",
    },
    {
      id: 4,
      title: "Dashboard Design",
      image: "/placeholder.svg?height=320&width=480&text=Dashboard+UI",
      description: "Analytics dashboard interface",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white font-['Poppins',sans-serif]">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-white">BS</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <button onClick={() => handleNavClick("home")} className="hover:text-yellow-400 transition-colors">
              {t.nav.home}
            </button>
            <button onClick={() => handleNavClick("about")} className="hover:text-yellow-400 transition-colors">
              {t.nav.about}
            </button>
            <button onClick={() => handleNavClick("skills")} className="hover:text-yellow-400 transition-colors">
              {t.nav.skills}
            </button>
            <button onClick={() => handleNavClick("services")} className="hover:text-yellow-400 transition-colors">
              {t.nav.services}
            </button>
            <button onClick={() => handleNavClick("contact")} className="hover:text-yellow-400 transition-colors">
              {t.nav.contact}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <Globe size={16} />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-2 py-1 rounded bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <Globe size={14} />
              <span className="text-xs font-medium">{language.toUpperCase()}</span>
            </button>

            <button className="text-white" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4 px-4 py-6">
              <button
                onClick={() => handleNavClick("home")}
                className="hover:text-yellow-400 transition-colors text-left"
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => handleNavClick("about")}
                className="hover:text-yellow-400 transition-colors text-left"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => handleNavClick("skills")}
                className="hover:text-yellow-400 transition-colors text-left"
              >
                {t.nav.skills}
              </button>
              <button
                onClick={() => handleNavClick("services")}
                className="hover:text-yellow-400 transition-colors text-left"
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className="hover:text-yellow-400 transition-colors text-left"
              >
                {t.nav.contact}
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div className="space-y-8">
              <div className="text-sm text-green-400 uppercase tracking-wider">{t.hero.welcome}</div>

              <div
                ref={nameRef}
                className="relative"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="relative">
                    I'm
                    <div
                      className={`absolute w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all duration-300 ease-out ${
                        isHovering ? "opacity-90 scale-110" : "opacity-80 scale-100"
                      }`}
                      style={{
                        left: isHovering ? `${mousePosition.x - 32}px` : "60px",
                        top: isHovering ? `${mousePosition.y - 32}px` : "-8px",
                        transform: isHovering ? "translate(0, 0)" : "translate(0, 0)",
                      }}
                    ></div>
                  </span>
                  <br />
                  {t.hero.name.split("\n").map((line, index) => (
                    <span key={index}>
                      {line}
                      {index === 0 && <br />}
                    </span>
                  ))}
                </h1>
              </div>

              <Button
                onClick={handleEmailClick}
                className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-3 rounded-none font-semibold"
              >
                {t.hero.contactUs}
              </Button>

              {/* Social Media Icons */}
              <div className="space-y-4">
                <div className="text-sm text-gray-400">{t.hero.followUs}</div>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors"
                  >
                    <Youtube size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors"
                  >
                    <BehanceIcon size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-6">
              <div className="text-sm text-gray-400 uppercase tracking-wider">{t.hero.introduction}</div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {t.hero.title.split("\n").map((line, index) => (
                    <span key={index}>
                      {line}
                      {index === 0 && <br />}
                    </span>
                  ))}
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">{t.hero.description}</p>
                <button
                  onClick={() => handleNavClick("about")}
                  className="text-yellow-400 hover:text-yellow-300 flex items-center gap-2"
                >
                  {t.hero.learnMore} <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100 text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">{t.about.title}</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-8">{t.about.description}</p>
            <div className="w-24 h-24 mx-auto">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M20 80 L50 20 L80 80 Z" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="50" cy="60" r="3" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">{t.skills.title}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { icon: "✏️", title: t.skills.items[0].title },
              { icon: "✂️", title: t.skills.items[1].title },
              { icon: "🖼️", title: t.skills.items[2].title },
              { icon: "🔍", title: t.skills.items[3].title },
            ].map((skill, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-gray-800 rounded-lg flex items-center justify-center text-3xl group-hover:bg-yellow-400 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold whitespace-pre-line">{skill.title}</h3>
              </div>
            ))}
          </div>

          {/* Tools Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-12">{t.skills.toolsTitle}</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 max-w-2xl mx-auto">
              {[
                { name: "Figma", icon: "Fg" },
                { name: "Photoshop", icon: "Ps" },
                { name: "Illustrator", icon: "Ai" },
                { name: "After Effects", icon: "Ae" },
                { name: "Premiere", icon: "Pr" },
                { name: "Adobe XD", icon: "Xd" },
              ].map((tool, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gray-800 rounded-lg flex items-center justify-center font-bold text-sm group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-purple-500 transition-all">
                    {tool.icon}
                  </div>
                  <div className="text-xs text-gray-400">{tool.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100 text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">{t.services.title}</h2>

          {/* UI/UX Design */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative bg-gray-300 h-80 rounded-lg overflow-hidden group">
              {/* Carousel Container */}
              <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {uiuxProjects.map((project, index) => (
                  <div key={project.id} className="min-w-full h-full relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={480}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h4 className="text-white font-semibold text-lg">{project.title}</h4>
                      <p className="text-gray-200 text-sm">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                {uiuxProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? "bg-yellow-400" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + uiuxProjects.length) % uiuxProjects.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % uiuxProjects.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Pause on Hover Overlay */}
              <div className="absolute inset-0 bg-transparent hover:bg-black/10 transition-colors"></div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">{t.services.uiux.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{t.services.uiux.description}</p>
              <Link href="/projects/uiux" onClick={() => window.scrollTo(0, 0)}>
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white bg-transparent"
                >
                  {t.services.uiux.button}
                </Button>
              </Link>
            </div>
          </div>

          {/* Motion Graphics */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="lg:order-2">
              <h3 className="text-3xl font-bold mb-4">{t.services.motion.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{t.services.motion.description}</p>
              <Link href="/projects/motion-graphics" onClick={() => window.scrollTo(0, 0)}>
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white bg-transparent"
                >
                  {t.services.motion.button}
                </Button>
              </Link>
            </div>
            <div className="lg:order-1 relative h-80 bg-gradient-to-br from-blue-400 via-purple-500 to-yellow-400 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-black ml-1"></div>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-20 h-20 bg-blue-600 rounded-full opacity-80"></div>
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-purple-600 rounded-full opacity-60"></div>
            </div>
          </div>

          {/* Print Design */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-300 h-80 rounded-lg"></div>
            <div>
              <h3 className="text-3xl font-bold mb-4">{t.services.print.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{t.services.print.description}</p>
              <Link href="/projects/print-design" onClick={() => window.scrollTo(0, 0)}>
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white bg-transparent"
                >
                  {t.services.print.button}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">{t.contact.title}</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">{t.contact.description}</p>
          <Button
            onClick={handleEmailClick}
            className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-3 rounded-none font-semibold"
          >
            {t.contact.button}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  )
}
