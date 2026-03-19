'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
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


function Reveal({ children, className = '', delay = 0, y = 28 }: { children: React.ReactNode; className?: string; delay?: number; y?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.8, ease: [0.21, 1.02, 0.35, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionKicker({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <span className={dark ? 'eyebrow-dark' : 'eyebrow'}>{children}</span>;
}

function BrandLogo({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  const logoSrc = dark ? siteConfig.logoDark : siteConfig.logoLight;

  return (
    <div className={`relative ${compact ? 'h-11 w-[174px] sm:h-12 sm:w-[188px]' : 'h-12 w-[188px] sm:h-14 sm:w-[220px]'}`}>
      <img
        src={logoSrc}
        alt={siteConfig.name}
        className='h-full w-full object-contain object-left'
        loading='eager'
        decoding='async'
      />
    </div>
  );
}

function FullBleedSection({
  kicker,
  title,
  text,
  image,
  imageMobile,
  alt,
  align = 'left',
  mobileFocus = 'center'
}: {
  kicker: string;
  title: string;
  text: string;
  image: string;
  imageMobile?: string;
  alt: string;
  align?: 'left' | 'right';
  mobileFocus?: string;
}) {
  return (
    <section className="relative isolate min-h-[78svh] overflow-hidden sm:min-h-[84svh] md:min-h-[92svh]">
      <div className="absolute inset-0 hidden md:block">
        <Image src={image} alt={alt} fill sizes="100vw" className={`object-cover ${align === 'right' ? 'object-[38%_center]' : 'object-[62%_center]'}`} />
      </div>
      <div className="absolute inset-0 md:hidden">
        <Image src={imageMobile ?? image} alt={alt} fill sizes="100vw" className={`object-cover ${mobileFocus}`} />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,14,28,0.04)_0%,rgba(10,14,28,0.10)_36%,rgba(10,14,28,0.30)_100%)] md:bg-[linear-gradient(180deg,rgba(10,14,28,0.03)_0%,rgba(10,14,28,0.10)_34%,rgba(10,14,28,0.26)_100%)]" />
      <div className={`relative mx-auto flex min-h-[78svh] max-w-[1360px] items-end px-5 py-6 sm:min-h-[84svh] sm:px-6 sm:py-10 lg:px-8 lg:py-14 md:min-h-[92svh] ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
        <Reveal className="w-full max-w-[640px] rounded-[1.85rem] border border-white/35 bg-[rgba(14,18,38,0.20)] p-5 text-white shadow-soft backdrop-blur-lg sm:rounded-[2rem] sm:p-7 lg:p-10">
          <SectionKicker>{kicker}</SectionKicker>
          <h2 className="mt-5 font-serif text-[2.2rem] leading-[0.94] tracking-[-0.05em] text-white sm:text-[3.3rem] lg:text-[4.6rem]">{title}</h2>
          <p className="mt-4 max-w-[55ch] text-[15px] leading-7 text-white/88 sm:text-lg sm:leading-8">{text}</p>
          <Link href={whatsappLink} target="_blank" rel="noreferrer" className="mt-7 inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-medium text-navy transition hover:-translate-y-0.5">
            Agendar por WhatsApp
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

type VideoModalState = {
  title: string;
  src: string;
  poster: string;
};

function EditorialVideo({
  id,
  title,
  text,
  src,
  poster,
  reversed = false,
  onOpen
}: {
  id: string;
  title: string;
  text: string;
  src: string;
  poster: string;
  reversed?: boolean;
  onOpen: (video: VideoModalState) => void;
}) {
  return (
    <section id={id} className="py-20 sm:py-28">
      <div className="container-shell">
        <div className={`grid gap-7 xl:items-end ${reversed ? 'xl:grid-cols-[1.04fr_0.96fr]' : 'xl:grid-cols-[0.96fr_1.04fr]'}`}>
          <Reveal className={reversed ? 'xl:order-2 max-w-xl pb-2' : 'max-w-xl pb-2'}>
            <SectionKicker dark>ORTHOCLINIX</SectionKicker>
            <h2 className="section-title mt-6">{title}</h2>
            <p className="mt-5 text-base leading-8 text-slate sm:text-lg">{text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onOpen({ title, src, poster })}
                className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5"
              >
                Ver video completo
              </button>
              <Link href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex rounded-full border border-black/10 bg-white/80 px-6 py-3.5 text-sm font-medium text-navy backdrop-blur transition hover:-translate-y-0.5">
                Agendar por WhatsApp
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08} className={reversed ? 'xl:order-1' : ''}>
            <button
              type="button"
              onClick={() => onOpen({ title, src, poster })}
              aria-label={`Ver video completo: ${title}`}
              className="group relative block w-full overflow-hidden rounded-[2.2rem] bg-[#ece7e0] shadow-soft text-left"
            >
              <div className="relative aspect-[10/13] overflow-hidden rounded-[2.2rem] sm:aspect-[4/5]">
                <Image src={poster} alt={`Portada de video: ${title}`} fill sizes="(min-width: 1280px) 48vw, 100vw" className="object-contain p-3 sm:p-4" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/12" />
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-[1.4rem] border border-white/45 bg-[rgba(15,21,55,0.28)] px-4 py-3 text-white backdrop-blur-xl sm:inset-x-5 sm:bottom-5 sm:px-5 sm:py-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-white/72">Video completo</p>
                    <p className="mt-1 text-sm font-medium leading-6 text-white sm:text-base">Toca para verlo sin recortes</p>
                  </div>
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-white/60 bg-white/16 text-2xl transition group-hover:scale-105">▶</span>
                </div>
              </div>
            </button>
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
  const [activeVideo, setActiveVideo] = useState<VideoModalState | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || activeVideo ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen, activeVideo]);

  useEffect(() => {
    if (!activeVideo) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveVideo(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeVideo]);

  return (
    <main className="relative overflow-x-clip">
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'px-3 pt-3' : 'px-0 pt-0'}`}>
        <div className={`mx-auto flex max-w-[1320px] items-center justify-between rounded-3xl border px-4 py-3 shadow-soft transition-all duration-300 sm:px-6 ${scrolled ? 'glass-panel' : 'border-white/55 bg-white/[0.62] backdrop-blur-xl'}`}>
          <a href="#inicio" aria-label="Ir al inicio" className="flex items-center gap-3">
            <BrandLogo compact />
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a key={item[1]} href={item[1]} className="text-sm text-slate transition hover:text-navy">
                {item[0]}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <Link href={whatsappLink} target="_blank" rel="noreferrer" className="rounded-full border border-black/10 bg-white/[0.9] px-5 py-3 text-sm font-medium text-navy backdrop-blur transition hover:-translate-y-0.5">
              Agendar evaluación
            </Link>
          </div>

          <button type="button" onClick={() => setMenuOpen(true)} className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white/90 text-navy shadow-card lg:hidden" aria-label="Abrir menú">
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
          <div className="flex items-center gap-3"><BrandLogo dark compact /></div>
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

      {activeVideo && (
        <div className="fixed inset-0 z-[90] bg-[#0b1028]/82 p-3 backdrop-blur-md sm:p-5" onClick={() => setActiveVideo(null)}>
          <div className="mx-auto flex h-full w-full max-w-[1320px] items-center justify-center">
            <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/15 bg-[#0f1537] shadow-soft" onClick={(event) => event.stopPropagation()}>
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 text-white sm:px-6 sm:py-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/60">Video completo</p>
                  <h3 className="mt-1 text-sm font-medium text-white sm:text-base">{activeVideo.title}</h3>
                </div>
                <button type="button" onClick={() => setActiveVideo(null)} className="grid h-11 w-11 place-items-center rounded-full border border-white/18 bg-white/10 text-lg text-white transition hover:bg-white/16" aria-label="Cerrar video">✕</button>
              </div>
              <div className="relative flex max-h-[calc(100svh-7rem)] min-h-[60svh] items-center justify-center bg-black">
                <video key={activeVideo.src} className="max-h-[calc(100svh-7rem)] w-full object-contain" controls autoPlay playsInline preload="metadata" poster={activeVideo.poster} src={activeVideo.src} />
              </div>
            </div>
          </div>
        </div>
      )}

      <section id="inicio" className="relative isolate min-h-[100svh] overflow-hidden bg-[#f6f1ea]">
        <div className="absolute inset-0 hidden md:block">
          <Image src="/assets/hero/hero-desktop.webp" alt="ORTHOCLINIX hero desktop" fill priority sizes="100vw" className="object-cover object-center" />
        </div>
        <div className="absolute inset-0 md:hidden">
          <Image src="/assets/hero/hero-mobile.webp" alt="ORTHOCLINIX hero mobile" fill priority sizes="100vw" className="object-cover object-[52%_center]" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,243,236,0.18)_0%,rgba(248,243,236,0.10)_30%,rgba(248,243,236,0.66)_78%,rgba(248,243,236,0.92)_100%)] md:bg-[linear-gradient(90deg,rgba(248,243,236,0.88)_0%,rgba(248,243,236,0.68)_40%,rgba(248,243,236,0.16)_72%,rgba(248,243,236,0.02)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(76,193,176,0.07),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(35,38,98,0.08),transparent_35%)]" />
        <div className="absolute -left-16 top-20 h-72 w-72 rounded-full bg-[#4CC1B0]/6 blur-[90px]" />
        <div className="absolute right-0 top-0 h-[24rem] w-[24rem] rounded-full bg-[#232662]/6 blur-[120px]" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-[1320px] items-end px-5 pb-8 pt-28 sm:px-6 sm:pb-12 sm:pt-32 lg:px-8 lg:pb-16 lg:pt-36">
          <div className="grid w-full gap-8">
            <div className="max-w-[760px]">
              <motion.span initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/82 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-navy shadow-card backdrop-blur">
                Ortodoncia premium en {siteConfig.city}
              </motion.span>
              <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.08 }} className="mt-5 max-w-[11ch] font-serif text-[3.2rem] leading-[0.9] tracking-[-0.06em] text-navy sm:text-[4.5rem] lg:text-[6.1rem] xl:text-[7rem]">
                Una sonrisa bien cuidada cambia toda la experiencia.
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.18 }} className="mt-4 max-w-[620px] text-[15px] leading-7 text-slate sm:text-lg sm:leading-8">
                Más de 28 años de experiencia, atención cálida y un plan claro desde la evaluación hasta el resultado final.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.28 }} className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5">
                  Agendar por WhatsApp
                </Link>
                <a href="#evaluacion" className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/78 px-6 py-3.5 text-sm font-medium text-navy backdrop-blur transition hover:bg-white/92">
                  Ver evaluación
                </a>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.38 }} className="mt-8 grid max-w-[660px] grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
                <div className="min-h-[132px] rounded-[1.35rem] border border-black/10 bg-white/82 p-4 shadow-card backdrop-blur-md sm:min-h-0 sm:rounded-[1.6rem] sm:p-5">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-slate sm:text-[11px]">Experiencia</div>
                  <div className="mt-3 font-serif text-[2.3rem] leading-none text-navy sm:text-4xl">28+</div>
                </div>
                <div className="min-h-[132px] rounded-[1.35rem] border border-black/10 bg-white/82 p-4 shadow-card backdrop-blur-md sm:min-h-0 sm:rounded-[1.6rem] sm:p-5">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-slate sm:text-[11px]">Casos</div>
                  <div className="mt-3 font-serif text-[2.3rem] leading-none text-navy sm:text-4xl">2000+</div>
                </div>
                <div className="col-span-2 min-h-[116px] rounded-[1.35rem] border border-black/10 bg-white/82 p-4 shadow-card backdrop-blur-md sm:col-span-1 sm:min-h-0 sm:rounded-[1.6rem] sm:p-5">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-slate sm:text-[11px]">Reseñas</div>
                  <div className="mt-3 flex items-end justify-between gap-4 sm:block">
                    <span className="font-serif text-[2.3rem] leading-none text-navy sm:text-4xl">33</span>
                    <span className="text-sm font-medium text-navy sm:mt-2 sm:block sm:text-base">5★ promedio</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }} className="absolute bottom-5 right-5 hidden max-w-[330px] rounded-[1.8rem] border border-white/50 bg-white/74 p-5 text-navy shadow-soft backdrop-blur-xl lg:block xl:bottom-8 xl:right-8 xl:p-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-slate">Atención personalizada</p>
          <p className="mt-3 text-lg leading-7 text-ink">Siempre te atiende el mismo doctor o doctora, con diagnósticos claros y un tratamiento pensado para ti.</p>
        </motion.div>
      </section>

      <section className="pb-10 pt-10 sm:pb-16 sm:pt-16">
        <div className="container-shell">
          <Reveal className="border-y border-black/[0.08] py-9 sm:py-11">
            <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <p className="font-serif text-[2.45rem] leading-[0.98] tracking-[-0.04em] text-navy sm:text-[3.2rem] lg:text-[4rem]">Experiencia, claridad y tecnología para una sonrisa que se vea bien y se sienta bien.</p>
              <p className="max-w-2xl text-base leading-8 text-slate sm:ml-auto sm:text-lg">Ortodoncia y odontología general con diagnóstico claro, atención cercana y una experiencia más cuidada desde la primera cita.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="experiencia" className="py-16 sm:py-24">
        <div className="container-shell grid gap-8 xl:grid-cols-[1.06fr_0.94fr] xl:items-end">
          <Reveal className="relative min-h-[540px] overflow-hidden rounded-[2.25rem] bg-[#e7e0d8] shadow-soft sm:min-h-[660px]">
            <Image src="/assets/gallery/gallery-01.webp" alt="Ambiente editorial de Orthoclinix" fill sizes="(min-width: 1280px) 52vw, 100vw" className="object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/10" />
          </Reveal>
          <Reveal delay={0.08} className="max-w-xl xl:pb-12">
            <SectionKicker dark>La experiencia Orthoclinix</SectionKicker>
            <h2 className="section-title mt-6">Ortodoncia con trato humano, visión clínica integral y un ambiente que transmite calma.</h2>
            <p className="mt-5 text-base leading-8 text-slate sm:text-lg">Aquí se trabaja la sonrisa, la mordida y la salud dental integral con tecnología de vanguardia, atención cercana y una explicación clara en cada etapa.</p>
            <p className="mt-5 text-base leading-8 text-slate sm:text-lg">El objetivo no es solo alinear dientes, sino acompañar todo el proceso con consistencia clínica y una experiencia cómoda de principio a fin.</p>
            <Link href={whatsappLink} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-navy px-6 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5">Solicitar evaluación</Link>
          </Reveal>
        </div>
      </section>

      <FullBleedSection kicker="La experiencia" title="Una clínica que se siente más cálida, tranquila y cuidada desde que llegas." text="Diseño, atención y ambiente se alinean para que la visita se sienta más humana, clara y cómoda desde el primer momento." image="/assets/fullscreen/fullscreen-01.webp" imageMobile="/assets/fullscreen/fullscreen-01-mobile.webp" alt="Escena editorial full screen para Orthoclinix" mobileFocus="object-[58%_center]" />

      <section id="servicios" className="py-16 sm:py-24">
        <div className="container-shell grid gap-10 xl:grid-cols-[0.84fr_1.16fr] xl:items-start">
          <Reveal className="max-w-md xl:sticky xl:top-28">
            <SectionKicker dark>Servicios principales</SectionKicker>
            <h2 className="section-title mt-6">Tratamientos pensados para función, estética y salud a largo plazo.</h2>
            <p className="mt-5 text-base leading-8 text-slate sm:text-lg">Ortodoncia tradicional y estética, junto con tratamientos complementarios que refuerzan una atención integral.</p>
            <div className="mt-8 overflow-hidden rounded-[2rem] bg-[#e7e1d9] shadow-card"><div className="relative aspect-[4/5]"><Image src="/assets/gallery/gallery-02.webp" alt="Escena clínica editorial" fill sizes="(min-width: 1280px) 28vw, 100vw" className="object-cover" /></div></div>
          </Reveal>

          <div className="space-y-1 border-t border-black/10">
            {services.map((service, index) => (
              <Reveal key={service[0]} delay={index * 0.05} className="grid gap-4 border-b border-black/10 py-6 sm:grid-cols-[80px_0.82fr_1.18fr] sm:items-start sm:py-8">
                <span className="font-serif text-[2.1rem] leading-none text-teal sm:pt-1">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="font-serif text-[2rem] leading-[1.02] tracking-[-0.03em] text-navy sm:text-[2.3rem]">{service[0]}</h3>
                <p className="max-w-xl text-base leading-8 text-slate sm:pt-1">{service[1]}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <EditorialVideo id="video-01" title="Conoce mejor la clínica, la forma de atención y el cuidado puesto en cada detalle." text="Aquí puede ir un recorrido breve, una explicación clínica o una pieza audiovisual que ayude a transmitir confianza y claridad. Al tocar la portada, el video se abre completo y sin recortes dentro de la landing." src="/assets/videos/video-01.mp4" poster="/assets/videos/video-01-poster.webp" onOpen={setActiveVideo} />
      <section className="py-16 sm:py-24">
        <div className="container-shell grid gap-8 xl:grid-cols-[1.02fr_0.98fr] xl:items-end">
          <Reveal className="max-w-xl xl:pb-8">
            <SectionKicker dark>Por qué elegir Orthoclinix</SectionKicker>
            <h2 className="section-title mt-6">Por qué pacientes y familias eligen Orthoclinix.</h2>
            <div className="mt-8 space-y-5">
              {differentiators.map((item, index) => (
                <div key={item} className="grid grid-cols-[32px_1fr] gap-4 border-b border-black/[0.08] pb-5">
                  <span className="font-serif text-[1.6rem] leading-none text-teal">{String(index + 1).padStart(2, '0')}</span>
                  <p className="text-base leading-8 text-slate">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08} className="relative min-h-[540px] overflow-hidden rounded-[2.25rem] bg-[#e8e2da] shadow-soft sm:min-h-[660px]">
            <Image src="/assets/gallery/gallery-03.webp" alt="Orthoclinix atención clínica premium" fill sizes="(min-width: 1280px) 48vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
          </Reveal>
        </div>
      </section>

      <EditorialVideo id="video-02" title="Historias que ayudan a entender mejor la experiencia Orthoclinix." text="Este segundo video puede reforzar la decisión de agendar con resultados, testimonios o una pieza breve bien producida. También se abre completo para que se vea mejor en celular." src="/assets/videos/video-02.mp4" poster="/assets/videos/video-02-poster.webp" reversed onOpen={setActiveVideo} />

      <section id="proceso" className="py-16 sm:py-24">
        <div className="container-shell grid gap-10 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
          <Reveal className="max-w-md xl:sticky xl:top-28">
            <SectionKicker dark>Proceso</SectionKicker>
            <h2 className="section-title mt-6">Cinco pasos claros para pasar de la evaluación al resultado con tranquilidad.</h2>
          </Reveal>
          <div className="space-y-5">
            {processSteps.map((step, index) => (
              <Reveal key={step[0]} delay={index * 0.05} className="grid gap-4 rounded-[1.85rem] border border-white/70 bg-white/[0.78] p-5 shadow-card backdrop-blur sm:grid-cols-[80px_1fr] sm:p-7">
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

      <FullBleedSection kicker="Evaluación clara" title="Todo empieza con una valoración bien explicada y pensada para darte seguridad." text="Radiografías, fotos y escaneo digital cuando corresponde ayudan a entender tu caso con más contexto y confianza." image="/assets/fullscreen/fullscreen-02.webp" imageMobile="/assets/fullscreen/fullscreen-02-mobile.webp" alt="Escena editorial full screen secundaria para Orthoclinix" align="right" mobileFocus="object-[44%_center]" />

      <section id="evaluacion" className="py-16 sm:py-24">
        <div className="container-shell grid gap-8 xl:grid-cols-[1.04fr_0.96fr] xl:items-start">
          <Reveal className="max-w-xl">
            <SectionKicker dark>Evaluación y precios</SectionKicker>
            <h2 className="section-title mt-6">Consulta básica, consulta con escaneo y extras, todo claro desde el principio.</h2>
            <p className="mt-5 text-base leading-8 text-slate sm:text-lg">La inversión se presenta de forma simple para comparar opciones y escribir por WhatsApp con más claridad.</p>
          </Reveal>
          <Reveal delay={0.08} className="rounded-[2.1rem] bg-[#f3eee7] p-6 shadow-soft sm:p-8">
            <div className="grid gap-5 xl:grid-cols-2">
              {prices.map((plan, index) => (
                <div key={plan.title} className={`rounded-[1.85rem] border p-6 ${index === 1 ? 'border-teal/30 bg-white shadow-card' : 'border-black/[0.08] bg-white/[0.72]'}`}>
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
            <div className="mt-6 rounded-[1.85rem] border border-black/[0.08] bg-white/[0.72] p-6">
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
            <SectionKicker dark>FAQ</SectionKicker>
            <h2 className="section-title mt-6">Preguntas frecuentes antes de agendar.</h2>
          </Reveal>
          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <Reveal key={item[0]} delay={index * 0.04}>
                  <button type="button" onClick={() => setOpenFaq(isOpen ? -1 : index)} className="w-full rounded-[1.75rem] border border-white/60 bg-white/[0.74] p-5 text-left shadow-card backdrop-blur sm:p-6">
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
        <div className="mx-auto max-w-[1280px] overflow-hidden rounded-[2.4rem] bg-[#0f1537] text-white shadow-soft">
          <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr] xl:items-stretch">
            <Reveal className="relative z-10 p-8 sm:p-10 lg:p-14">
              <SectionKicker>Agenda tu evaluación</SectionKicker>
              <h2 className="mt-6 font-serif text-[3rem] leading-[0.94] tracking-[-0.04em] text-white sm:text-[4rem] lg:text-[5rem]">El siguiente paso hacia una sonrisa más armónica puede empezar hoy.</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/[0.78] sm:text-lg">Si buscas ortodoncia tradicional o estética en {siteConfig.city} con trato humano, experiencia real y una atención más cuidada, escribe por WhatsApp para agendar tu evaluación.</p>
              <Link href={whatsappLink} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-medium text-navy transition hover:-translate-y-0.5">Quiero agendar por WhatsApp</Link>
            </Reveal>
            <Reveal delay={0.08} className="relative min-h-[340px] xl:min-h-full">
              <Image src="/assets/gallery/gallery-04.webp" alt="Orthoclinix cierre visual" fill sizes="(min-width: 1280px) 50vw, 100vw" className="object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0f1537] via-[#0f1537]/30 to-transparent xl:bg-gradient-to-l xl:from-transparent xl:via-[#0f1537]/20 xl:to-[#0f1537]/10" />
            </Reveal>
          </div>
        </div>
      </section>

      <footer id="contacto" className="pb-24 pt-8 sm:pb-12">
        <div className="container-shell">
          <div className="grid gap-8 border-t border-black/[0.08] pt-8 sm:grid-cols-2 xl:grid-cols-[1fr_0.8fr_0.8fr]">
            <div>
              <div className="flex items-center gap-3"><BrandLogo dark compact /></div>
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
