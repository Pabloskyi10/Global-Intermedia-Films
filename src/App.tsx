import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  Play, 
  ChevronRight, 
  Instagram, 
  Phone, 
  Mail, 
  Video, 
  Camera, 
  Clapperboard, 
  Award,
  Menu,
  X,
  ArrowRight,
  Presentation as PresentationIcon
} from 'lucide-react';
import Presentation from './Presentation';

// --- Components ---

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
    <div className="relative">
      <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(248,200,0,0.4)] group-hover:border-gold-light">
        <Globe className="w-5 h-5 text-gold transition-transform duration-700 group-hover:rotate-[360deg]" />
      </div>
      <div className="absolute -inset-1 rounded-full border border-gold/20 animate-pulse" />
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-sm font-serif font-bold tracking-[0.1em] uppercase text-white group-hover:text-gold transition-colors">Global Intermedia</span>
      <div className="flex items-center gap-2">
        <div className="h-[1px] w-4 bg-gold/50" />
        <span className="text-[9px] font-serif tracking-[0.3em] font-medium text-gold uppercase">Films SAS</span>
      </div>
    </div>
  </div>
);

const SectionHeading = ({ title, subtitle, centered = false }: { title: string, subtitle: string, centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-gold font-serif text-2xl mb-2"
    >
      {subtitle}
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-5xl font-serif font-bold uppercase tracking-tight text-white"
    >
      {title}
    </motion.h2>
  </div>
);

// --- Sections ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Producciones', href: '#productions' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Logo />
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2 border border-gold text-gold text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-gold hover:text-white transition-all duration-300"
          >
            Iniciar Proyecto
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-bold uppercase tracking-widest text-white/70"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
    {/* Background Video/Image */}
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-black/60 z-10" />
      <img 
        src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80" 
        alt="Cinematic Background" 
        className="w-full h-full object-cover scale-105 animate-slow-zoom"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-10" />
    </div>

    <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight tracking-tighter">
          <span className="block text-white">Experiencias que reconectan</span>
          <span className="block gold-text-gradient">con el pasado y el futuro</span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Productora audiovisual con visión internacional dedicada a la creación de historias cinematográficas y contenido de alto impacto.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="group px-10 py-4 bg-gold text-[#0B0B0B] font-bold rounded-full hover:bg-gold-light transition-all duration-300 shadow-[0_10px_30px_rgba(248,200,0,0.3)] flex items-center gap-3 uppercase tracking-widest text-xs">
            Ver Producciones
            <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
          </button>
          <button className="px-10 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-xs">
            Contáctanos
          </button>
        </div>
      </motion.div>
    </div>

    {/* Scroll Indicator */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
    >
      <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      <span className="text-[8px] uppercase tracking-[0.3em] text-white/40">Scroll</span>
    </motion.div>
  </section>
);

const About = () => (
  <section id="about" className="py-32 px-6 bg-black">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-gold/20">
            <img 
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80" 
              alt="Production Studio" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Badge */}
          <div className="absolute -bottom-10 -right-10 bg-zinc-900 p-8 rounded-2xl border border-gold/30 shadow-2xl hidden md:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-gold" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-white">Calidad Premium</div>
                <div className="text-[10px] text-white/40 uppercase">Estándar Internacional</div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="space-y-8">
          <SectionHeading title="Nuestra Esencia" subtitle="Sobre Nosotros" />
          <p className="text-xl text-white/70 font-light leading-relaxed">
            Global Intermedia Films es una productora audiovisual con sede en Colombia y visión global. Nos especializamos en transformar conceptos en realidades cinematográficas, utilizando tecnología de vanguardia y una narrativa profunda.
          </p>
          <p className="text-white/50 leading-relaxed">
            Nuestra misión es elevar el estándar de la producción audiovisual en la región, creando contenidos que no solo entretengan, sino que dejen una huella perdurable en la audiencia.
          </p>
          
          <div className="grid grid-cols-2 gap-8 pt-8">
            <div>
              <div className="text-4xl font-bold text-gold mb-2">15+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/40">Años de Trayectoria</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">200+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/40">Proyectos Exitosos</div>
            </div>
          </div>

          <button className="flex items-center gap-3 text-gold font-bold uppercase tracking-widest text-xs group pt-8">
            Conoce más sobre nosotros
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      icon: Video,
      title: "Producción Cinematográfica",
      desc: "Desarrollo de largometrajes y cortometrajes con estándares internacionales de calidad."
    },
    {
      icon: Camera,
      title: "Publicidad Audiovisual",
      desc: "Spots publicitarios y contenido de marca que conectan emocionalmente con el consumidor."
    },
    {
      icon: Clapperboard,
      title: "Post-Producción",
      desc: "Edición, colorización y efectos visuales de última generación para un acabado perfecto."
    },
    {
      icon: Globe,
      title: "Distribución Global",
      desc: "Estrategias de posicionamiento y distribución en plataformas y festivales internacionales."
    }
  ];

  return (
    <section id="services" className="py-32 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Nuestros Servicios" subtitle="Qué Hacemos" centered />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-black rounded-3xl border border-white/5 hover:border-gold/30 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Productions = () => {
  const projects = [
    { 
      title: "Sombras del Destino", 
      category: "Largometraje", 
      img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80",
      size: "large"
    },
    { 
      title: "Eco de la Selva", 
      category: "Documental", 
      img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80",
      size: "small"
    },
    { 
      title: "Ritmo Urbano", 
      category: "Publicidad", 
      img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80",
      size: "small"
    },
    { 
      title: "Horizonte Infinito", 
      category: "Cortometraje", 
      img: "https://images.unsplash.com/photo-1500628550463-c8881a54d4d4?auto=format&fit=crop&q=80",
      size: "medium"
    },
    { 
      title: "Luz de Neón", 
      category: "Video Musical", 
      img: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80",
      size: "medium"
    }
  ];

  return (
    <section id="productions" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Producciones" subtitle="Portafolio" />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bento-item group ${
                project.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                project.size === 'medium' ? 'md:col-span-2' : ''
              }`}
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-2">{project.category}</div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider">{project.title}</h3>
              </div>
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                  <Play className="w-4 h-4 text-white fill-current" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-32 px-6 bg-zinc-950">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <SectionHeading title="Contáctanos" subtitle="Hablemos" />
          <p className="text-xl text-white/60 mb-12 font-light">
            Estamos listos para llevar tu visión a la pantalla grande. Cuéntanos sobre tu proyecto.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold transition-colors">
                <Phone className="w-6 h-6 text-gold" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Teléfono</div>
                <div className="text-lg font-medium text-white">315 220 3089</div>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold transition-colors">
                <Mail className="w-6 h-6 text-gold" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Email</div>
                <div className="text-lg font-medium text-white">info@globalproducciones.com</div>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold transition-colors">
                <Instagram className="w-6 h-6 text-gold" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Instagram</div>
                <div className="text-lg font-medium text-white">@global_intermedia_films</div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 bg-black rounded-3xl border border-white/5"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 ml-2">Nombre</label>
                <input type="text" className="w-full bg-zinc-900 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 ml-2">Email</label>
                <input type="email" className="w-full bg-zinc-900 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40 ml-2">Asunto</label>
              <input type="text" className="w-full bg-zinc-900 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40 ml-2">Mensaje</label>
              <textarea rows={4} className="w-full bg-zinc-900 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold transition-colors resize-none"></textarea>
            </div>
            <button className="w-full py-5 bg-gold text-white font-bold rounded-xl hover:bg-gold-light transition-all duration-300 uppercase tracking-widest text-xs shadow-lg">
              Enviar Mensaje
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 px-6 bg-black border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
        <Logo />
        <div className="flex gap-8">
          <a href="#" className="text-white/40 hover:text-gold transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="text-white/40 hover:text-gold transition-colors"><Phone className="w-5 h-5" /></a>
          <a href="#" className="text-white/40 hover:text-gold transition-colors"><Mail className="w-5 h-5" /></a>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5">
        <div className="text-[10px] text-white/20 uppercase tracking-[0.2em]">
          © 2026 Global Intermedia Films SAS. Todos los derechos reservados.
        </div>
        <div className="flex gap-8 text-[10px] text-white/20 uppercase tracking-[0.2em]">
          <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  const [showPresentation, setShowPresentation] = useState(false);

  return (
    <div className="relative font-sans selection:bg-gold/30 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Productions />
      <Contact />
      <Footer />

      {/* Presentation Trigger */}
      <button 
        onClick={() => setShowPresentation(true)}
        className="fixed bottom-8 right-8 z-[60] bg-gold text-[#0B0B0B] p-4 rounded-full shadow-2xl hover:bg-gold-light transition-all duration-300 group flex items-center gap-3 overflow-hidden"
      >
        <PresentationIcon className="w-6 h-6" />
        <span className="max-w-0 group-hover:max-w-xs transition-all duration-500 overflow-hidden whitespace-nowrap text-xs font-bold uppercase tracking-widest">
          Ver Propuesta
        </span>
      </button>

      {/* Presentation Overlay */}
      <AnimatePresence>
        {showPresentation && (
          <Presentation onClose={() => setShowPresentation(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
