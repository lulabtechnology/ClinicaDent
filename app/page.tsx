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
  ['2000+', 'casos de ortodoncia exitosos'],
  ['33', 'reseñas 5 estrellas en Google'],
  ['1 a 1', 'atención cálida y personalizada']
] as const;

const services = [
  ['Ortodoncia con brackets', 'Alineación dental con un plan clínico claro, seguimiento cercano y resultados orientados a función y estética.'],
  ['Ortodoncia invisible', 'Una alternativa discreta y moderna para quienes buscan corregir su sonrisa con una experiencia más estética.'],
  ['Cirugía de terceros molares', 'Evaluación precisa y abordaje seguro para cordales que requieren extracción o manejo especializado.'],
  ['Endodoncia', 'Tratamientos para preservar piezas dentales y aliviar molestias con enfoque cuidadoso y diagnóstico oportuno.'],
  ['Periodoncia', 'Atención integral de tejidos de soporte para proteger la salud de tus encías y la estabilidad de tu sonrisa.']
] as const;

const differentiators = [
  'Más de 28 años de experiencia con una visión clínica integral.',
  'Siempre te atiende el mismo doctor o doctora durante tu proceso.',
  'Tecnología de vanguardia para diagnósticos inmediatos y de calidad.',
  'Atención cercana, humana y personalizada desde la primera cita.',
  'Compromiso real con resultados funcionales, estéticos y saludables.',
  'Ortodoncista certificado y miembro de la Sociedad Panameña de Ortodoncia.'
];

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
    title: 'Consulta de ortodoncia con escaneo digital',
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
  ['/assets/gallery/gallery-01.webp', 'Detalle editorial de ortodoncia', 'md:col-span-5 md:row-span-2 min-h-[420px]'],
  ['/assets/gallery/gallery-02.webp', 'Tratamiento con enfoque personalizado', 'md:col-span-3 min-h-[200px]'],
  ['/assets/gallery/gallery-03.webp', 'Espacio clínico elegante', 'md:col-span-4 min-h-[200px]'],
  ['/assets/gallery/gallery-04.webp', 'Consulta con ambiente premium', 'md:col-span-4 min-h-[220px]'],
  ['/assets/gallery/gallery-05.webp', 'Detalle de sonrisa alineada', 'md:col-span-4 min-h-[220px]'],
  ['/assets/gallery/gallery-06.webp', 'Procedimiento y revisión', 'md:col-span-4 min-h-[220px]'],
  ['/assets/gallery/gallery-07.webp', 'Paciente en experiencia Orthoclinix', 'md:col-span-6 min-h-[260px]'],
  ['/assets/gallery/gallery-08.webp', 'Composición fotográfica clínica', 'md:col-span-6 min-h-[260px]']
] as const;

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: [0.21, 1.02, 0.35, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function VideoCard({
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
    <section id={id} className="py-16 sm:py-24">
      <div className="container-shell">
        <div className={`grid gap-8 lg:items-center ${reversed ? 'lg:grid-cols-[1fr_0.92fr]' : 'lg:grid-cols-[0.92fr_1fr]'}`}>
          <Reveal className={reversed ? 'lg:order-2 max-w-xl' : 'max-w-xl'}>
            <span className="eyebrow">Video destacado</span>
            <h2 className="section-title mt-5">{title}</h2>
            <p className="mt-5 text-base leading-8 text-slate sm:text-lg">{description}</p>
          </Reveal>

          <Reveal delay={0.08} className={reversed ? 'lg:order-1' : ''}>
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/75 p-3 shadow-soft backdrop-blur-xl sm:p-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-[#d8ebe7]">
                <video ref={ref} className="h-full w-full object-cover" playsInline muted loop preload="metadata" poster={poster} src={src} />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f1433]/[0.35] via-transparent to-white/15" />
                <button type="button" onClick={toggleVideo} className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/60 bg-white/20 text-white backdrop-blur-xl transition group-hover:scale-105" aria-label={playing ? 'Pausar video' : 'Reproducir video'}>
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
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'px-3 pt-3' : 'px-0 pt-0'}`}>
        <div className={`mx-auto flex max-w-[1280px] items-center justify-between transition-all duration-300 ${scrolled ? 'glass-panel rounded-3xl border px-4 py-3 shadow-soft sm:px-6' : 'bg-transparent px-5 py-5 sm:px-6 lg:px-8'}`}>
          <a href="#inicio" aria-label="Ir al inicio" className="flex items-center gap-3">
            <div className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-white via-[#f6ffff] to-[#dff6f0] shadow-card">
              <div className="absolute inset-[7px] rounded-[18px] border border-[#232662]/10" />
              <span className="relative font-serif text-xl font-semibold tracking-[-0.03em] text-navy">O</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-serif text-2xl leading-none tracking-[0.06em] text-navy">ORTHOCLINIX</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.26em] text-slate">Ortodoncia premium</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a key={item[1]} href={item[1]} className="text-sm text-slate transition hover:text-navy">
                {item[0]}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <Link href={whatsappLink} target="_blank" rel="noreferrer" className="rounded-full bg-navy px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#1b1e51]">
              Agendar por WhatsApp
            </Link>
          </div>

          <button type="button" onClick={() => setMenuOpen(true)} className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white/[0.85] text-navy shadow-card lg:hidden" aria-label="Abrir menú">
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
            </span>
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-[60] bg-[#101327]/30 backdrop-blur-sm transition ${menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`} onClick={() => setMenuOpen(false)} />
      <aside className={`fixed right-0 top-0 z-[70] h-full w-[88vw] max-w-sm border-l border-white/60 bg-white/[0.92] p-6 shadow-soft backdrop-blur-2xl transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between">
          <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/60 bg-gradient-to-br from-white via-[#f6ffff] to-[#dff6f0] shadow-card">
            <span className="font-serif text-xl font-semibold text-navy">O</span>
          </div>
          <button type="button" onClick={() => setMenuOpen(false)} className="grid h-10 w-10 place-items-center rounded-full border border-black/10 text-navy" aria-label="Cerrar menú">✕</button>
        </div>
        <nav className="mt-10 space-y-2">
          {navItems.map((item) => (
            <a key={item[1]} href={item[1]} onClick={() => setMenuOpen(false)} className="block rounded-2xl border border-transparent px-4 py-3 text-base text-ink transition hover:border-line hover:bg-mist">
              {item[0]}
            </a>
          ))}
        </nav>
        <Link href={whatsappLink} target="_blank" rel="noreferrer" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-navy px-5 py-3.5 text-sm font-medium text-white">
          Agendar por WhatsApp
        </Link>
      </aside>

      <section id="inicio" className="relative overflow-hidden pt-28 sm:pt-32">
        <div className="container-shell relative z-10">
          <div className="grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <Reveal className="flex min-h-[620px] flex-col justify-center rounded-[2rem] border border-white/60 bg-white/75 p-8 shadow-soft backdrop-blur-xl sm:p-10 lg:min-h-[760px] lg:p-12">
              <span className="eyebrow w-fit">Ortodoncia premium en Ciudad de Panamá</span>
              <h1 className="headline mt-6 max-w-[12ch] text-navy">Transforma tu sonrisa con más de 28 años de experiencia en ortodoncia.</h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate sm:text-lg">Atención odontológica integral con trato cálido y personalizado, tecnología de vanguardia y una experiencia pensada para que te sientas en confianza desde la primera cita.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#1d2160]">Agendar por WhatsApp</Link>
                <a href="#evaluacion" className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-medium text-ink transition hover:border-teal/30 hover:bg-mist">Ver evaluación</a>
              </div>
              <div className="mt-10 grid gap-4 border-t border-line pt-6 sm:grid-cols-3">
                <div><div className="text-sm uppercase tracking-luxe text-slate">Reseñas</div><div className="mt-2 font-serif text-3xl text-navy">33 × 5★</div></div>
                <div><div className="text-sm uppercase tracking-luxe text-slate">Casos</div><div className="mt-2 font-serif text-3xl text-navy">2000+</div></div>
                <div><div className="text-sm uppercase tracking-luxe text-slate">Atención</div><div className="mt-2 font-serif text-3xl text-navy">Personal</div></div>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-white/60 bg-[#dff6f0] shadow-soft lg:min-h-[760px]">
              <div className="absolute inset-0 hidden md:block">
                <Image src="/assets/hero/hero-desktop.webp" alt="Ambiente premium de ortodoncia para desktop" fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
              </div>
              <div className="absolute inset-0 md:hidden">
                <Image src="/assets/hero/hero-mobile.webp" alt="Ambiente premium de ortodoncia para móvil" fill priority sizes="100vw" className="object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#11142c]/[0.45] via-transparent to-white/20" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="max-w-md rounded-[1.75rem] border border-white/[0.35] bg-white/[0.18] p-5 text-white backdrop-blur-md sm:p-6">
                  <p className="text-xs uppercase tracking-luxe text-white/75">Cuidado integral</p>
                  <p className="mt-3 text-lg leading-7 text-white/95">Diagnóstico claro, acompañamiento cercano y una clínica que prioriza confianza, precisión y comodidad.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative py-7 sm:py-10">
        <div className="container-shell">
          <Reveal className="grid gap-4 rounded-[2rem] border border-white/60 bg-white/75 p-5 shadow-card backdrop-blur-xl sm:grid-cols-2 sm:p-6 lg:grid-cols-4">
            {trustItems.map((item, index) => (
              <div key={item[1]} className={`rounded-[1.5rem] border border-black/5 bg-gradient-to-br from-white to-mist/60 p-5 ${index === 3 ? 'lg:bg-gradient-to-br lg:from-[#232662] lg:to-[#2c337d] lg:text-white' : ''}`}>
                <div className={`font-serif text-3xl ${index === 3 ? 'text-white' : 'text-navy'}`}>{item[0]}</div>
                <p className={`mt-2 text-sm leading-6 ${index === 3 ? 'text-white/80' : 'text-slate'}`}>{item[1]}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="experiencia" className="py-16 sm:py-24">
        <div className="container-shell">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">La experiencia Orthoclinix</span>
            <h2 className="section-title mt-5">Más que corregir una sonrisa: una experiencia clínica cálida, moderna y segura.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate sm:text-lg">ORTHOCLINIX combina trato humano, estándares profesionales y tecnología para que cada paciente se sienta acompañado con claridad, confianza y comodidad durante todo su tratamiento.</p>
          </Reveal>
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <Reveal className="rounded-[2rem] border border-white/60 bg-white/70 p-7 shadow-card backdrop-blur-xl sm:p-8">
              <p className="text-lg leading-8 text-ink">Desde la evaluación inicial hasta la fase final con retenedores, la clínica está pensada para ofrecer una atención personalizada, diagnósticos de calidad y un ambiente que transmite tranquilidad.</p>
              <p className="mt-6 text-base leading-8 text-slate">Aquí no se trata solo de alinear dientes. Se trata de construir una sonrisa armónica, mejorar la mordida, cuidar la salud dental integral y hacerlo con una experiencia consistente en manos del mismo doctor o doctora.</p>
              <div className="mt-8 flex flex-wrap gap-3">{['Atención cálida', 'Tecnología de vanguardia', 'Diagnóstico inmediato', 'Trato personalizado'].map((tag) => <span key={tag} className="rounded-full border border-black/10 bg-mist px-4 py-2 text-sm text-navy">{tag}</span>)}</div>
              <Link href={whatsappLink} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-navy px-6 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5">Solicitar evaluación</Link>
            </Reveal>
            <Reveal delay={0.08} className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/60 shadow-soft sm:min-h-[540px]">
              <Image src="/assets/gallery/gallery-03.webp" alt="Espacio clínico elegante de Orthoclinix" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14183c]/[0.45] via-transparent to-white/25" />
              <div className="absolute bottom-0 left-0 max-w-lg p-6 text-white sm:p-8"><p className="font-serif text-3xl leading-tight sm:text-4xl">Una clínica pensada para inspirar confianza desde el primer momento.</p></div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-16 sm:py-24">
        <div className="container-shell">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">Servicios principales</span>
            <h2 className="section-title mt-5">Tratamientos y procedimientos seleccionados para una atención integral.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate sm:text-lg">La landing prioriza lo esencial para captar prospectos con claridad: ortodoncia, soluciones estéticas y tratamientos clave que complementan la salud oral.</p>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-12">
            {services.map((service, index) => {
              const featured = index === 0 || index === 1;
              return (
                <Reveal key={service[0]} delay={index * 0.04} className={`rounded-[1.75rem] border border-white/60 bg-white/80 p-6 shadow-card backdrop-blur-xl ${featured ? 'xl:col-span-6' : 'xl:col-span-4'}`}>
                  <div className="text-[11px] uppercase tracking-luxe text-slate">Servicio {String(index + 1).padStart(2, '0')}</div>
                  <h3 className="mt-4 font-serif text-3xl leading-tight text-navy">{service[0]}</h3>
                  <p className="mt-4 text-base leading-8 text-slate">{service[1]}</p>
                  <div className="mt-8 h-px w-full bg-gradient-to-r from-teal/50 to-transparent" />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <VideoCard id="video-01" title="Un espacio visual listo para presentar la experiencia de la clínica." description="Este primer bloque de video puede usarse para recorrido de la clínica, explicación del doctor o ambiente de consulta. Ya queda estilizado con poster, contenedor premium y experiencia responsive." src="/assets/videos/video-01.mp4" poster="/assets/videos/video-01-poster.webp" />

      <section className="py-16 sm:py-24">
        <div className="container-shell">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Galería premium</span>
            <h2 className="section-title mt-5">Ocho espacios visuales para transmitir elegancia clínica y confianza humana.</h2>
            <p className="mt-5 mx-auto max-w-2xl text-base leading-8 text-slate sm:text-lg">La composición evita una cuadrícula plana para mantener ritmo visual, recortes editoriales y una lectura sofisticada en desktop y mobile.</p>
          </Reveal>
          <div className="mt-10 grid auto-rows-fr gap-4 md:grid-cols-12">
            {gallery.map((image, index) => (
              <Reveal key={image[0]} delay={index * 0.04} className={image[2]}>
                <div className="relative h-full overflow-hidden rounded-[1.75rem] border border-white/60 bg-white shadow-card">
                  <Image src={image[0]} alt={image[1]} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition duration-700 hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111430]/[0.18] via-transparent to-white/10" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <Reveal className="max-w-3xl">
              <span className="eyebrow">Por qué elegir Orthoclinix</span>
              <h2 className="section-title mt-5">Confianza clínica, tecnología y trato humano en una misma experiencia.</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate sm:text-lg">Pensado para padres, jóvenes profesionales y adultos que buscan ortodoncia tradicional o estética con una clínica seria, refinada y cercana.</p>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {differentiators.map((item, index) => (
                <Reveal key={item} delay={index * 0.04} className="rounded-[1.75rem] border border-white/60 bg-white/[0.78] p-6 shadow-card backdrop-blur-xl">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-mist text-navy">{String(index + 1).padStart(2, '0')}</div>
                  <p className="text-base leading-8 text-ink">{item}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="proceso" className="py-16 sm:py-24">
        <div className="container-shell">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Proceso</span>
            <h2 className="section-title mt-5">Cinco pasos claros para comenzar tu tratamiento con tranquilidad.</h2>
            <p className="mt-5 mx-auto max-w-2xl text-base leading-8 text-slate sm:text-lg">Una estructura simple y elegante que ayuda a convertir mejor: menos duda, más claridad y una ruta concreta desde la evaluación hasta el resultado final.</p>
          </Reveal>
          <div className="mt-12 grid gap-4 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <Reveal key={step[0]} delay={index * 0.05}>
                <div className="rounded-[1.75rem] border border-white/60 bg-white/[0.82] p-6 shadow-card backdrop-blur-xl">
                  <div className="mb-5 font-serif text-5xl leading-none text-teal">{step[0]}</div>
                  <h3 className="font-serif text-2xl leading-tight text-navy">{step[1]}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate">{step[2]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VideoCard id="video-02" title="Un segundo video preparado para testimonios, resultados o casos reales." description="Ideal para reforzar confianza con testimonios de pacientes, resultados reales o una pieza emocional que cierre mejor la conversión antes de la evaluación." src="/assets/videos/video-02.mp4" poster="/assets/videos/video-02-poster.webp" reversed />

      <section id="evaluacion" className="py-16 sm:py-24">
        <div className="container-shell">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">Evaluación y precios</span>
            <h2 className="section-title mt-5">Transparencia elegante desde la primera cita.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate sm:text-lg">Se presenta la inversión clave de forma clara, cuidada y orientada a facilitar la decisión de escribir por WhatsApp para agendar una evaluación.</p>
          </Reveal>
          <div className="mt-10 grid gap-5 xl:grid-cols-[1fr_1fr_0.8fr]">
            {prices.map((plan, index) => (
              <Reveal key={plan.title} delay={index * 0.05} className={`rounded-[2rem] border p-7 shadow-soft backdrop-blur-xl sm:p-8 ${plan.featured ? 'border-teal/40 bg-gradient-to-br from-[#f4fffd] via-white to-[#e8faf6]' : 'border-white/60 bg-white/80'}`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-luxe text-slate">{plan.featured ? 'Recomendada' : 'Consulta'}</p>
                    <h3 className="mt-3 font-serif text-3xl leading-tight text-navy">{plan.title}</h3>
                  </div>
                  {plan.featured ? <span className="rounded-full bg-navy px-3 py-1 text-[10px] uppercase tracking-luxe text-white">Premium</span> : null}
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
            <Reveal delay={0.12} className="rounded-[2rem] border border-white/60 bg-white/80 p-7 shadow-card backdrop-blur-xl sm:p-8">
              <p className="text-[11px] uppercase tracking-luxe text-slate">Servicios adicionales</p>
              <h3 className="mt-3 font-serif text-3xl leading-tight text-navy">Complementos con precio claro.</h3>
              <div className="mt-8 space-y-4">
                {extras.map((extra) => (
                  <div key={extra[0]} className="flex items-center justify-between gap-4 rounded-2xl border border-black/5 bg-mist/70 px-4 py-4">
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

      <section id="faq" className="py-16 sm:py-24">
        <div className="container-shell">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2 className="section-title mt-5">Respuestas claras para decidir con confianza.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate sm:text-lg">Un bloque de FAQ limpio y premium que resuelve dudas frecuentes sin recargar la landing con texto innecesario.</p>
          </Reveal>
          <div className="mt-10 space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <Reveal key={item[0]} delay={index * 0.03}>
                  <button type="button" onClick={() => setOpenFaq(isOpen ? -1 : index)} className="w-full rounded-[1.6rem] border border-white/60 bg-white/[0.82] p-5 text-left shadow-card backdrop-blur-xl sm:p-6">
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

      <section className="py-16 sm:py-24">
        <div className="container-shell">
          <Reveal className="relative overflow-hidden rounded-[2.25rem] border border-white/60 bg-gradient-to-br from-[#232662] via-[#2d347f] to-[#193b4c] p-8 text-white shadow-soft sm:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(76,193,176,0.25),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_25%)]" />
            <div className="relative max-w-3xl">
              <span className="eyebrow border-white/20 bg-white/10 text-white">Agenda tu evaluación</span>
              <h2 className="mt-6 font-serif text-4xl leading-[0.95] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">El siguiente paso hacia una sonrisa armónica puede comenzar hoy.</h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/[0.78] sm:text-lg">Si buscas ortodoncia premium en Ciudad de Panamá con atención cercana, experiencia real y una clínica que prioriza resultados y salud dental, escríbenos por WhatsApp.</p>
              <Link href={whatsappLink} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-medium text-navy transition hover:-translate-y-0.5">Quiero agendar por WhatsApp</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <footer id="contacto" className="pb-24 pt-8 sm:pb-12">
        <div className="container-shell">
          <div className="rounded-[2rem] border border-white/60 bg-white/[0.82] p-6 shadow-card backdrop-blur-xl sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="font-serif text-2xl leading-none tracking-[0.06em] text-navy">ORTHOCLINIX</div>
                <p className="mt-5 max-w-xl text-sm leading-7 text-slate sm:text-base">Clínica de Ortodoncia y Odontología General con enfoque cálido, personalizado y premium en Ciudad de Panamá.</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-luxe text-navy">Contacto</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate">
                    <li><span className="text-ink">WhatsApp:</span> {siteConfig.phoneDisplay}</li>
                    <li><span className="text-ink">Correo:</span> {siteConfig.email}</li>
                    <li><span className="text-ink">Instagram:</span> {siteConfig.instagram}</li>
                    <li><span className="text-ink">Facebook:</span> {siteConfig.facebook}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-luxe text-navy">Ubicación</h3>
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
        <Link href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center justify-center rounded-full bg-navy px-5 py-4 text-sm font-medium text-white shadow-soft">Agendar por WhatsApp</Link>
      </div>
    </main>
  );
}
