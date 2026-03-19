export const siteConfig = {
  name: 'ORTHOCLINIX',
  phoneRaw: '69030302',
  phoneDisplay: '6903-0302',
  email: 'Orthoclinixpty@gmail.com',
  instagram: '@Ortho.clinix',
  facebook: '@Ortho.clinix',
  address: 'Edificio Baleares #5, Clínica de Ortodoncia y Odontología General, Vía Argentina, El Cangrejo',
  hours: '10:30 am a 12:00 pm y de 2:00 pm a 6:00 pm',
  city: 'Ciudad de Panamá',
  doctorName: 'Dr. Ramiro Cedeño García',
  googleReviewsLink: 'https://www.google.com/maps/place/Clinica+de+Ortodoncia,+Dr.+Ramiro+Cede%C3%B1o+Garcia+(Orthoclinix)/@8.9884996,-79.524938,17z/data=!3m1!4b1!4m6!3m5!1s0x8faca8fa45b4669f:0x4531794e37faffba!8m2!3d8.9884996!4d-79.524938!16s%2Fg%2F11g6rcj71f!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D',
  logoLight: '/assets/brand/logo-header.svg',
  logoDark: '/assets/brand/logo-footer.svg'
};

export const whatsappMessage = 'Hola, vi la landing de Orthoclinix y quiero agendar una evaluación.';
export const whatsappLink = `https://wa.me/507${siteConfig.phoneRaw}?text=${encodeURIComponent(whatsappMessage)}`;
