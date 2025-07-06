import './index.css'
import Logo from './assets/logo.png'
import About from './components/About'
import Categories from './components/Categories'
import Contact from './components/Contact'

function Particle({ style }) {
  return <div className="particle" style={style} />
}

function ParticleField({ count = 510 }) {
  const particles = Array.from({ length: count }).map((_, i) => {
    const size = Math.random() * 4 + 2
    const top = Math.random() * 100
    const left = Math.random() * 100
    const duration = Math.random() * 1 + 1
    const delay = Math.random() * 10

    const style = {
      width: `${size}px`,
      height: `${size}px`,
      top: `${top}%`,
      left: `${left}%`,
      opacity: 0.1 + Math.random() * 0.4,
      animation: `particle-float ${duration}s ease-in-out ${delay}s infinite alternate`,
    }

    return <Particle key={i} style={style} />
  })

  return <div className="particles-container">{particles}</div>
}

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white font-space scroll-smooth">
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="gradient-background">
          <div className="gradient-sphere sphere-1" />
          <div className="gradient-sphere sphere-2" />
          <div className="gradient-sphere sphere-3" />
        </div>
        <div className="grid-overlay" />
        <div className="glow" />
        <div className="noise-overlay" />
        <ParticleField />
      </div>


      <header className="fixed top-0 left-0 w-full z-[999] bg-black/90 backdrop-blur-md text-gray-100 shadow-md">
        <nav className="flex justify-center flex-wrap gap-4 sm:gap-6 px-4 py-4 text-sm sm:text-lg md:text-xl whitespace-nowrap">
          {['Home', 'About', 'Categories', 'Contact', 'Register'].map((text) =>
            text === 'Register' ? (
              <a
                key={text}
                href="https://forms.gle/G3B6KSaZdkj9Q6AP8"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-200 ease-in-out hover:scale-105 hover:text-blue-400 hover:animate-pulse"
              >
                {text}
              </a>
            ) : (
              <a
                key={text}
                href={`#${text}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(text)
                }}
                className="transition duration-200 ease-in-out hover:scale-105 hover:text-blue-400 hover:animate-pulse"
              >
                {text}
              </a>
            )
          )}
        </nav>

      </header>


      <section id="Home" className="z-10 relative pt-32 flex flex-col items-center text-center px-4">
        <img
          src={Logo}
          alt="Logo"
          className="w-[90vw] max-w-xs sm:max-w-md md:max-w-lg h-auto mb-6 drop-shadow-xl fade-in fade-in-delay-1"
        />
        <div className="max-w-xl fade-in fade-in-delay-2">
          <h1 className="soft-glow typewriter font-space text-4xl sm:text-5xl md:text-6xl text-white max-w-full inline-block">
            JT Innoventions <br /> '25
          </h1>
        </div>

        <div className="mt-8 fade-in fade-in-delay-3">
          <div
            className="animate-bounce flex justify-center cursor-pointer"
            onClick={() => scrollToSection('About')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>


      <section id="About" className="fade-in fade-in-delay-1">
        <About />
      </section>


      <section id="Categories" className="fade-in fade-in-delay-2">
        <Categories />
      </section>

      <section id="Contact" className="fade-in fade-in-delay-3">
        <Contact />
      </section>
      <footer className="w-full px-4 py-6 bg-black text-white text-center text-base sm:text-lg md:text-xl lg:text-md">
        <div className="max-w-5xl mx-auto">
          <p className="whitespace-normal">
            Website by <span className="font-semibold">Abdur Rehman Tariq</span> | © 2025 JT Innoventions. All Rights Reserved.
          </p>
        </div>
      </footer>

    </div>
  )
}

export default App
