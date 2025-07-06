import { useEffect, useRef, useState } from 'react'

function Contact() {
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
      id="Contact"
      ref={ref}
      className={`bg-[#111] relative mx-auto mt-16 mb-24 px-6 py-10 max-w-5xl rounded-xl about-glow transition-opacity duration-1000 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10 border-b border-white/10 pb-2">
        Contact
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        <div className="bg-[#0a1a33] p-5 rounded-lg text-white shadow-md hover:shadow-blue-500/20 transition">
          <h2 className="text-xl font-bold mb-1">Haaris Usman Saeed</h2>
          <h3 className="text-sm mb-2 text-blue-300">Event Head</h3>
          <p className="text-sm">+92 316 4699448</p>
          <p className="text-sm break-words">haarisusman20@gmail.com</p>
        </div>

        <div className="bg-[#0a1a33] p-5 rounded-lg text-white shadow-md hover:shadow-blue-500/20 transition">
          <h2 className="text-xl font-bold mb-1">Adil Ali Azfar</h2>
          <h3 className="text-sm mb-2 text-blue-300">Event Head</h3>
          <p className="text-sm">+92 310 0853171</p>
          <p className="text-sm break-words">adilaliazfar@gmail.com</p>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12602.049475408632!2d74.27454330050205!3d31.46684539008887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903e0fc887323%3A0xab96115d544c1796!2sLahore%20Grammar%20School%20for%20Boys%20(LGS%20JT)!5e1!3m2!1sen!2s!4v1725424124783!5m2!1sen!2s"
          width="100%"
          height="400"
          className="rounded-lg border-none shadow-md hover:shadow-blue-500/10 transition w-full max-w-3xl"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <h2 className="text-md font-bold mb-1 mt-4 mx-auto text-center">
        Location: 364-E/1, M. A. Block E 1 Phase 1 Johar Town, Lahore, Punjab 54700
      </h2>

      {/* Social Links */}
      <div className="flex justify-center space-x-8 mt-8 text-4xl sm:text-5xl">
        <a
          href="https://www.instagram.com/jtinnoventions"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:opacity-75"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="mailto:jtinnoventions24@gmail.com"
          className="text-white hover:opacity-75"
          aria-label="Email"
        >
          <i className="fas fa-envelope"></i>
        </a>
        <a
          href="https://www.facebook.com/InnoventionsOfficial/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:opacity-75"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook"></i>
        </a>
      </div>
    </div>
  )
}

export default Contact
