import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Play, 
  Target, 
  Eye, 
  Layout, 
  Users, 
  Film, 
  Award, 
  TrendingUp, 
  Calendar, 
  DollarSign, 
  Send,
  Globe,
  Camera,
  Clapperboard,
  Video
} from 'lucide-react';

interface SlideProps {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  mockup?: 'hero' | 'about' | 'services' | 'productions';
}

const Mockup = ({ type }: { type: 'hero' | 'about' | 'services' | 'productions' }) => {
  if (type === 'hero') {
    return (
      <div className="w-full h-full bg-black rounded-lg overflow-hidden border border-white/10 shadow-2xl relative group">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
        <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
          <div className="mb-4 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-gold flex items-center justify-center">
              <Globe className="w-4 h-4 text-gold" />
            </div>
            <span className="text-[8px] tracking-[0.2em] font-medium text-white/80 uppercase">Global Intermedia Films</span>
          </div>
          <h1 className="text-xl font-serif mb-2 tracking-tighter">
            <span className="block text-white">Experiencias que reconectan</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#F8C800] to-[#FFD700]">con el pasado y el futuro</span>
          </h1>
          <p className="text-[8px] text-white/60 max-w-[200px] mb-4">Productora audiovisual con visión internacional dedicada a la creación de historias cinematográficas.</p>
          <div className="flex gap-2">
            <div className="px-3 py-1 bg-[#F8C800] text-[#0B0B0B] text-[6px] rounded-full">Ver Producciones</div>
            <div className="px-3 py-1 border border-white/20 text-white text-[6px] rounded-full">Contacto</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'about') {
    return (
      <div className="w-full h-full bg-black rounded-lg overflow-hidden border border-white/10 p-6 flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <div className="w-1/2">
            <h2 className="text-xs font-serif italic text-gold mb-1">Nuestra Esencia</h2>
            <h3 className="text-[10px] font-bold text-white mb-2 uppercase tracking-wider">Visión Internacional</h3>
            <p className="text-[7px] text-white/60 leading-relaxed">Creamos contenido que trasciende fronteras, combinando técnica profesional con narrativa emocional.</p>
          </div>
          <div className="w-1/2 aspect-square rounded-lg bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80')] bg-cover bg-center border border-gold/20"></div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 bg-zinc-900 rounded border border-white/5">
            <div className="text-gold text-[10px] font-bold">15+</div>
            <div className="text-white/40 text-[6px] uppercase">Años de Trayectoria</div>
          </div>
          <div className="p-2 bg-zinc-900 rounded border border-white/5">
            <div className="text-gold text-[10px] font-bold">200+</div>
            <div className="text-white/40 text-[6px] uppercase">Proyectos Exitosos</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'services') {
    return (
      <div className="w-full h-full bg-black rounded-lg overflow-hidden border border-white/10 p-6">
        <h2 className="text-[10px] font-bold text-white mb-4 uppercase tracking-[0.2em] text-center">Nuestros Servicios</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: Video, title: 'Cine' },
            { icon: Camera, title: 'Publicidad' },
            { icon: Clapperboard, title: 'Post' },
            { icon: Globe, title: 'Distribución' }
          ].map((s, i) => (
            <div key={i} className="p-3 bg-zinc-900/50 rounded-xl border border-white/5 flex flex-col items-center text-center">
              <s.icon className="w-4 h-4 text-gold mb-2" />
              <div className="text-[8px] font-bold text-white uppercase">{s.title}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'productions') {
    return (
      <div className="w-full h-full bg-black rounded-lg overflow-hidden border border-white/10 p-4">
        <div className="grid grid-cols-3 gap-2 h-full">
          <div className="col-span-2 row-span-2 rounded-lg bg-[url('https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80')] bg-cover bg-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-2 left-2">
              <div className="text-[5px] text-gold uppercase">Largometraje</div>
              <div className="text-[8px] font-bold text-white">Sombras del Destino</div>
            </div>
          </div>
          <div className="rounded-lg bg-[url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80')] bg-cover bg-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>
          <div className="rounded-lg bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80')] bg-cover bg-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default function Presentation({ onClose }: { onClose: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: SlideProps[] = [
    {
      title: "Propuesta de Desarrollo Web",
      subtitle: "GLOBAL INTERMEDIA FILMS",
      content: (
        <div className="flex flex-col items-center text-center">
          <p className="text-white/60 max-w-lg mb-8">Diseño y desarrollo de una plataforma digital para la exhibición cinematográfica y posicionamiento de la productora.</p>
          <div className="w-full max-w-md aspect-video">
            <Mockup type="hero" />
          </div>
        </div>
      )
    },
    {
      title: "El desafío digital",
      content: (
        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-white/70 leading-relaxed">Actualmente, una productora audiovisual necesita una presencia digital sólida que le permita exhibir su trabajo y generar nuevas oportunidades.</p>
            <ul className="space-y-4">
              {[
                "Mostrar el portafolio audiovisual",
                "Posicionar la productora",
                "Facilitar contacto con aliados",
                "Construir reputación internacional"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/90">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-video">
            <Mockup type="about" />
          </div>
        </div>
      )
    },
    {
      title: "Objetivo del proyecto",
      content: (
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-8">
            <Target className="w-8 h-8 text-gold" />
          </div>
          <p className="text-xl text-white/90 leading-relaxed mb-12">Crear una plataforma digital elegante, cinematográfica y profesional que permita presentar el trabajo de Global Intermedia Films de forma clara y estratégica.</p>
          <div className="grid grid-cols-4 gap-6 w-full">
            {[
              { icon: Play, label: "Exhibir" },
              { icon: Award, label: "Posicionar" },
              { icon: Users, label: "Atraer" },
              { icon: Send, label: "Contactar" }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-zinc-900/50 rounded-2xl border border-white/5">
                <item.icon className="w-6 h-6 text-gold mx-auto mb-3" />
                <div className="text-xs font-bold uppercase tracking-widest">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Concepto visual",
      content: (
        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <p className="text-white/70">Estética cinematográfica moderna donde el contenido audiovisual es el protagonista.</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Diseño minimalista",
                "Fondo oscuro puro",
                "Acentos dorados",
                "Navegación limpia"
              ].map((item, i) => (
                <div key={i} className="p-4 border border-white/10 rounded-xl flex items-center gap-3">
                  <Eye className="w-4 h-4 text-gold" />
                  <span className="text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4">Inspiración</div>
              <div className="flex gap-6 text-white/60 font-serif italic text-xl">
                <span>Netflix</span>
                <span>A24</span>
                <span>Film Studios</span>
              </div>
            </div>
          </div>
          <div className="aspect-square">
            <Mockup type="hero" />
          </div>
        </div>
      )
    },
    {
      title: "Experiencia de usuario",
      content: (
        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="aspect-video">
            <Mockup type="services" />
          </div>
          <div className="space-y-6">
            <p className="text-white/70">Navegación diseñada para explorar fácilmente las producciones y conocer la trayectoria.</p>
            <div className="space-y-4">
              {[
                { title: "Navegación Clara", desc: "Menús intuitivos y directos" },
                { title: "Carga Rápida", desc: "Optimización de assets y video" },
                { title: "Diseño Responsive", desc: "Perfecto en móviles y tablets" },
                { title: "Estructura Estratégica", desc: "Contenido jerarquizado" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <Layout className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{item.title}</div>
                    <div className="text-xs text-white/50">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Estructura del sitio web",
      content: (
        <div className="grid grid-cols-3 gap-6">
          {[
            { title: "Home", items: ["Hero cinematográfico", "Video destacado", "Intro productora"] },
            { title: "Producciones", items: ["Portafolio bento", "Carátulas", "Trailers", "Sinopsis"] },
            { title: "Servicios", items: ["Producción Cine", "Publicidad", "Dirección Creativa"] },
            { title: "Nosotros", items: ["Historia", "Misión/Visión", "Equipo"] },
            { title: "Contacto", items: ["Formulario", "Redes Sociales", "Contacto Directo"] }
          ].map((sec, i) => (
            <div key={i} className="p-6 bg-zinc-900/50 rounded-2xl border border-white/5">
              <div className="text-gold font-bold mb-4 uppercase tracking-widest text-sm">{sec.title}</div>
              <ul className="space-y-2">
                {sec.items.map((item, j) => (
                  <li key={j} className="text-xs text-white/60 flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-white/20" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Exhibición del portafolio",
      content: (
        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-white/70">Presentación visual atractiva para cada producción audiovisual.</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Portadas de impacto",
                "Sinopsis detalladas",
                "Galería de imágenes",
                "Ficha técnica completa"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-zinc-900 rounded-xl">
                  <Film className="w-4 h-4 text-gold" />
                  <span className="text-xs text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-video">
            <Mockup type="productions" />
          </div>
        </div>
      )
    },
    {
      title: "Integración de identidad",
      content: (
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <p className="text-white/70 mb-12">El diseño respetará completamente el manual de marca de Global Intermedia Films.</p>
          <div className="grid grid-cols-2 gap-8 w-full">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold border border-gold-light shadow-[0_0_20px_rgba(248,200,0,0.3)]" />
                <div className="text-left">
                  <div className="text-xs font-bold uppercase">Amarillo Principal</div>
                  <div className="text-[10px] text-white/40">#F8C800</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0B0B0B] border border-white/10" />
                <div className="text-left">
                  <div className="text-xs font-bold uppercase">Negro Secundario</div>
                  <div className="text-[10px] text-white/40">#0B0B0B</div>
                </div>
              </div>
            </div>
            <div className="space-y-6 text-left">
              <div>
                <div className="text-[10px] text-white/40 uppercase mb-1">Tipografía UI</div>
                <div className="text-xl font-sans font-bold">Montserrat</div>
              </div>
              <div>
                <div className="text-[10px] text-white/40 uppercase mb-1">Tipografía Títulos</div>
                <div className="text-xl font-serif italic">Bodoni Moda (TAN HARMONI Style)</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Beneficios del proyecto",
      content: (
        <div className="grid grid-cols-2 gap-6">
          {[
            { title: "Presencia Digital", desc: "Mayor alcance y visibilidad global" },
            { title: "Vitrina Profesional", desc: "Presentación de alto nivel para proyectos" },
            { title: "Posicionamiento", desc: "Imagen de marca internacional y sólida" },
            { title: "Atracción", desc: "Herramienta para captar inversionistas" },
            { title: "Portafolio", desc: "Plataforma centralizada de producciones" }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-zinc-900/50 rounded-2xl border border-white/5 flex gap-4">
              <TrendingUp className="w-6 h-6 text-gold shrink-0" />
              <div>
                <div className="text-sm font-bold text-white mb-1">{item.title}</div>
                <div className="text-xs text-white/50">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Metodología de desarrollo",
      content: (
        <div className="flex justify-between items-start">
          {[
            { phase: "Planeación", items: ["Estructura", "Contenido"] },
            { phase: "Diseño", items: ["Concepto visual", "Diseño UI"] },
            { phase: "Desarrollo", items: ["Programación", "Integración"] },
            { phase: "Lanzamiento", items: ["Publicación", "Optimización"] }
          ].map((p, i) => (
            <div key={i} className="flex flex-col items-center text-center w-1/4 relative">
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 z-10">
                <span className="text-gold font-bold">{i + 1}</span>
              </div>
              {i < 3 && <div className="absolute top-6 left-[60%] w-[80%] h-[1px] bg-white/10" />}
              <div className="text-sm font-bold text-white mb-2 uppercase tracking-widest">{p.phase}</div>
              <ul className="space-y-1">
                {p.items.map((item, j) => (
                  <li key={j} className="text-[10px] text-white/40">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Cronograma",
      content: (
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex items-center justify-between mb-12">
            <div className="text-center">
              <div className="text-white/40 text-[10px] uppercase mb-1">Tiempo Estimado</div>
              <div className="text-3xl font-serif italic text-gold">2 semanas</div>
            </div>
            <Calendar className="w-12 h-12 text-white/10" />
          </div>
          <div className="space-y-4">
            {[
              { week: "Semana 1", task: "Estructura + Diseño + Desarrollo Inicial", progress: 50 },
              { week: "Semana 2", task: "Carga de contenidos + Revisión + Publicación", progress: 100 }
            ].map((w, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-white uppercase tracking-widest">{w.week}</span>
                  <span className="text-white/60">{w.task}</span>
                </div>
                <div className="h-1 bg-zinc-900 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${w.progress}%` }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                    className="h-full bg-gold"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Inversión del proyecto",
      content: (
        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="p-12 bg-zinc-900 rounded-3xl border border-gold/20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <DollarSign className="w-12 h-12 text-white/5" />
            </div>
            <div className="text-white/40 text-xs uppercase mb-4 tracking-[0.2em]">Precio Total</div>
            <div className="text-5xl font-serif italic text-gold mb-4">$900.000 COP</div>
            <div className="text-white/60 text-sm">Inversión única por desarrollo</div>
          </div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase text-white/40 tracking-widest">Incluye</div>
              {[
                "Diseño UI/UX a medida",
                "Desarrollo completo (React)",
                "Montaje y configuración",
                "Optimización visual y SEO"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-white/80">
                  <div className="w-1 h-1 rounded-full bg-gold" />
                  {item}
                </div>
              ))}
            </div>
            <div className="pt-6 border-t border-white/10">
              <div className="text-[10px] text-white/40 uppercase mb-2">No incluye</div>
              <div className="text-xs text-white/60 italic">Dominio y Hosting (gestionado por el cliente)</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Construyamos la presencia digital",
      subtitle: "GLOBAL INTERMEDIA FILMS",
      content: (
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <p className="text-xl text-white/70 leading-relaxed mb-12">Una plataforma digital cinematográfica permitirá mostrar el trabajo de la productora al mundo.</p>
          <button className="px-12 py-5 bg-gold text-[#0B0B0B] font-bold rounded-full hover:bg-gold-light transition-all duration-300 shadow-[0_10px_30px_rgba(248,200,0,0.3)] uppercase tracking-widest text-sm">
            Iniciar proyecto
          </button>
        </div>
      )
    },
    {
      title: "Contacto",
      content: (
        <div className="grid grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="text-gold font-serif italic text-3xl">Hablemos de tu visión.</div>
            <div className="space-y-6">
              {[
                { label: "Website", value: "www.globalproduccionessas.com" },
                { label: "Phone", value: "315 220 3089" },
                { label: "Instagram", value: "@global_intermedia_films" }
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">{item.label}</div>
                  <div className="text-lg text-white font-medium">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-8 bg-zinc-900 rounded-2xl border border-white/5 space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-white/40">Solicitar Información</div>
            <div className="space-y-4">
              <div className="h-10 bg-black/50 rounded border border-white/10" />
              <div className="h-10 bg-black/50 rounded border border-white/10" />
              <div className="h-24 bg-black/50 rounded border border-white/10" />
              <div className="h-10 bg-gold rounded flex items-center justify-center text-[10px] font-bold uppercase tracking-widest">Enviar</div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black flex flex-col font-sans"
    >
      {/* Header */}
      <div className="p-8 flex justify-between items-center border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center">
            <Globe className="w-5 h-5 text-gold" />
          </div>
          <div>
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-white">Global Intermedia Films</div>
            <div className="text-[8px] text-gold uppercase tracking-widest">Propuesta de Desarrollo</div>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Content */}
      <div className="flex-1 relative overflow-hidden flex items-center justify-center p-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-6xl"
          >
            <div className="mb-12">
              <h2 className="text-5xl font-serif text-gold mb-2 tracking-tighter">{slides[currentSlide].title}</h2>
              {slides[currentSlide].subtitle && (
                <div className="text-xs font-bold tracking-[0.3em] text-white/40 uppercase">{slides[currentSlide].subtitle}</div>
              )}
            </div>
            <div className="min-h-[400px]">
              {slides[currentSlide].content}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer / Navigation */}
      <div className="p-8 flex justify-between items-center border-t border-white/5">
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <div 
              key={i} 
              className={`h-1 transition-all duration-300 rounded-full ${i === currentSlide ? 'w-8 bg-gold' : 'w-2 bg-white/10'}`} 
            />
          ))}
        </div>
        <div className="flex gap-4">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 disabled:opacity-20 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="w-12 h-12 rounded-full bg-gold text-[#0B0B0B] flex items-center justify-center hover:bg-gold-light disabled:opacity-20 transition-all shadow-[0_0_20px_rgba(248,200,0,0.3)]"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
