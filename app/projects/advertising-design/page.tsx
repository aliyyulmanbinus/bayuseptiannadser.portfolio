"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, ExternalLink, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Language translations for Advertising Design page
const translations = {
  en: {
    backToHome: "Back to Home",
    title: "Advertising Design",
    subtitle: "Collection",
    description:
      "Creating impactful advertising campaigns that capture attention and drive engagement. From billboard designs to social media campaigns, every piece is crafted to deliver results.",
    categories: {
      all: "All Projects",
      brochure: "Campaign Design",
      poster: "Branding Design",
      billboard: "Billboard Design",
      social: "Social Media",
    },
    projects: {
      marjan: {
        title: "Marjan Advertisement",
        description:
          "Creating promotional advertisement for Marjan syrup with Ramadan theme implemented into billboard mockup and social media like Instagram and Facebook.",
      },
      pacitan: {
        title: "Pacitan City Branding",
        description:
          "In this design I created Pacitan city branding focused on beach tourism owned by Pacitan city, from logo, supergraphics, colors to implementation on print and digital media.",
      },
    },
    cta: {
      title: "Need Professional Advertising Design?",
      description: "From concept to campaign execution, let's create advertisements that make an impact",
      button: "Request Quote",
    },
  },
  id: {
    backToHome: "Kembali ke Beranda",
    title: "Advertising Design",
    subtitle: "Koleksi",
    description:
      "Menciptakan kampanye iklan yang berdampak untuk menarik perhatian dan meningkatkan engagement. Dari desain billboard hingga kampanye media sosial, setiap karya dibuat untuk memberikan hasil.",
    categories: {
      all: "Semua Proyek",
      brochure: "Desain Kampanye",
      poster: "Desain Branding",
      billboard: "Desain Billboard",
      social: "Media Sosial",
    },
    projects: {
      marjan: {
        title: "Iklan Marjan",
        description:
          "Membuat promosi iklan sirup marjan dengan tema ramadhan yang diimplementasikan kedalam mockup billboard dan sosial media seperti Instagram dan Facebook.",
      },
      pacitan: {
        title: "Branding Kota Pacitan",
        description:
          "Pada desain ini saya membuat branding kota Pacitan yang berfokus pada pariwisata pantai yang dimiliki kota Pacitan, mulai dari logo, supergrafis, warna hingga implementasi pada media cetak maupun digital.",
      },
    },
    cta: {
      title: "Butuh Advertising Design Profesional?",
      description: "Dari konsep hingga eksekusi kampanye, mari buat iklan yang memberikan dampak",
      button: "Minta Penawaran",
    },
  },
}

export default function AdvertisingDesignProjects() {
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
      title: t.projects.marjan.title,
      category: "brochure",
      image: "/assets/img/iklan.png",
      description: t.projects.marjan.description,
      dimensions: "A4 Tri-fold",
      software: ["InDesign", "Photoshop"],
      downloadUrl: "#",
    },
    {
      id: 2,
      title: t.projects.pacitan.title,
      category: "poster",
      image: "/assets/img/iklan1.png",
      description: t.projects.pacitan.description,
      dimensions: "A2 Portrait",
      software: ["Illustrator", "Photoshop"],
      downloadUrl: "#",
    },
  ]

  const categories = [
    { id: "all", name: t.categories.all },
    { id: "brochure", name: t.categories.brochure },
    { id: "poster", name: t.categories.poster },
    { id: "billboard", name: t.categories.billboard },
    { id: "social", name: t.categories.social },
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-red-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t.title}
            <span className="block text-red-400">{t.subtitle}</span>
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
                    ? "bg-red-500 text-white"
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
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden group">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                    <a
                      href={project.downloadUrl}
                      className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                    >
                      <Download size={20} />
                    </a>
                    <a href="#" className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {project.dimensions}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
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
      <section className="py-16 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.cta.title}</h2>
          <p className="text-white/90 text-lg mb-8">{t.cta.description}</p>
          <Button
            onClick={handleEmailClick}
            className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-none font-semibold"
          >
            {t.cta.button}
          </Button>
        </div>
      </section>
    </div>
  )
}
