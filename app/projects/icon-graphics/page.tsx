"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Language translations for Icon Graphics page
const translations = {
  en: {
    backToHome: "Back to Home",
    title: "Icon Graphics",
    subtitle: "Portfolio",
    description:
      "Crafting distinctive and functional icon designs that communicate effectively across digital platforms. Each icon is thoughtfully designed to enhance user experience and brand identity.",
    categories: {
      all: "All Projects",
      mobile: "Mobile Icons",
      web: "Web Icons",
      app: "App Icons",
      system: "System Icons",
      brand: "Brand Icons",
    },
    projects: {
      iconDesign: {
        title: "Icon Design",
        category: "Android Mobile",
        description:
          "Developing smartphone icon design with Angry Birds theme. In the process, I conducted idea mapping to determine what visuals I would use for the icon, which of course were adjusted to its function. The design process involved careful consideration of visual hierarchy, color psychology, and user interface standards to create icons that are both aesthetically pleasing and functionally effective.",
        detailedDescription: `This comprehensive icon design project focused on creating a cohesive set of mobile application icons inspired by the popular Angry Birds franchise. The project involved several key phases:

**Research & Concept Development:**
- Analyzed existing Angry Birds visual language and brand guidelines
- Studied mobile icon design trends and platform-specific requirements
- Conducted user research to understand icon recognition patterns

**Design Process:**
- Created initial sketches and wireframes for icon concepts
- Developed a consistent visual style guide including color palette, typography, and iconography rules
- Implemented iterative design improvements based on usability testing

**Technical Implementation:**
- Designed icons in multiple resolutions for various screen densities
- Ensured compliance with Android Material Design guidelines
- Optimized icons for different contexts (launcher, notification, in-app usage)

**Visual Elements:**
- Incorporated signature Angry Birds character expressions and colors
- Maintained visual consistency while adapting to functional requirements
- Applied modern flat design principles with subtle depth and shadow effects

The final deliverable included a complete icon set that successfully bridges entertainment branding with functional mobile interface design, resulting in highly recognizable and user-friendly icons that enhance the overall application experience.`,
      },
    },
    cta: {
      title: "Need Custom Icon Design?",
      description: "Let's create distinctive icons that perfectly represent your brand and enhance user experience",
      button: "Start Your Project",
    },
  },
  id: {
    backToHome: "Kembali ke Beranda",
    title: "Icon Graphics",
    subtitle: "Portofolio",
    description:
      "Menciptakan desain ikon yang khas dan fungsional yang berkomunikasi secara efektif di seluruh platform digital. Setiap ikon dirancang dengan cermat untuk meningkatkan pengalaman pengguna dan identitas merek.",
    categories: {
      all: "Semua Proyek",
      mobile: "Ikon Mobile",
      web: "Ikon Web",
      app: "Ikon Aplikasi",
      system: "Ikon Sistem",
      brand: "Ikon Brand",
    },
    projects: {
      iconDesign: {
        title: "Desain Icon",
        category: "Android Mobile",
        description:
          "Mengembangkan desain Icon smartphone bertemakan angry bird. Dalam prosesnya saya melakukan mapping ide untuk menentukan visual apa saja yang akan saya pakai untuk Icon tersebut yang tentunya disesuaikan dengan fungsinya. Proses desain melibatkan pertimbangan yang cermat terhadap hierarki visual, psikologi warna, dan standar antarmuka pengguna untuk menciptakan ikon yang estetis dan fungsional.",
        detailedDescription: `Proyek desain ikon komprehensif ini berfokus pada pembuatan set ikon aplikasi mobile yang kohesif dengan inspirasi dari franchise Angry Birds yang populer. Proyek ini melibatkan beberapa fase kunci:

**Riset & Pengembangan Konsep:**
- Menganalisis bahasa visual Angry Birds yang ada dan pedoman merek
- Mempelajari tren desain ikon mobile dan persyaratan khusus platform
- Melakukan riset pengguna untuk memahami pola pengenalan ikon

**Proses Desain:**
- Membuat sketsa awal dan wireframe untuk konsep ikon
- Mengembangkan panduan gaya visual yang konsisten termasuk palet warna, tipografi, dan aturan ikonografi
- Menerapkan perbaikan desain iteratif berdasarkan pengujian kegunaan

**Implementasi Teknis:**
- Mendesain ikon dalam berbagai resolusi untuk berbagai kepadatan layar
- Memastikan kepatuhan terhadap pedoman Android Material Design
- Mengoptimalkan ikon untuk berbagai konteks (launcher, notifikasi, penggunaan dalam aplikasi)

**Elemen Visual:**
- Menggabungkan ekspresi dan warna karakter khas Angry Birds
- Mempertahankan konsistensi visual sambil beradaptasi dengan persyaratan fungsional
- Menerapkan prinsip desain flat modern dengan efek kedalaman dan bayangan yang halus

Hasil akhir mencakup set ikon lengkap yang berhasil menjembatani branding hiburan dengan desain antarmuka mobile fungsional, menghasilkan ikon yang sangat mudah dikenali dan ramah pengguna yang meningkatkan pengalaman aplikasi secara keseluruhan.`,
      },
    },
    cta: {
      title: "Butuh Desain Icon Kustom?",
      description: "Mari buat ikon yang khas dan sempurna mewakili merek Anda serta meningkatkan pengalaman pengguna",
      button: "Mulai Proyek Anda",
    },
  },
}

