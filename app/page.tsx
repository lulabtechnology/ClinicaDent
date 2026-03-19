'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { siteConfig, whatsappLink } from '@/lib/site';

const navItems = [
  ['Experiencia', '#experiencia'],
  ['Servicios', '#servicios'],
  ['Proceso', '#proceso'],
  ['Evaluación', '#evaluacion'],
  ['FAQ', '#faq'],
  ['Contacto', '#contacto']
] as const;

const services = [
  ['Ortodoncia con brackets', 'Alineación dental con un plan clínico claro, seguimiento cercano y resultados orientados a función y estética.'],
  ['Ortodoncia invisible', 'Una alternativa discreta y moderna para quienes buscan corregir su sonrisa con una experiencia más estética.'],
  ['Cirugía de terceros molares', 'Evaluación precisa y abordaje seguro para cordales que requieren extracción o manejo especializado.'],
  ['Endodoncia', 'Tratamientos para preservar piezas dentales y aliviar molestias con enfoque cuidadoso y diagnóstico oportuno.'],
  ['Periodoncia', 'Atención integral de tejidos de soporte para proteger la salud de tus encías y la estabilidad de tu sonrisa.']
] as const;

const differentiators = [
  'Más de 28 años de experiencia en ortodoncia con visión clínica integral.',
  'Siempre te atiende el mismo doctor o doctora durante tu proceso.',
  'Tecnología de vanguardia para diagnósticos inmediatos y de calidad.',
  'Atención cálida, cercana y personalizada desde la primera cita.',
  'Compromiso real con resultados funcionales, estéticos y saludables.',
  'Ortodoncista certificado y miembro de la Sociedad Panameña de Ortodoncia.'
] as const;

const processSteps = [
  ['01', 'Agenda tu cita de evaluación', 'El primer contacto se realiza por WhatsApp para coordinar tu valoración de manera simple y rápida.'],
  ['02', 'Estudios diagnósticos en la cita', 'Se realizan radiografías, fotos y estudios necesarios para comprender tu caso con claridad.'],
  ['03', 'Presentación del caso y presupuesto', 'Recibes una explicación clara del diagnóstico, el plan sugerido y la inversión correspondiente.'],
  ['04', 'Inicio y ejecución del tratamiento', 'Comienza el proceso con acompañamiento constante, seguimiento profesional y trato personalizado.'],
  ['05', 'Finalización y retenedores', 'Al finalizar, se confeccionan retenedores para ayudar a preservar los resultados alcanzados.']
] as const;

const prices = [
  {
    title: 'Consulta de ortodoncia básica',
    price: '$50',
    items: ['Radiografía panorámica', 'Radiografía lateral de cráneo', 'Fotos intra y extraorales', 'Plan de tratamiento', 'Presupuesto']
  },
  {
    title: 'Consulta con escaneo digital',
    price: '$80',
    items: ['Radiografía panorámica', 'Radiografía lateral de cráneo', 'Escaneo digital intraoral', 'Simulación de caso', 'Fotos intra y extraorales', 'Plan de tratamiento y presupuesto']
  }
] as const;

const extras = [
  ['Radiografía panorámica', '$25'],
  ['Radiografía lateral de cráneo', '$25'],
  ['Limpieza dental', '$45']
] as const;

const faqItems = [
  ['¿Dónde están ubicados?', 'ORTHOCLINIX está en Edificio Baleares #5, Clínica de Ortodoncia y Odontología General, Vía Argentina, El Cangrejo, en Ciudad de Panamá.'],
  ['¿Cuál es el precio de la consulta de ortodoncia?', 'La consulta de ortodoncia básica tiene un valor de $50 y la consulta con escaneo digital tiene un valor de $80.'],
  ['¿Qué incluye la consulta?', 'Dependiendo del tipo de evaluación, puede incluir radiografía panorámica, radiografía lateral de cráneo, fotos intra y extraorales, plan de tratamiento, presupuesto y, en la versión digital, escaneo intraoral con simulación del caso.'],
  ['¿Cuál es el precio de la limpieza dental?', 'La limpieza dental tiene un costo de $45.'],
  ['¿Cuál es el precio de la radiografía panorámica?', 'La radiografía panorámica tiene un valor de $25. La radiografía lateral de cráneo también cuesta $25.'],
  ['¿Atienden ortodoncia invisible?', 'Sí. ORTHOCLINIX ofrece ortodoncia invisible como una alternativa estética y moderna para alinear la sonrisa.'],
  ['¿Cómo agendo por WhatsApp?', 'Solo debes tocar cualquiera de los botones de WhatsApp en la landing. El enlace ya abre con un mensaje precargado para solicitar tu evaluación.']
] as const;

