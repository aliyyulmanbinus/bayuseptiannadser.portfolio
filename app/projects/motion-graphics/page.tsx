"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Language translations for Motion Graphics page
const translations = {
  en: {
    backToHome: "Back to Home",
    title: "Motion Graphics",
    subtitle: "Portfolio",
    description:
      "Bringing ideas to life through dynamic animations, engaging storytelling, and creative visual effects that captivate audiences.",
    categories: {
      all: "All Projects",
      branding: "Branding",
      explainer: "Explainer Videos",
      social: "Social Media",
      corporate: "Corporate",
      entertainment: "Entertainment",
    },
    cta: {
      title: "Need Motion Graphics for Your Brand?",
      description: "Let's create engaging animations that tell your story",
      button: "Start Your Project",
    },
  },
  id: {
    backToHome: "Kembali ke Beranda",
    title: "Motion Graphics",
    subtitle: "Portofolio",
    description:
      "Menghidupkan ide melalui animasi dinamis, storytelling yang menarik, dan efek visual kreatif yang memikat audiens.",
    categories: {
      all: "Semua Proyek",
      branding: "Branding",
      explainer: "Video Explainer",
      social: "Media Sosial",
      corporate: "Korporat",
      entertainment: "Hiburan",
    },
    cta: {
      title: "Butuh Motion Graphics untuk Brand Anda?",
      description: "Mari buat animasi menarik yang menceritakan kisah Anda",
      button: "Mulai Proyek Anda",
    },
  },
}

export default function MotionGraphicsProjects() {
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
      title: "Brand Animation Logo",
      category: "branding",
      image: "/placeholder.svg?height=400&width=600&text=Logo+Animation",
      description: "Dynamic logo animation for tech startup with modern transitions",
      duration: "0:15",
      software: ["After Effects", "Cinema 4D"],
      videoUrl: "#",
    },
    {
      id: 2,
      title: "Product Explainer Video",
      category: "explainer",
      image: "/placeholder.svg?height=400&width=600&text=Product+Explainer",
      description: "Engaging product explainer video with 2D character animation",
      duration: "1:30",
      software: ["After Effects", "Illustrator"],
      videoUrl: "#",
    },
    {
      id: 3,
      title: "Social Media Campaign",
      category: "social",
      image: "/placeholder.svg?height=400&width=600&text=Social+Media",
      description: "Animated social media content for fashion brand campaign",
      duration: "0:30",
      software: ["After Effects", "Photoshop"],
      videoUrl: "#",
    },
    {
      id: 4,
      title: "Corporate Presentation",
      category: "corporate",
      image: "/placeholder.svg?height=400&width=600&text=Corporate+Video",
      description: "Professional corporate presentation with data visualization",
      duration: "2:45",
      software: ["After Effects", "Premiere Pro"],
      videoUrl: "#",
    },
    {
      id: 5,
      title: "Music Video Graphics",
      category: "entertainment",
      image: "/placeholder.svg?height=400&width=600&text=Music+Video",
      description: "Creative motion graphics for indie music video production",
      duration: "3:20",
      software: ["After Effects", "Cinema 4D"],
      videoUrl: "#",
    },
    {
      id: 6,
      title: "App Promo Video",
      category: "explainer",
      image: "/placeholder.svg?height=400&width=600&text=App+Promo",
      description: "Mobile app promotional video with UI animation showcase",
      duration: "1:15",
      software: ["After Effects", "Figma"],
      videoUrl: "#",
    },
  ]

  const categories = [
    { id: "all", name: t.categories.all },
    { id: "branding", name: t.categories.branding },
    { id: "explainer", name: t.categories.explainer },
    { id: "social", name: t.categories.social },
    { id: "corporate", name: t.categories.corporate },
    { id: "entertainment", name: t.categories.entertainment },
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t.title}
            <span className="block text-purple-400">{t.subtitle}</span>
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
                    ? "bg-purple-500 text-white"
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
                <div className="relative h-64 overflow-hidden group">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a
                      href={project.videoUrl}
                      className="p-4 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors"
                    >
                      <Play size={24} />
                    </a>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {project.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.software.map((software, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-800 text-sm rounded-full">
                        {software}
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
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.cta.title}</h2>
          <p className="text-white/90 text-lg mb-8">{t.cta.description}</p>
          <Button
            onClick={handleEmailClick}
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-none font-semibold"
          >
            {t.cta.button}
          </Button>
        </div>
      </section>
    </div>
  )
}