export default function IconGraphicsProjects() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [language, setLanguage] = useState<"en" | "id">("en")
  const [showDetailedDescription, setShowDetailedDescription] = useState(false)

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
      title: t.projects.iconDesign.title,
      category: "mobile",
      image: "/assets/img/icon.png",
      description: t.projects.iconDesign.description,
      detailedDescription: t.projects.iconDesign.detailedDescription,
      duration: "Design Process",
      software: ["Adobe Illustrator", "Adobe Photoshop"],
      videoUrl: "#",
      categoryDisplay: t.projects.iconDesign.category,
    },
  ]

  const categories = [
    { id: "all", name: t.categories.all },
    { id: "mobile", name: t.categories.mobile },
    { id: "web", name: t.categories.web },
    { id: "app", name: t.categories.app },
    { id: "system", name: t.categories.system },
    { id: "brand", name: t.categories.brand },
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t.title}
            <span className="block text-orange-400">{t.subtitle}</span>
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
                    ? "bg-orange-500 text-white"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredProjects.length > 0 ? (
            <div className="max-w-4xl mx-auto">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Image Section */}
                    <div className="relative h-96 lg:h-full overflow-hidden group">
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
                          className="p-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
                        >
                          <ExternalLink size={24} />
                        </a>
                      </div>
                      <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-2 rounded text-sm">
                        {project.duration}
                      </div>
                      <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-2 rounded text-sm font-medium">
                        {project.categoryDisplay}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex flex-col justify-center">
                      <h3 className="text-3xl font-bold mb-4 text-orange-400">{project.title}</h3>

                      <div className="mb-6">
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {showDetailedDescription ? project.detailedDescription : project.description}
                        </p>

                        <button
                          onClick={() => setShowDetailedDescription(!showDetailedDescription)}
                          className="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
                        >
                          {showDetailedDescription
                            ? language === "en"
                              ? "Show Less"
                              : "Tampilkan Lebih Sedikit"
                            : language === "en"
                              ? "Read More"
                              : "Baca Selengkapnya"}
                        </button>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                          {language === "en" ? "Software Used" : "Software yang Digunakan"}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.software.map((software, index) => (
                            <span
                              key={index}
                              className="px-4 py-2 bg-gray-800 text-sm rounded-full border border-orange-500/20"
                            >
                              {software}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <a
                          href={project.videoUrl}
                          className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center"
                        >
                          {language === "en" ? "View Project" : "Lihat Proyek"}
                        </a>
                        <button
                          onClick={handleEmailClick}
                          className="flex-1 border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                          {language === "en" ? "Discuss Project" : "Diskusi Proyek"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-400">
                {language === "en" ? "No projects in this category" : "Tidak ada proyek dalam kategori ini"}
              </h3>
              <p className="text-gray-500">
                {language === "en" ? "Try selecting a different category" : "Coba pilih kategori yang berbeda"}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.cta.title}</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">{t.cta.description}</p>
          <Button
            onClick={handleEmailClick}
            className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-none font-semibold"
          >
            {t.cta.button}
          </Button>
        </div>
      </section>
    </div>
  )
}
