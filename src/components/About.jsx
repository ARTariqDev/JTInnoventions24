import { useEffect, useRef, useState } from 'react'

function About() {
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
      id="About"
      ref={ref}
      className={`bg-[#111] relative mx-auto mt-16 mb-24 px-6 py-10 max-w-4xl rounded-xl about-glow transition-opacity duration-1000 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-white mb-6 border-b border-white/10 pb-2">
        About The Event
      </h1>
      <p className="text-white/80 leading-relaxed text-sm sm:text-base text-center">
        Innoventions '25 is a 3-day Science Olympiad organized by LGS JT, showcasing categories
        spanning Science, Mathematics, IT, Robotics, Astronomy and more. <br />
        The event is designed to engage students from all over Pakistan, nurturing their skills in
        creativity, innovation, and critical thinking. <br />
        Building on a legacy of excellence in successful competitive science events, Innoventions
        '25 provides a platform for fostering scientific curiosity and creative problem-solving.
      </p>
    </div>
  )
}

export default About
