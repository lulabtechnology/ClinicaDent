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
  logoLight: '/assets/brand/logo-light.svg',
  logoDark: '/assets/brand/logo-dark.svg'
};

export const whatsappMessage = 'Hola, vi la landing de Orthoclinix y quiero agendar una evaluación.';
export const whatsappLink = `https://wa.me/507${siteConfig.phoneRaw}?text=${encodeURIComponent(whatsappMessage)}`;
