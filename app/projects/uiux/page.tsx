"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Language translations for UI/UX page
const translations = {
  en: {
    backToHome: "Back to Home",
    title: "UI/UX Design",
    subtitle: "Projects",
    description:
      "Explore my collection of user interface and user experience design projects, showcasing modern design principles and user-centered solutions.",
    categories: {
      all: "All Projects",
      web: "Web Design",
      mobile: "Mobile Apps",
    },
    cta: {
      title: "Ready to Start Your Project?",
      description: "Let's work together to create amazing user experiences",
      button: "Get In Touch",
    },
  },
  id: {
    backToHome: "Kembali ke Beranda",
    title: "UI/UX Design",
    subtitle: "Proyek",
    description:
      "Jelajahi koleksi proyek desain antarmuka pengguna dan pengalaman pengguna saya, yang menampilkan prinsip desain modern dan solusi yang berpusat pada pengguna.",
    categories: {
      all: "Semua Proyek",
      web: "Desain Web",
      mobile: "Aplikasi Mobile",
    },
    cta: {
      title: "Siap Memulai Proyek Anda?",
      description: "Mari bekerja sama untuk menciptakan pengalaman pengguna yang luar biasa",
      button: "Hubungi Kami",
    },
  },
}

export default function UIUXProjects() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [language, setLanguage] = useState<"en" | "id">("en")

  const t = translations[language]

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "id" : "en"))
  }

  const handleEmailClick = () => {
    window.open("https://mail.google.com/mail/u/0/?fs=1&to=bayuseptiann355@gmail.com&tf=cm", "_blank")
  }

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projects = [
    {
      id: 1,
      title: "E-commerce Mobile App",
      category: "mobile",
      image: "/placeholder.svg?height=400&width=600&text=E-commerce+App",
      description: "Modern e-commerce mobile application with clean UI and smooth user experience",
      technologies: ["Figma", "Prototyping", "User Research"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Banking Dashboard",
      category: "web",
      image: "/placeholder.svg?height=400&width=600&text=Banking+Dashboard",
      description: "Professional banking dashboard with data visualization and user-friendly interface",
      technologies: ["Adobe XD", "UI Design", "Data Visualization"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Food Delivery App",
      category: "mobile",
      image: "/placeholder.svg?height=400&width=600&text=Food+Delivery",
      description: "Intuitive food delivery application with seamless ordering experience",
      technologies: ["Figma", "Prototyping", "UX Research"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "web",
      image: "/placeholder.svg?height=400&width=600&text=Portfolio+Website",
      description: "Creative portfolio website for digital agency with modern design approach",
      technologies: ["Figma", "Web Design", "Responsive Design"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Fitness Tracker App",
      category: "mobile",
      image: "/placeholder.svg?height=400&width=600&text=Fitness+Tracker",
      description: "Health and fitness tracking application with gamification elements",
      technologies: ["Adobe XD", "Mobile UI", "User Experience"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "SaaS Platform",
      category: "web",
      image: "/placeholder.svg?height=400&width=600&text=SaaS+Platform",
      description: "B2B SaaS platform with complex data management and user workflows",
      technologies: ["Figma", "System Design", "Enterprise UX"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  const categories = [
    { id: "all", name: t.categories.all },
    { id: "web", name: t.categories.web },
    { id: "mobile", name: t.categories.mobile },
  ]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-black text-white font-['Poppins',sans-serif]">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="inline-flex items-center text-white hover:text-yellow-400 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            {t.backToHome}
          </Link>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <Globe size={16} />
            <span className="text-sm font-medium">{language.toUpperCase()}</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t.title}
            <span className="block text-yellow-400">{t.subtitle}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t.description}</p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                    <a
                      href={project.liveUrl}
                      className="p-3 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-800 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">{t.cta.title}</h2>
          <p className="text-black/80 text-lg mb-8">{t.cta.description}</p>
          <Button
            onClick={handleEmailClick}
            className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-none font-semibold"
          >
            {t.cta.button}
          </Button>
        </div>
      </section>
    </div>
  )
}
