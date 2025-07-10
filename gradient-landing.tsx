export default function GradientLanding() {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Gradient Blobs Background */}
      <div className="absolute inset-0 z-0">
        {/* Top-left yellow/orange blob */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-80"
          style={{
            background:
              "radial-gradient(circle, rgba(251, 191, 36, 0.8) 0%, rgba(249, 115, 22, 0.6) 50%, transparent 70%)",
            top: "-200px",
            left: "-200px",
            filter: "blur(80px)",
          }}
        ></div>

        {/* Bottom-left yellow/green blob */}
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-70"
          style={{
            background:
              "radial-gradient(circle, rgba(253, 224, 71, 0.7) 0%, rgba(132, 204, 22, 0.5) 50%, transparent 70%)",
            bottom: "-150px",
            left: "-150px",
            filter: "blur(60px)",
          }}
        ></div>

        {/* Bottom-right purple/pink blob */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-75"
          style={{
            background:
              "radial-gradient(circle, rgba(147, 51, 234, 0.8) 0%, rgba(236, 72, 153, 0.6) 50%, transparent 70%)",
            bottom: "-250px",
            right: "-250px",
            filter: "blur(100px)",
          }}
        ></div>

        {/* Additional center-right orange blob */}
        <div
          className="absolute w-[350px] h-[350px] rounded-full opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(249, 115, 22, 0.7) 0%, rgba(239, 68, 68, 0.5) 50%, transparent 70%)",
            top: "50%",
            right: "-100px",
            transform: "translateY(-50%)",
            filter: "blur(70px)",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        {/* Introduction Label */}
        <div className="text-sm text-gray-300 uppercase tracking-wider mb-6 font-medium">Introduction</div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
          Graphic and Design
          <br />
          <span className="text-white">UI/UX Design</span>
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto">
          I have experience in the world of design. Whether it's in making designs for print such as flyers and the
          like, or digital such as website and application designs.
        </p>

        {/* Learn More Link */}
        <a
          href="#"
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 text-lg font-medium transition-colors duration-200 group"
        >
          Learn More
          <svg
            className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  )
}
