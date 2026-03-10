import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  { icon: 'fa-cogs', title: 'Mecánica General', desc: 'Diagnóstico completo y reparación.', price: 'Desde $80', img: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=400' },
  { icon: 'fa-oil-can', title: 'Cambio de Aceite', desc: 'Lubricantes premium garantizados.', price: 'Desde $25', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400' },
  { icon: 'fa-car-battery', title: 'Eléctrico', desc: 'Baterías, alternador y más.', price: 'Desde $50', img: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=400' },
  { icon: 'fa-tachometer-alt', title: 'Alineación', desc: 'Computarizada y balanceo.', price: 'Desde $35', img: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?w=400' },
  { icon: 'fa-snowflake', title: 'Aire Acondicionado', desc: 'Recarga y mantenimiento.', price: 'Desde $60', img: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=400' },
  { icon: 'fa-screwdriver', title: 'Frenos', desc: 'Pastillas, discos y líquido.', price: 'Desde $45', img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400' },
]

const features = [
  { icon: 'fa-clock', title: 'Atención Rápida', desc: 'Servicio en tiempo record' },
  { icon: 'fa-shield-alt', title: 'Garantía Total', desc: 'En todos los servicios' },
  { icon: 'fa-tools', title: 'Tecnología de Punta', desc: 'Equipo moderno' },
  { icon: 'fa-user-tie', title: 'Expertos Certificados', desc: 'Personal capacitado' },
]

function App() {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const featuresRef = useRef(null)

  useEffect(() => {
    // Hero animations
    gsap.fromTo('.hero-content > *', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, delay: 0.3 }
    )
    gsap.fromTo('.hero-image img',
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.5 }
    )

    // Services scroll animation
    gsap.fromTo('.service-card',
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.1,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 80%',
        }
      }
    )

    // Features animation
    gsap.fromTo('.feature-item',
      { opacity: 0, scale: 0.9 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.5, 
        stagger: 0.1,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 80%',
        }
      }
    )
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-sm z-50 py-4">
        <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 text-white text-2xl font-extrabold no-underline">
            <div className="w-10 h-10 bg-gradient-to-br from-[#e63946] to-[#f4a261] rounded-lg flex items-center justify-center">
              <i className="fas fa-wrench text-white"></i>
            </div>
            <span>AUTO</span><span className="text-[#e63946]">TECH</span>
          </a>
          <nav className="flex items-center gap-6">
            <a href="#servicios" className="text-white no-underline font-medium hover:text-[#e63946] transition">Servicios</a>
            <a href="#contacto" className="bg-[#e63946] text-white px-6 py-2 rounded-full font-semibold no-underline hover:bg-[#c1121f] transition">Cotizar</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section ref={heroRef} className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-5 flex items-center gap-12">
          <div className="hero-content flex-1">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-5">
              Expertos en <span className="text-[#e63946]">Mantenimiento</span> Vehicular
            </h1>
            <p className="text-lg text-gray-400 mb-8">Servicio automotriz de primera categoría con tecnología de vanguardia.</p>
            <a href="#contacto" className="inline-block bg-[#e63946] text-white px-8 py-3 rounded-full font-semibold no-underline hover:bg-[#c1121f] transition mb-8">
              Agendar Cita
            </a>
            <div className="flex gap-10">
              <div><div className="text-4xl font-extrabold text-[#e63946]">15+</div><div className="text-xs text-gray-500 uppercase">Años</div></div>
              <div><div className="text-4xl font-extrabold text-[#e63946]">25K+</div><div className="text-xs text-gray-500 uppercase">Clientes</div></div>
              <div><div className="text-4xl font-extrabold text-[#e63946]">98%</div><div className="text-xs text-gray-500 uppercase">satisfacción</div></div>
            </div>
          </div>
          <div className="hero-image flex-1 hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600" 
              alt="Auto Service" 
              className="w-full max-w-lg rounded-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section ref={servicesRef} id="servicios" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Nuestros Servicios</h2>
          <p className="text-gray-400 text-center mb-12">Soluciones integrales para tu vehículo</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="service-card bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#e63946]/50 transition">
                <img src={service.img} alt={service.title} className="w-full h-40 object-cover rounded-xl mb-4" loading="lazy" />
                <div className="w-12 h-12 bg-[#e63946]/20 rounded-xl flex items-center justify-center text-[#e63946] text-xl mb-3">
                  <i className={`fas fa-${service.icon}`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{service.desc}</p>
                <div className="text-2xl font-bold text-[#f4a261]">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} className="py-20 bg-[#111]">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature, i) => (
              <div key={i} className="feature-item flex items-center gap-4 p-5 bg-white/5 rounded-xl">
                <div className="w-12 h-12 bg-[#e63946] rounded-xl flex items-center justify-center text-white">
                  <i className={`fas fa-${feature.icon}`}></i>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{feature.title}</h4>
                  <p className="text-gray-500 text-xs">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-[#c1121f] to-[#1d3557] text-center">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">¿Listo para Servicio Premium?</h2>
          <p className="mb-8 opacity-90">Agenda tu cita hoy</p>
          <a href="#" className="inline-block bg-white text-[#e63946] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition">
            <i className="fas fa-calendar-check mr-2"></i> Agendar Cita
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <a href="#" className="flex items-center gap-2 text-white text-xl font-extrabold no-underline mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#e63946] to-[#f4a261] rounded-lg flex items-center justify-center">
                  <i className="fas fa-wrench text-white"></i>
                </div>
                <span>AUTO</span><span className="text-[#e63946]">TECH</span>
              </a>
              <p className="text-gray-500 text-sm">Servicio automotriz de primera categoría en Guayaquil.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 no-underline hover:text-white transition">Mecánica General</a></li>
                <li><a href="#" className="text-gray-500 no-underline hover:text-white transition">Cambio de Aceite</a></li>
                <li><a href="#" className="text-gray-500 no-underline hover:text-white transition">Eléctrico</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 no-underline hover:text-white transition">Nosotros</a></li>
                <li><a href="#" className="text-gray-500 no-underline hover:text-white transition">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-500">
                <li><i className="fas fa-map-marker-alt mr-2"></i> Guayaquil</li>
                <li><i className="fas fa-phone mr-2"></i> +593 99 999 9999</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-600">
            © 2026 AutoTech. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a href="https://wa.me/593999999999" target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Contactar por WhatsApp">
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  )
}

export default App
