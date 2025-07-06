import { useEffect, useRef, useState } from 'react'

function Categories() {
  const categoryImages = import.meta.glob('../assets/categories/*.webp', {
    eager: true,
    as: 'url',
  })

  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      id="Categories"
      ref={ref}
      className={`bg-[#111] relative mx-auto mt-16 mb-24 px-6 py-10 max-w-6xl rounded-xl about-glow transition-opacity duration-1000 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10 border-b border-white/10 pb-2">
        Categories
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
        {Object.entries(categoryImages).map(([path, url], index) => {
          const fileName = path.split('/').pop()?.replace('.webp', '')
          const href = `https://jtinnoventions.com/studyguides/${fileName}.pdf`

          return (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0a1a33] p-2 rounded-md transition-transform hover:scale-105 hover:drop-shadow-lg"
              title={fileName}
            >
              <img
                src={url}
                alt={fileName}
                className="rounded w-full max-w-[140px] sm:max-w-[180px] transition-all duration-300 hover:outline hover:outline-2 hover:outline-blue-400"
              />
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Categories
