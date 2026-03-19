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

const trustItems = [
  ['28+', 'años de experiencia en ortodoncia'],
  ['2000+', 'casos exitosos'],
  ['33', 'reseñas 5 estrellas'],
  ['SPO', 'ortodoncista certificado']
] as const;

const services = [
  ['Ortodoncia con brackets', 'Alineación dental con un plan clínico claro, seguimiento cercano y resultados orientados a función y estética.'],
  ['Ortodoncia invisible', 'Una alternativa discreta y moderna para quienes buscan corregir su sonrisa con una experiencia más estética.'],
  ['Cirugía de terceros molares', 'Evaluación precisa y abordaje seguro para cordales que requieren extracción o manejo especializado.'],
  ['Endodoncia', 'Tratamientos para preservar piezas dentales y aliviar molestias con enfoque cuidadoso y diagnóstico oportuno.'],
  ['Periodoncia', 'Atención integral de tejidos de soporte para proteger la salud de tus encías y la estabilidad de tu sonrisa.']
] as const;

const differentiators = [
  'Más de 28 años de experiencia con visión clínica integral.',
  'Siempre te atiende el mismo doctor o doctora durante tu proceso.',
  'Tecnología de vanguardia para diagnósticos inmediatos y de calidad.',
  'Atención cercana, humana y personalizada desde la primera cita.',
  'Compromiso real con resultados funcionales, estéticos y saludables.',
  'Miembro de la Sociedad Panameña de Ortodoncia.'
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
    featured: false,
    items: ['Radiografía panorámica', 'Radiografía lateral de cráneo', 'Fotos intra y extraorales', 'Plan de tratamiento', 'Presupuesto']
  },
  {
    title: 'Consulta con escaneo digital',
    price: '$80',
    featured: true,
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
  ['/assets/gallery/gallery-01.webp', 'Detalle editorial de ortodoncia', 'lg:col-span-7 lg:row-span-2 min-h-[420px]'],
  ['/assets/gallery/gallery-03.webp', 'Experiencia clínica elegante', 'lg:col-span-5 min-h-[260px]'],
  ['/assets/gallery/gallery-05.webp', 'Detalle de sonrisa alineada', 'lg:col-span-5 min-h-[260px]'],
  ['/assets/gallery/gallery-08.webp', 'Composición fotográfica clínica', 'lg:col-span-7 min-h-[320px]']
] as const;

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.7, ease: [0.21, 1.02, 0.35, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionIntro({ eyebrow, title, text, center = false }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return (
    <Reveal className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title mt-5">{title}</h2>
      {text ? <p className={`mt-5 text-base leading-8 text-slate sm:text-lg ${center ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>{text}</p> : null}
    </Reveal>
  );
}

function LogoMark() {
  return (
    <>
      <div className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-2xl border border-white/70 bg-white/80 shadow-card backdrop-blur">
        <div className="absolute inset-[7px] rounded-[18px] border border-[#232662]/10" />
        <span className="relative font-serif text-xl font-semibold tracking-[-0.03em] text-navy">O</span>
      </div>
      <div className="hidden sm:block">
        <div className="font-serif text-2xl leading-none tracking-[0.08em] text-navy">ORTHOCLINIX</div>
        <div className="mt-1 text-[10px] uppercase tracking-[0.28em] text-slate">Ortodoncia premium</div>
      </div>
    </>
  );
}

function VideoShowcase({
  id,
  title,
  description,
  src,
  poster,
  reversed = false
}: {
  id: string;
  title: string;
  description: string;
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
        <div className={`grid gap-8 xl:items-center ${reversed ? 'xl:grid-cols-[1fr_0.9fr]' : 'xl:grid-cols-[0.9fr_1fr]'}`}>
          <Reveal className={reversed ? 'xl:order-2 max-w-xl' : 'max-w-xl'}>
            <span className="eyebrow">Video destacado</span>
            <h2 className="section-title mt-5">{title}</h2>
            <p className="mt-5 text-base leading-8 text-slate sm:text-lg">{description}</p>
            <Link href={whatsappLink} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-navy px-6 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5">
              Agendar por WhatsApp
            </Link>
          </Reveal>

          <Reveal delay={0.08} className={reversed ? 'xl:order-1' : ''}>
            <div className="relative overflow-hidden rounded-[2.1rem] border border-white/70 bg-white/75 p-3 shadow-soft backdrop-blur-xl sm:p-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.65rem] bg-[#dbe9e7]">
                <video ref={ref} className="h-full w-full object-cover" playsInline muted loop preload="metadata" poster={poster} src={src} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1433]/45 via-transparent to-white/10" />
                <button type="button" onClick={toggleVideo} className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-white/20 text-white backdrop-blur-xl transition hover:scale-105" aria-label={playing ? 'Pausar video' : 'Reproducir video'}>
                  <span className="ml-1 text-2xl">{playing ? '❚❚' : '▶'}</span>
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
      <div className="border-b border-black/5 bg-[#f5f2ee] px-5 py-2 text-[11px] uppercase tracking-[0.22em] text-slate sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4">
          <span>Ciudad de Panamá · {siteConfig.phoneDisplay}</span>
          <Link href={whatsappLink} target="_blank" rel="noreferrer" className="hidden text-navy sm:inline-flex">Agendar por WhatsApp</Link>
        </div>
      </div>

      <header className={`fixed inset-x-0 top-[33px] z-50 transition-all duration-300 ${scrolled ? 'px-3 pt-3' : 'px-0 pt-0'}`}>
        <div className={`mx-auto flex max-w-[1280px] items-center justify-between transition-all duration-300 ${scrolled ? 'glass-panel rounded-3xl border px-4 py-3 shadow-soft sm:px-6' : 'bg-transparent px-5 py-5 sm:px-6 lg:px-8'}`}>
          <a href="#inicio" aria-label="Ir al inicio" className="flex items-center gap-3">
            <LogoMark />
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a key={item[1]} href={item[1]} className="text-sm text-slate transition hover:text-navy">
                {item[0]}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <Link href={whatsappLink} target="_blank" rel="noreferrer" className="rounded-full border border-black/10 bg-white/80 px-5 py-3 text-sm font-medium text-navy backdrop-blur transition hover:-translate-y-0.5">
              Agendar evaluación
            </Link>
          </div>

          <button type="button" onClick={() => setMenuOpen(true)} className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white/[0.88] text-navy shadow-card lg:hidden" aria-label="Abrir menú">
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
            </span>
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-[60] bg-[#101327]/30 backdrop-blur-sm transition ${menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`} onClick={() => setMenuOpen(false)} />
      <aside className={`fixed right-0 top-0 z-[70] h-full w-[88vw] max-w-sm border-l border-white/60 bg-[#faf7f3]/95 p-6 shadow-soft backdrop-blur-2xl transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LogoMark />
          </div>
          <button type="button" onClick={() => setMenuOpen(false)} className="grid h-10 w-10 place-items-center rounded-full border border-black/10 text-navy" aria-label="Cerrar menú">✕</button>
        </div>
        <nav className="mt-10 space-y-2">
          {navItems.map((item) => (
            <a key={item[1]} href={item[1]} onClick={() => setMenuOpen(false)} className="block rounded-2xl border border-transparent px-4 py-3 text-base text-ink transition hover:border-line hover:bg-white">
              {item[0]}
            </a>
          ))}
        </nav>
        <Link href={whatsappLink} target="_blank" rel="noreferrer" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-navy px-5 py-3.5 text-sm font-medium text-white">
          Agendar por WhatsApp
        </Link>
      </aside>

      <section id="inicio" className="relative overflow-hidden border-b border-black/5 bg-[#f5f2ee] pb-12 pt-24 sm:pb-16 sm:pt-28 lg:pt-32">
        <div className="container-shell">
          <div className="grid gap-6 xl:grid-cols-[0.88fr_1.12fr] xl:items-stretch">
            <Reveal className="relative z-10 flex min-h-[540px] flex-col justify-between rounded-[2.2rem] border border-white/70 bg-white/74 p-7 shadow-soft backdrop-blur-xl sm:min-h-[620px] sm:p-10 xl:min-h-[760px] xl:rounded-[2.6rem] xl:p-12">
              <div>
                <span className="eyebrow">Ortodoncia premium en Ciudad de Panamá</span>
                <div className="mt-7 space-y-1 text-navy">
                  <div className="hero-line">Ortodoncia</div>
                  <div className="hero-line italic text-[#3f4a78]">rediseñada</div>
                </div>
                <p className="mt-7 max-w-xl text-lg leading-8 text-slate sm:text-xl">Transforma tu sonrisa con más de 28 años de experiencia, atención cálida y una clínica pensada para sentirse tan confiable como elegante.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#1d2160]">Agendar por WhatsApp</Link>
                  <a href="#evaluacion" className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-medium text-ink transition hover:bg-[#f4fbf9]">Ver evaluación</a>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.8rem] border border-black/5 bg-[#f7fbfa] p-5">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-slate">Experiencia</p>
                  <p className="mt-3 font-serif text-3xl leading-none text-navy">28+ años</p>
                  <p className="mt-3 text-sm leading-7 text-slate">Con un enfoque personalizado y el compromiso de acompañarte con el mismo doctor o doctora.</p>
                </div>
                <div className="rounded-[1.8rem] border border-black/5 bg-[#232662] p-5 text-white">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/70">Confianza</p>
                  <p className="mt-3 font-serif text-3xl leading-none">33 reseñas 5★</p>
                  <p className="mt-3 text-sm leading-7 text-white/80">Más de 2000 casos exitosos y un ambiente clínico pensado para sentirse cómodo y seguro.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="relative min-h-[600px] overflow-hidden rounded-[2.2rem] border border-white/70 bg-[#e7ece9] shadow-soft sm:min-h-[740px] xl:min-h-[760px] xl:rounded-[2.6rem]">
              <div className="absolute inset-0 hidden md:block">
                <Image src="/assets/hero/hero-desktop.webp" alt="Hero desktop de Orthoclinix" fill priority sizes="(min-width: 1280px) 55vw, 100vw" className="object-cover" />
              </div>
              <div className="absolute inset-0 md:hidden">
                <Image src="/assets/hero/hero-mobile.webp" alt="Hero mobile de Orthoclinix" fill priority sizes="100vw" className="object-cover" />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,247,243,0.08)_0%,rgba(12,15,28,0.12)_35%,rgba(12,15,28,0.62)_100%)]" />

              <div className="absolute left-5 right-5 top-5 flex items-start justify-between gap-4 sm:left-7 sm:right-7 sm:top-7">
                <div className="rounded-full border border-white/40 bg-white/18 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white backdrop-blur">Atención cálida y personalizada</div>
                <div className="hidden rounded-full border border-white/40 bg-white/18 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white backdrop-blur sm:block">Vía Argentina · El Cangrejo</div>
              </div>

              <div className="absolute bottom-5 left-5 right-5 grid gap-4 sm:bottom-7 sm:left-7 sm:right-7 md:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-[1.8rem] border border-white/35 bg-white/18 p-5 text-white backdrop-blur-md sm:p-6">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/70">La experiencia Orthoclinix</p>
                  <p className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">Cuidado dental integral con una estética clínica mucho más humana, moderna y serena.</p>
                </div>
                <div className="rounded-[1.8rem] border border-white/35 bg-white/14 p-5 text-white backdrop-blur-md sm:p-6">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/70">Evaluación</p>
                  <div className="mt-3 flex items-end gap-4">
                    <div>
                      <p className="font-serif text-4xl leading-none">$50</p>
                      <p className="mt-2 text-sm text-white/76">Consulta básica</p>
                    </div>
                    <div className="h-12 w-px bg-white/20" />
                    <div>
                      <p className="font-serif text-4xl leading-none">$80</p>
                      <p className="mt-2 text-sm text-white/76">Con escaneo digital</p>
                    </div>
                  </div>
                  <Link href={whatsappLink} target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-navy">Quiero agendar</Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-3 pb-6 sm:-mt-6 sm:pb-12">
        <div className="container-shell">
          <Reveal className="grid gap-4 rounded-[2rem] border border-white/70 bg-white/82 p-5 shadow-card backdrop-blur-xl sm:grid-cols-2 sm:p-6 lg:grid-cols-4">
            {trustItems.map((item, index) => (
              <div key={item[1]} className={`rounded-[1.55rem] border border-black/5 p-5 ${index === 3 ? 'bg-[#232662] text-white' : 'bg-[#faf8f5]'}`}>
                <div className={`font-serif text-3xl leading-none ${index === 3 ? 'text-white' : 'text-navy'}`}>{item[0]}</div>
                <p className={`mt-3 text-sm leading-7 ${index === 3 ? 'text-white/78' : 'text-slate'}`}>{item[1]}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="experiencia" className="py-20 sm:py-28">
        <div className="container-shell">
          <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr] xl:items-center">
            <Reveal className="relative min-h-[420px] overflow-hidden rounded-[2.2rem] border border-white/70 shadow-soft sm:min-h-[560px]">
              <Image src="/assets/gallery/gallery-03.webp" alt="Espacio clínico elegante de Orthoclinix" fill sizes="(min-width: 1280px) 45vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12162f]/55 via-transparent to-white/15" />
              <div className="absolute bottom-0 left-0 max-w-xl p-6 text-white sm:p-8">
                <p className="font-serif text-3xl leading-tight sm:text-4xl">Una clínica que no solo corrige sonrisas. También mejora la experiencia de sentirse atendido.</p>
              </div>
            </Reveal>

            <div>
              <SectionIntro eyebrow="La experiencia Orthoclinix" title="Más calidez, más claridad y una estética clínica mucho más refinada." text="ORTHOCLINIX combina trato humano, estándares profesionales y tecnología para que cada paciente se sienta acompañado con confianza desde la primera cita." />
              <Reveal delay={0.08} className="mt-8 rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-card backdrop-blur-xl sm:p-8">
                <p className="text-lg leading-8 text-ink">Desde la evaluación inicial hasta la fase final con retenedores, la clínica está pensada para ofrecer una atención personalizada, diagnósticos de calidad y una experiencia consistente en manos del mismo doctor o doctora.</p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {['Atención cálida', 'Tecnología de vanguardia', 'Diagnóstico inmediato', 'Trato personalizado'].map((tag) => (
                    <div key={tag} className="rounded-full border border-black/10 bg-[#f7fbfa] px-4 py-3 text-sm text-navy">{tag}</div>
                  ))}
                </div>
                <Link href={whatsappLink} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-navy px-6 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5">Solicitar evaluación</Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-20 sm:py-28">
        <div className="container-shell">
          <SectionIntro eyebrow="Servicios principales" title="Una selección clara de tratamientos para una landing más fuerte y mejor enfocada." text="Se mantuvo la información esencial del cliente, pero con una composición mucho más editorial y menos sensación de bloques genéricos." />
          <div className="mt-10 grid gap-4 xl:grid-cols-12">
            {services.map((service, index) => {
              const featured = index < 2;
              return (
                <Reveal key={service[0]} delay={index * 0.04} className={`rounded-[1.9rem] border border-white/70 bg-white/82 p-6 shadow-card backdrop-blur-xl ${featured ? 'xl:col-span-6' : 'xl:col-span-4'}`}>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-slate">Servicio {String(index + 1).padStart(2, '0')}</div>
                  <h3 className="mt-4 font-serif text-3xl leading-tight text-navy">{service[0]}</h3>
                  <p className="mt-4 text-base leading-8 text-slate">{service[1]}</p>
                  <div className="mt-8 h-px w-full bg-gradient-to-r from-teal/50 to-transparent" />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <VideoShowcase
        id="video-01"
        title="Un primer video para mostrar la clínica con presencia, ambiente y confianza." 
        description="Este bloque puede usarse para recorrido de la clínica, explicación del doctor o ambiente de consulta. Ya queda mucho más integrado al look editorial general de la landing."
        src="/assets/videos/video-01.mp4"
        poster="/assets/videos/video-01-poster.webp"
      />

      <section className="py-20 sm:py-28">
        <div className="container-shell">
          <SectionIntro eyebrow="Galería" title="Solo cuatro imágenes, mejor curadas y con mucha más intención visual." text="Se redujo la galería para que se sienta más premium, menos cargada y con una composición más cercana al mood editorial de la referencia." center />
          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            {gallery.map((image, index) => (
              <Reveal key={image[0]} delay={index * 0.05} className={image[2]}>
                <div className="group relative h-full overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-card">
                  <Image src={image[0]} alt={image[1]} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111430]/20 via-transparent to-white/10" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-shell">
          <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
            <SectionIntro eyebrow="Por qué elegir Orthoclinix" title="Confianza clínica, tecnología y trato humano en una misma experiencia." text="Pensado para padres, jóvenes profesionales y adultos que buscan ortodoncia tradicional o estética con una clínica seria, refinada y cercana." />
            <div className="grid gap-4 sm:grid-cols-2">
              {differentiators.map((item, index) => (
                <Reveal key={item} delay={index * 0.04} className="rounded-[1.85rem] border border-white/70 bg-white/[0.84] p-6 shadow-card backdrop-blur-xl">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f4fbf9] text-navy">{String(index + 1).padStart(2, '0')}</div>
                  <p className="text-base leading-8 text-ink">{item}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="proceso" className="py-20 sm:py-28">
        <div className="container-shell">
          <SectionIntro eyebrow="Proceso" title="Cinco pasos claros para comenzar tu tratamiento con tranquilidad." text="La estructura sigue siendo simple, pero visualmente mucho más cuidada y coherente con una landing premium." center />
          <div className="mt-12 grid gap-4 xl:grid-cols-5">
            {processSteps.map((step, index) => (
              <Reveal key={step[0]} delay={index * 0.05}>
                <div className="h-full rounded-[1.9rem] border border-white/70 bg-white/[0.84] p-6 shadow-card backdrop-blur-xl">
                  <div className="mb-5 font-serif text-5xl leading-none text-teal">{step[0]}</div>
                  <h3 className="font-serif text-2xl leading-tight text-navy">{step[1]}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate">{step[2]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VideoShowcase
        id="video-02"
        title="Un segundo video para testimonios, resultados o una pieza más emocional." 
        description="Ideal para reforzar confianza con un testimonio de paciente, un caso real o una pieza más humana antes de la sección de evaluación."
        src="/assets/videos/video-02.mp4"
        poster="/assets/videos/video-02-poster.webp"
        reversed
      />

      <section id="evaluacion" className="py-20 sm:py-28">
        <div className="container-shell">
          <SectionIntro eyebrow="Evaluación y precios" title="Transparencia elegante desde la primera cita." text="Se mantiene el contenido real del cliente, pero con una estructura más clara, más limpia y mucho mejor presentada." />
          <div className="mt-10 grid gap-5 xl:grid-cols-[1fr_1fr_0.82fr]">
            {prices.map((plan, index) => (
              <Reveal key={plan.title} delay={index * 0.05} className={`rounded-[2rem] border p-7 shadow-soft backdrop-blur-xl sm:p-8 ${plan.featured ? 'border-teal/40 bg-gradient-to-br from-[#f4fffd] via-white to-[#e8faf6]' : 'border-white/70 bg-white/84'}`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-slate">{plan.featured ? 'Recomendada' : 'Consulta'}</p>
                    <h3 className="mt-3 font-serif text-3xl leading-tight text-navy">{plan.title}</h3>
                  </div>
                  {plan.featured ? <span className="rounded-full bg-navy px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white">Premium</span> : null}
                </div>
                <div className="mt-8 font-serif text-6xl leading-none text-ink">{plan.price}</div>
                <ul className="mt-8 space-y-3">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal" /><span>{item}</span></li>
                  ))}
                </ul>
                <Link href={whatsappLink} target="_blank" rel="noreferrer" className={`mt-8 inline-flex rounded-full px-5 py-3 text-sm font-medium ${plan.featured ? 'bg-navy text-white' : 'border border-black/10 bg-white text-ink'}`}>Agendar evaluación</Link>
              </Reveal>
            ))}

            <Reveal delay={0.12} className="rounded-[2rem] border border-white/70 bg-white/84 p-7 shadow-card backdrop-blur-xl sm:p-8">
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate">Servicios adicionales</p>
              <h3 className="mt-3 font-serif text-3xl leading-tight text-navy">Complementos con precio claro.</h3>
              <div className="mt-8 space-y-4">
                {extras.map((extra) => (
                  <div key={extra[0]} className="flex items-center justify-between gap-4 rounded-2xl border border-black/5 bg-[#f7fbfa] px-4 py-4">
                    <span className="text-sm leading-6 text-ink">{extra[0]}</span>
                    <span className="font-serif text-2xl text-navy">{extra[1]}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm leading-7 text-slate">La mejor forma de confirmar el tratamiento ideal para tu caso es escribir por WhatsApp y agendar una evaluación.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 sm:py-28">
        <div className="container-shell">
          <SectionIntro eyebrow="Preguntas frecuentes" title="Respuestas claras para decidir con confianza." text="Se conservó la información importante del cliente, pero con una presentación más ligera y refinada." />
          <div className="mt-10 space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <Reveal key={item[0]} delay={index * 0.03}>
                  <button type="button" onClick={() => setOpenFaq(isOpen ? -1 : index)} className="w-full rounded-[1.7rem] border border-white/70 bg-white/[0.84] p-5 text-left shadow-card backdrop-blur-xl sm:p-6">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-medium text-ink sm:text-lg">{item[0]}</h3>
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black/10 text-navy">{isOpen ? '−' : '+'}</span>
                    </div>
                    <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] pt-4' : 'grid-rows-[0fr]'}`}>
                      <div className="overflow-hidden">
                        <p className="max-w-3xl text-sm leading-7 text-slate sm:text-base">{item[1]}</p>
                      </div>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-shell">
          <Reveal className="relative overflow-hidden rounded-[2.35rem] border border-white/70 bg-[#232662] p-8 text-white shadow-soft sm:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(76,193,176,0.28),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_26%)]" />
            <div className="relative max-w-3xl">
              <span className="eyebrow border-white/20 bg-white/10 text-white">Agenda tu evaluación</span>
              <h2 className="mt-6 font-serif text-4xl leading-[0.95] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">El siguiente paso hacia una sonrisa armónica puede comenzar hoy.</h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">Si buscas ortodoncia premium en Ciudad de Panamá con atención cercana, experiencia real y una clínica que prioriza resultados y salud dental, escríbenos por WhatsApp.</p>
              <Link href={whatsappLink} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-medium text-navy transition hover:-translate-y-0.5">Quiero agendar por WhatsApp</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <footer id="contacto" className="pb-24 pt-8 sm:pb-12">
        <div className="container-shell">
          <div className="rounded-[2rem] border border-white/70 bg-white/[0.84] p-6 shadow-card backdrop-blur-xl sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="font-serif text-2xl leading-none tracking-[0.08em] text-navy">ORTHOCLINIX</div>
                <p className="mt-5 max-w-xl text-sm leading-7 text-slate sm:text-base">Clínica de Ortodoncia y Odontología General con enfoque cálido, personalizado y premium en Ciudad de Panamá.</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-navy">Contacto</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate">
                    <li><span className="text-ink">WhatsApp:</span> {siteConfig.phoneDisplay}</li>
                    <li><span className="text-ink">Correo:</span> {siteConfig.email}</li>
                    <li><span className="text-ink">Instagram:</span> {siteConfig.instagram}</li>
                    <li><span className="text-ink">Facebook:</span> {siteConfig.facebook}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-navy">Ubicación</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate">
                    <li>{siteConfig.address}</li>
                    <li><span className="text-ink">Horario:</span> {siteConfig.hours}</li>
                  </ul>
                  <Link href={whatsappLink} target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-full bg-navy px-5 py-3 text-sm font-medium text-white">Escribir por WhatsApp</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-4 z-40 px-4 lg:hidden">
        <Link href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center justify-center rounded-full bg-navy px-5 py-4 text-sm font-medium text-white shadow-soft">
          Agendar por WhatsApp
        </Link>
      </div>
    </main>
  );
}