const gallery = [
  ['/assets/gallery/gallery-01.webp', 'Detalle editorial de ortodoncia', 'lg:col-span-7 lg:row-span-2 min-h-[440px]'],
  ['/assets/gallery/gallery-03.webp', 'Espacio clínico elegante', 'lg:col-span-5 min-h-[260px]'],
  ['/assets/gallery/gallery-05.webp', 'Sonrisa alineada y armónica', 'lg:col-span-5 min-h-[280px]'],
  ['/assets/gallery/gallery-08.webp', 'Composición clínica aspiracional', 'lg:col-span-7 min-h-[340px]']
] as const;

function Reveal({ children, className = '', delay = 0, y = 28 }: { children: React.ReactNode; className?: string; delay?: number; y?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, ease: [0.21, 1.02, 0.35, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionKicker({ children }: { children: React.ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

function LogoMark() {
  return (
    <>
      <div className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-2xl border border-white/70 bg-white/90 shadow-card backdrop-blur">
        <div className="absolute inset-[7px] rounded-[18px] border border-[#232662]/10" />
        <span className="relative font-serif text-xl font-semibold tracking-[-0.03em] text-navy">O</span>
      </div>
      <div className="hidden sm:block">
        <div className="font-serif text-2xl leading-none tracking-[0.08em] text-white">ORTHOCLINIX</div>
        <div className="mt-1 text-[10px] uppercase tracking-[0.28em] text-white/70">Ortodoncia premium</div>
      </div>
    </>
  );
}

function EditorialVideo({
  id,
  title,
  text,
  src,
  poster,
  reversed = false
}: {
  id: string;
  title: string;
  text: string;
  src: string;
  poster: string;
  reversed?: boolean;
}) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  async function toggleVideo() {
    if (!ref.current) return;
    if (ref.current.paused) {
      await ref.current.play();
      setPlaying(true);
    } else {
      ref.current.pause();
      setPlaying(false);
    }
  }

  return (
    <section id={id} className="py-20 sm:py-28">
      <div className="container-shell">
        <div className={`grid gap-7 xl:items-end ${reversed ? 'xl:grid-cols-[1.04fr_0.96fr]' : 'xl:grid-cols-[0.96fr_1.04fr]'}`}>
          <Reveal className={reversed ? 'xl:order-2 max-w-xl pb-2' : 'max-w-xl pb-2'}>
            <SectionKicker>ORTHOCLINIX</SectionKicker>
            <h2 className="section-title mt-6">{title}</h2>
            <p className="mt-5 text-base leading-8 text-slate sm:text-lg">{text}</p>
            <Link href={whatsappLink} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-navy px-6 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5">
              Agendar por WhatsApp
            </Link>
          </Reveal>

          <Reveal delay={0.08} className={reversed ? 'xl:order-1' : ''}>
            <div className="relative overflow-hidden rounded-[2rem] bg-[#ece7e0] shadow-soft">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem]">
                <video ref={ref} className="h-full w-full object-cover" playsInline muted loop preload="metadata" poster={poster} src={src} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10" />
                <button type="button" onClick={toggleVideo} aria-label={playing ? 'Pausar video' : 'Reproducir video'} className="absolute bottom-5 right-5 grid h-16 w-16 place-items-center rounded-full border border-white/70 bg-white/20 text-white backdrop-blur-xl transition hover:scale-105 sm:bottom-6 sm:right-6 sm:h-20 sm:w-20">
                  <span className="ml-1 text-xl sm:text-2xl">{playing ? '❚❚' : '▶'}</span>
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <main className="relative overflow-x-clip">
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'px-3 pt-3' : 'px-0 pt-0'}`}>
        <div className={`mx-auto flex max-w-[1320px] items-center justify-between transition-all duration-300 ${scrolled ? 'glass-panel rounded-3xl border px-4 py-3 shadow-soft sm:px-6' : 'bg-transparent px-5 py-5 sm:px-6 lg:px-8'}`}>
          <a href="#inicio" aria-label="Ir al inicio" className="flex items-center gap-3">
            <LogoMark />
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a key={item[1]} href={item[1]} className={`text-sm transition ${scrolled ? 'text-slate hover:text-navy' : 'text-white/80 hover:text-white'}`}>
                {item[0]}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <Link href={whatsappLink} target="_blank" rel="noreferrer" className={`rounded-full px-5 py-3 text-sm font-medium backdrop-blur transition hover:-translate-y-0.5 ${scrolled ? 'border border-black/10 bg-white/[0.85] text-navy' : 'border border-white/30 bg-white/10 text-white'}`}>
              Agendar evaluación
            </Link>
          </div>

          <button type="button" onClick={() => setMenuOpen(true)} className={`grid h-11 w-11 place-items-center rounded-full border shadow-card lg:hidden ${scrolled ? 'border-black/10 bg-white/90 text-navy' : 'border-white/30 bg-white/10 text-white backdrop-blur'}`} aria-label="Abrir menú">
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
            </span>
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-[60] bg-[#101327]/40 backdrop-blur-sm transition ${menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`} onClick={() => setMenuOpen(false)} />
      <aside className={`fixed right-0 top-0 z-[70] h-full w-[88vw] max-w-sm border-l border-white/60 bg-[#faf7f2]/95 p-6 shadow-soft backdrop-blur-2xl transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3"><div className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-2xl border border-white/70 bg-white/90 shadow-card"><div className="absolute inset-[7px] rounded-[18px] border border-[#232662]/10" /><span className="relative font-serif text-xl font-semibold tracking-[-0.03em] text-navy">O</span></div><div><div className="font-serif text-2xl leading-none tracking-[0.08em] text-navy">ORTHOCLINIX</div><div className="mt-1 text-[10px] uppercase tracking-[0.28em] text-slate">Ortodoncia premium</div></div></div>
          <button type="button" onClick={() => setMenuOpen(false)} className="grid h-10 w-10 place-items-center rounded-full border border-black/10 text-navy" aria-label="Cerrar menú">✕</button>
        </div>
        <nav className="mt-10 space-y-2">
          {navItems.map((item) => (
            <a key={item[1]} href={item[1]} onClick={() => setMenuOpen(false)} className="block rounded-2xl border border-transparent px-4 py-3 text-base text-ink transition hover:border-line hover:bg-white">
              {item[0]}
            </a>
          ))}
        </nav>
        <Link href={whatsappLink} target="_blank" rel="noreferrer" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-navy px-5 py-3.5 text-sm font-medium text-white">Agendar por WhatsApp</Link>
      </aside>

      <section id="inicio" className="relative isolate min-h-[100svh] overflow-hidden">
        <div className="absolute inset-0 hidden md:block">
          <Image src="/assets/hero/hero-desktop.webp" alt="ORTHOCLINIX hero desktop" fill priority sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 md:hidden">
          <Image src="/assets/hero/hero-mobile.webp" alt="ORTHOCLINIX hero mobile" fill priority sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,11,23,0.78)_0%,rgba(7,11,23,0.54)_34%,rgba(7,11,23,0.18)_68%,rgba(7,11,23,0.08)_100%)] md:bg-[linear-gradient(90deg,rgba(7,11,23,0.74)_0%,rgba(7,11,23,0.52)_33%,rgba(7,11,23,0.22)_65%,rgba(7,11,23,0.06)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-[1320px] items-end px-5 pb-10 pt-28 sm:px-6 sm:pb-14 sm:pt-32 lg:px-8 lg:pb-16 lg:pt-36">
          <div className="grid w-full gap-8 xl:grid-cols-[0.9fr_0.1fr] xl:items-end">
            <div className="max-w-[700px]">
              <motion.span initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 backdrop-blur">
                Ortodoncia premium en {siteConfig.city}
              </motion.span>
              <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.08 }} className="mt-7 max-w-[11ch] font-serif text-[3.4rem] leading-[0.9] tracking-[-0.05em] text-white sm:text-[4.8rem] lg:text-[6.4rem] xl:text-[7.2rem]">
                Una sonrisa bien cuidada cambia toda la experiencia.
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.18 }} className="mt-6 max-w-[620px] text-base leading-8 text-white/78 sm:text-lg">
                ORTHOCLINIX combina más de 28 años de experiencia en ortodoncia con atención cálida, tecnología de vanguardia y un proceso claro, cómodo y personalizado desde la evaluación hasta el resultado final.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.28 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-medium text-navy transition hover:-translate-y-0.5">
                  Agendar por WhatsApp
                </Link>
                <a href="#evaluacion" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/15">
                  Ver evaluación
                </a>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.38 }} className="mt-10 grid max-w-[560px] grid-cols-3 gap-5 border-t border-white/15 pt-6">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/55">Experiencia</div>
                  <div className="mt-2 font-serif text-4xl text-white">28+</div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/55">Casos</div>
                  <div className="mt-2 font-serif text-4xl text-white">2000+</div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/55">Reseñas</div>
                  <div className="mt-2 font-serif text-4xl text-white">33 × 5★</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }} className="absolute bottom-4 right-4 hidden max-w-[320px] rounded-[1.6rem] border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md lg:block xl:bottom-8 xl:right-8 xl:p-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-white/70">Atención personalizada</p>
          <p className="mt-3 text-lg leading-7 text-white/95">Siempre te atiende el mismo doctor o doctora, con diagnósticos claros y un tratamiento pensado para ti.</p>
        </motion.div>
      </section>

      <section className="pb-8 pt-10 sm:pb-14 sm:pt-14">
        <div className="container-shell">
          <Reveal className="border-y border-black/[0.08] py-8 sm:py-10">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <p className="font-serif text-[2.35rem] leading-[0.98] tracking-[-0.04em] text-navy sm:text-[3.1rem] lg:text-[3.7rem]">Cálida. Moderna. Segura. Pensada para que la experiencia se sienta distinta desde el primer momento.</p>
              <p className="max-w-2xl text-base leading-8 text-slate sm:ml-auto sm:text-lg">Atención odontológica integral con altos estándares profesionales, tecnología de vanguardia y un entorno que transmite confianza, calma y claridad desde la primera cita.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="experiencia" className="py-16 sm:py-24">
        <div className="container-shell grid gap-8 xl:grid-cols-[1.06fr_0.94fr] xl:items-end">
          <Reveal className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-[#e7e0d8] shadow-soft sm:min-h-[620px]">
            <Image src="/assets/gallery/gallery-02.webp" alt="Ambiente editorial de Orthoclinix" fill sizes="(min-width: 1280px) 52vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
          </Reveal>
          <Reveal delay={0.08} className="max-w-xl xl:pb-12">
            <SectionKicker>La experiencia Orthoclinix</SectionKicker>
            <h2 className="section-title mt-6">Más que corregir una sonrisa: una clínica que busca que todo el proceso se sienta mejor.</h2>
            <p className="mt-5 text-base leading-8 text-slate sm:text-lg">ORTHOCLINIX ofrece atención odontológica integral con trato cálido y personalizado, altos estándares profesionales, tecnología de vanguardia y un entorno pensado para transmitir tranquilidad.</p>
            <p className="mt-5 text-base leading-8 text-slate sm:text-lg">Aquí no solo se trabaja una sonrisa armónica. También se aborda la mordida, la salud dental integral y la prevención de problemas futuros, con una experiencia clara y cercana de principio a fin.</p>
            <Link href={whatsappLink} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-navy px-6 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5">Solicitar evaluación</Link>
          </Reveal>
        </div>
      </section>

      <section id="servicios" className="py-16 sm:py-24">
        <div className="container-shell grid gap-10 xl:grid-cols-[0.86fr_1.14fr] xl:items-start">
          <Reveal className="max-w-md xl:sticky xl:top-28">
            <SectionKicker>Servicios principales</SectionKicker>
            <h2 className="section-title mt-6">Tratamientos presentados con una lectura limpia, premium y fácil de recorrer.</h2>
            <p className="mt-5 text-base leading-8 text-slate sm:text-lg">Se prioriza lo que realmente ayuda a convertir: ortodoncia tradicional y estética, junto con tratamientos complementarios que refuerzan la atención integral.</p>
            <div className="mt-8 overflow-hidden rounded-[1.85rem] bg-[#e7e1d9] shadow-card">
              <div className="relative aspect-[4/5]">
                <Image src="/assets/gallery/gallery-04.webp" alt="Escena clínica editorial" fill sizes="(min-width: 1280px) 28vw, 100vw" className="object-cover" />
              </div>
            </div>
          </Reveal>

          <div className="space-y-1 border-t border-black/10">
            {services.map((service, index) => (
              <Reveal key={service[0]} delay={index * 0.05} className="grid gap-4 border-b border-black/10 py-6 sm:grid-cols-[0.95fr_1.05fr] sm:py-7">
                <h3 className="font-serif text-[2rem] leading-[1.02] tracking-[-0.03em] text-navy sm:text-[2.25rem]">{service[0]}</h3>
                <p className="max-w-xl text-base leading-8 text-slate sm:pt-1">{service[1]}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <EditorialVideo id="video-01" title="Un primer video con espacio suficiente para recorrido, ambiente o explicación clínica." text="Este bloque está pensado para que el material audiovisual se vea grande, limpio y realmente importante dentro de la landing, no como un elemento secundario perdido entre tarjetas." src="/assets/videos/video-01.mp4" poster="/assets/videos/video-01-poster.webp" />

      <section className="py-16 sm:py-24">
        <div className="container-shell">
          <Reveal className="max-w-3xl">
            <SectionKicker>Imágenes seleccionadas</SectionKicker>
            <h2 className="section-title mt-6">Cuatro espacios visuales grandes y mejor distribuidos para que la landing respire mucho más.</h2>
          </Reveal>
          <div className="mt-10 grid auto-rows-fr gap-4 lg:grid-cols-12">
            {gallery.map((item, index) => (
              <Reveal key={item[0]} delay={index * 0.05} className={item[2]}>
                <div className="relative h-full overflow-hidden rounded-[1.85rem] bg-[#ebe5dd] shadow-card">
                  <Image src={item[0]} alt={item[1]} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-700 hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/8" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-shell grid gap-8 xl:grid-cols-[1.02fr_0.98fr] xl:items-end">
          <Reveal className="max-w-xl xl:pb-8">
            <SectionKicker>Por qué elegir Orthoclinix</SectionKicker>
            <h2 className="section-title mt-6">Experiencia, trato humano y consistencia clínica en cada etapa.</h2>
            <div className="mt-8 space-y-5">
              {differentiators.map((item, index) => (
                <div key={item} className="grid grid-cols-[32px_1fr] gap-4 border-b border-black/[0.08] pb-5">
                  <span className="font-serif text-[1.6rem] leading-none text-teal">{String(index + 1).padStart(2, '0')}</span>
                  <p className="text-base leading-8 text-slate">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08} className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-[#e8e2da] shadow-soft sm:min-h-[620px]">
            <Image src="/assets/gallery/gallery-06.webp" alt="Orthoclinix atención clínica premium" fill sizes="(min-width: 1280px) 48vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
          </Reveal>
        </div>
      </section>

      <EditorialVideo id="video-02" title="Un segundo video para testimonios, resultados o una pieza más emocional." text="Aquí el video puede reforzar confianza con pacientes reales, resultados, ambiente humano o el tipo de trato que diferencia a la clínica. El layout le da presencia suficiente para cerrar mejor la conversión." src="/assets/videos/video-02.mp4" poster="/assets/videos/video-02-poster.webp" reversed />

      <section id="proceso" className="py-16 sm:py-24">
        <div className="container-shell grid gap-10 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
          <Reveal className="max-w-md xl:sticky xl:top-28">
            <SectionKicker>Proceso</SectionKicker>
            <h2 className="section-title mt-6">Cinco pasos claros para pasar de la evaluación al resultado con mucha más tranquilidad.</h2>
          </Reveal>
          <div className="space-y-5">
            {processSteps.map((step, index) => (
              <Reveal key={step[0]} delay={index * 0.05} className="grid gap-4 rounded-[1.7rem] border border-white/60 bg-white/[0.72] p-5 shadow-card backdrop-blur sm:grid-cols-[80px_1fr] sm:p-6">
                <div className="font-serif text-[3rem] leading-none text-teal">{step[0]}</div>
                <div>
                  <h3 className="font-serif text-[2rem] leading-[1] tracking-[-0.03em] text-navy">{step[1]}</h3>
                  <p className="mt-3 max-w-2xl text-base leading-8 text-slate">{step[2]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="evaluacion" className="py-16 sm:py-24">
        <div className="container-shell grid gap-8 xl:grid-cols-[1.04fr_0.96fr] xl:items-start">
          <Reveal className="max-w-xl">
            <SectionKicker>Evaluación y precios</SectionKicker>
            <h2 className="section-title mt-6">Una presentación cuidada de la inversión, pensada para que el siguiente paso sea escribir por WhatsApp.</h2>
            <p className="mt-5 text-base leading-8 text-slate sm:text-lg">La consulta básica y la consulta con escaneo digital quedan destacadas con una estructura más limpia, mientras los extras se mantienen claros y fáciles de escanear.</p>
          </Reveal>
          <Reveal delay={0.08} className="rounded-[2rem] bg-[#f3eee7] p-6 shadow-soft sm:p-8">
            <div className="grid gap-5 xl:grid-cols-2">
              {prices.map((plan, index) => (
                <div key={plan.title} className={`rounded-[1.75rem] border p-6 ${index === 1 ? 'border-teal/30 bg-white shadow-card' : 'border-black/[0.08] bg-white/[0.72]'}`}>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-slate">{index === 1 ? 'Consulta recomendada' : 'Consulta'}</p>
                  <h3 className="mt-4 font-serif text-[2rem] leading-[1] tracking-[-0.03em] text-navy">{plan.title}</h3>
                  <div className="mt-5 font-serif text-[3.5rem] leading-none text-ink">{plan.price}</div>
                  <ul className="mt-6 space-y-3">
                    {plan.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal" /><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[1.75rem] border border-black/[0.08] bg-white/[0.72] p-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate">Extras</p>
              <div className="mt-4 space-y-3">
                {extras.map((extra) => (
                  <div key={extra[0]} className="flex items-center justify-between gap-4 border-b border-black/[0.08] py-3 last:border-none last:pb-0">
                    <span className="text-sm leading-7 text-ink">{extra[0]}</span>
                    <span className="font-serif text-[1.8rem] leading-none text-navy">{extra[1]}</span>
                  </div>
                ))}
              </div>
              <Link href={whatsappLink} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-navy px-6 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5">Agendar evaluación</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="faq" className="py-16 sm:py-24">
        <div className="container-shell grid gap-10 xl:grid-cols-[0.86fr_1.14fr] xl:items-start">
          <Reveal className="max-w-md xl:sticky xl:top-28">
            <SectionKicker>FAQ</SectionKicker>
            <h2 className="section-title mt-6">La información importante, clara y fácil de recorrer.</h2>
          </Reveal>
          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <Reveal key={item[0]} delay={index * 0.04}>
                  <button type="button" onClick={() => setOpenFaq(isOpen ? -1 : index)} className="w-full rounded-[1.6rem] border border-white/60 bg-white/[0.74] p-5 text-left shadow-card backdrop-blur sm:p-6">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-medium text-ink sm:text-lg">{item[0]}</h3>
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black/10 text-navy">{isOpen ? '−' : '+'}</span>
                    </div>
                    <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] pt-4' : 'grid-rows-[0fr]'}`}>
                      <div className="overflow-hidden"><p className="max-w-3xl text-sm leading-7 text-slate sm:text-base">{item[1]}</p></div>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 pb-12 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1280px] overflow-hidden rounded-[2.3rem] bg-[#0f1537] text-white shadow-soft">
          <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr] xl:items-stretch">
            <Reveal className="relative z-10 p-8 sm:p-10 lg:p-14">
              <SectionKicker>Agenda tu evaluación</SectionKicker>
              <h2 className="mt-6 font-serif text-[3rem] leading-[0.94] tracking-[-0.04em] text-white sm:text-[4rem] lg:text-[5rem]">El siguiente paso hacia una sonrisa más armónica puede empezar hoy.</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/[0.78] sm:text-lg">Si buscas ortodoncia tradicional o estética en {siteConfig.city} con una clínica que combine trato humano, experiencia real y una experiencia mucho más cuidada, escribe por WhatsApp para agendar tu evaluación.</p>
              <Link href={whatsappLink} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-medium text-navy transition hover:-translate-y-0.5">Quiero agendar por WhatsApp</Link>
            </Reveal>
            <Reveal delay={0.08} className="relative min-h-[340px] xl:min-h-full">
              <Image src="/assets/gallery/gallery-07.webp" alt="Orthoclinix cierre visual" fill sizes="(min-width: 1280px) 50vw, 100vw" className="object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0f1537] via-[#0f1537]/30 to-transparent xl:bg-gradient-to-l xl:from-transparent xl:via-[#0f1537]/20 xl:to-[#0f1537]/10" />
            </Reveal>
          </div>
        </div>
      </section>

      <footer id="contacto" className="pb-24 pt-8 sm:pb-12">
        <div className="container-shell">
          <div className="grid gap-8 border-t border-black/[0.08] pt-8 sm:grid-cols-2 xl:grid-cols-[1fr_0.8fr_0.8fr]">
            <div>
              <div className="flex items-center gap-3"><div className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-2xl border border-white/70 bg-white/90 shadow-card"><div className="absolute inset-[7px] rounded-[18px] border border-[#232662]/10" /><span className="relative font-serif text-xl font-semibold tracking-[-0.03em] text-navy">O</span></div><div><div className="font-serif text-2xl leading-none tracking-[0.08em] text-navy">ORTHOCLINIX</div><div className="mt-1 text-[10px] uppercase tracking-[0.28em] text-slate">Ortodoncia premium</div></div></div>
              <p className="mt-5 max-w-sm text-sm leading-7 text-slate sm:text-base">Clínica de Ortodoncia y Odontología General con atención cálida, personalizada y premium en {siteConfig.city}.</p>
            </div>
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.22em] text-slate">Contacto</h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-ink sm:text-base">
                <li>{siteConfig.phoneDisplay}</li>
                <li>{siteConfig.email}</li>
                <li>{siteConfig.instagram}</li>
                <li>{siteConfig.facebook}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.22em] text-slate">Ubicación</h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-ink sm:text-base">
                <li>{siteConfig.address}</li>
                <li>{siteConfig.hours}</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-4 z-40 px-4 lg:hidden">
        <Link href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center justify-center rounded-full bg-navy px-5 py-4 text-sm font-medium text-white shadow-soft">Agendar por WhatsApp</Link>
      </div>
    </main>
  );
}
