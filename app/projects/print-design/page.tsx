"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, ExternalLink, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Language translations for Print Design page
const translations = {
  en: {
    backToHome: "Back to Home",
    title: "Print Design",
    subtitle: "Collection",
    description:
      "Crafting tangible design solutions that make lasting impressions. From business cards to large format prints, every piece tells a story.",
    categories: {
      all: "All Projects",
      brochure: "Brochures",
      poster: "Posters",
      menu: "Menus",
      businessCard: "Business Cards",
      magazine: "Magazines",
      packaging: "Packaging",
      invitation: "Invitations",
      report: "Reports",
    },
    cta: {
      title: "Need Professional Print Design?",
      description: "From concept to print-ready files, let's create designs that stand out",
      button: "Request Quote",
    },
  },
  id: {
    backToHome: "Kembali ke Beranda",
    title: "Print Design",
    subtitle: "Koleksi",
    description:
      "Menciptakan solusi desain nyata yang memberikan kesan mendalam. Dari kartu nama hingga cetakan format besar, setiap karya menceritakan sebuah kisah.",
    categories: {
      all: "Semua Proyek",
      brochure: "Brosur",
      poster: "Poster",
      menu: "Menu",
      businessCard: "Kartu Nama",
      magazine: "Majalah",
      packaging: "Kemasan",
      invitation: "Undangan",
      report: "Laporan",
    },
    cta: {
      title: "Butuh Print Design Profesional?",
      description: "Dari konsep hingga file siap cetak, mari buat desain yang menonjol",
      button: "Minta Penawaran",
    },
  },
}

export default function PrintDesignProjects() {
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
      title: "Corporate Brochure",
      category: "brochure",
      image: "/placeholder.svg?height=400&width=600&text=Corporate+Brochure",
      description: "Professional tri-fold brochure design for financial services company",
      dimensions: "A4 Tri-fold",
      software: ["InDesign", "Photoshop"],
      downloadUrl: "#",
    },
    {
      id: 2,
      title: "Event Poster Series",
      category: "poster",
      image: "/placeholder.svg?height=400&width=600&text=Event+Poster",
      description: "Creative poster series for music festival with vibrant color scheme",
      dimensions: "A2 Portrait",
      software: ["Illustrator", "Photoshop"],
      downloadUrl: "#",
    },
    {
      id: 3,
      title: "Restaurant Menu Design",
      category: "menu",
      image: "/placeholder.svg?height=400&width=600&text=Restaurant+Menu",
      description: "Elegant menu design for fine dining restaurant with premium feel",
      dimensions: "A3 Landscape",
      software: ["InDesign", "Illustrator"],
      downloadUrl: "#",
    },
    {
      id: 4,
      title: "Business Card Collection",
      category: "business-card",
      image: "/placeholder.svg?height=400&width=600&text=Business+Cards",
      description: "Modern business card designs for various industries and professions",
      dimensions: "85x55mm",
      software: ["Illustrator", "Photoshop"],
      downloadUrl: "#",
    },
    {
      id: 5,
      title: "Magazine Layout",
      category: "magazine",
      image: "/placeholder.svg?height=400&width=600&text=Magazine+Layout",
      description: "Editorial layout design for lifestyle magazine with clean typography",
      dimensions: "A4 Portrait",
      software: ["InDesign", "Photoshop"],
      downloadUrl: "#",
    },
    {
      id: 6,
      title: "Product Packaging",
      category: "packaging",
      image: "/placeholder.svg?height=400&width=600&text=Product+Packaging",
      description: "Sustainable packaging design for organic skincare product line",
      dimensions: "Custom Box",
      software: ["Illustrator", "Dimension"],
      downloadUrl: "#",
    },
    {
      id: 7,
      title: "Wedding Invitation",
      category: "invitation",
      image: "/placeholder.svg?height=400&width=600&text=Wedding+Invitation",
      description: "Elegant wedding invitation suite with gold foil accents",
      dimensions: "5x7 inches",
      software: ["Illustrator", "Photoshop"],
      downloadUrl: "#",
    },
    {
      id: 8,
      title: "Annual Report",
      category: "report",
      image: "/placeholder.svg?height=400&width=600&text=Annual+Report",
      description: "Comprehensive annual report design with data visualization",
      dimensions: "A4 Portrait",
      software: ["InDesign", "Illustrator"],
      downloadUrl: "#",
    },
  ]

  const categories = [
    { id: "all", name: t.categories.all },
    { id: "brochure", name: t.categories.brochure },
    { id: "poster", name: t.categories.poster },
    { id: "menu", name: t.categories.menu },
    { id: "business-card", name: t.categories.businessCard },
    { id: "magazine", name: t.categories.magazine },
    { id: "packaging", name: t.categories.packaging },
    { id: "invitation", name: t.categories.invitation },
    { id: "report", name: t.categories.report },
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t.title}
            <span className="block text-green-400">{t.subtitle}</span>
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
                    ? "bg-green-500 text-white"
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                    <a
                      href={project.downloadUrl}
                      className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
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
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.cta.title}</h2>
          <p className="text-white/90 text-lg mb-8">{t.cta.description}</p>
          <Button
            onClick={handleEmailClick}
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-none font-semibold"
          >
            {t.cta.button}
          </Button>
        </div>
      </section>
    </div>
  )
}
