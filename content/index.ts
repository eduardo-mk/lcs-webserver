export const mainPage = {
  'heading-primary-main': 'Veronica',
  'heading-primary-sub': 'Nutrición y Lactancia',
  'online-booking-cta': 'Programa tu Cita',
  'heading-secondary': 'Planes mas populares',
};

export const userInfoAssociatedContent = {
  'user-info-not-valiud-form-error-msg':
    'Algun dato es incorrecto ¿Podrías revisar si la información es correcta?',
  'user-info-can-not-be-registered': `Lo sentimos, por el momento no podemos continuar con el proceso de registro, el servicio estará dispoinble pronto`,
  'user-info-footer-disclaimer': `La informacion sera utilizada para mandarle un cuestionario de salud.\nLe recomendamos contestar dicho cuestionario antes de la consulta para\naprovechar mejor el tiempo.`,
  'contact-info-disclusure-1': 'La informacion sera utilizada para mandarle un cuestionario de salud.',
  'contact-info-header-simple': 'Registro simple',
  'contact-info-instruction': `Necesitaremos un correo electrónico y tu nombre, para completar este paso es necesario iniciar una session.`,
  'step-1': 'Registro',
  'step-2': 'Confirmación',
  'step-2-explanation':
    'Una vez completado el registro solo confirme con el código enviado a su correo.',
  'registration-done-button': 'Registrado',
  'registration-button': 'Registrar',
};

export const reviewApplicationContent = {
  'plan-selection': 'Selección',
  'your-info-name': 'Nombre',
  'your-info-lastname': 'Apellido',
  'your-info-email': 'email',
  day: 'Día de la cita',
  time: 'Hora (PST)',
  'banner-suggestion-user-review-options':
    'Si algo no es correcto puedes regresar a las vistas previas y cambiar tu selección.',
  'banner-disclosure-personal-info':
    'La información personal será utilizada única y exclusivamente para fines de contacto. Tu informacion tampoco será compartida ni utilizada para fines de marketing.',
  'banner-notice-next-steps':
    'La información personal será utilizada única y exclusivamente para fines de contacto. Tu informacion tampoco será compartida ni utilizada para fines de marketing.',
  'banner-time-zone': 'PST - Hora del Pacífico',
};

export const translate_24_to_12 = {
  '00:00:00': '12:00 am',
  '01:00:00': '1:00 am',
  '02:00:00': '2:00 am',
  '03:00:00': '3:00 am',
  '04:00:00': '4:00 am',
  '05:00:00': '6:00 am',
  '06:00:00': '6:00 am',
  '07:00:00': '7:00 am',
  '08:00:00': '8:00 am',
  '09:00:00': '9:00 am',
  '10:00:00': '10:00 am',
  '11:00:00': '11:00 am',
  '12:00:00': '12:00 pm',
  '13:00:00': '1:00 pm',
  '14:00:00': '2:00 pm',
  '15:00:00': '3:00 pm',
  '16:00:00': '4:00 pm',
  '17:00:00': '5:00 pm',
  '18:00:00': '6:00 pm',
  '19:00:00': '7:00 pm',
  '20:00:00': '8:00 pm',
  '21:00:00': '9:00 pm',
  '22:00:00': '10:00 pm',
  '23:00:00': '11:00 pm',
  '24:00:00': '12:00 am',
};

export const booking_progress_bar_steps = [
  { id: '01', name: 'Información de contacto', href:'/booking/user-info', status: 'upcoming' },
  { id: '02', name: 'Elige una consulta', href:'/booking/plans', status: 'upcoming' },
  { id: '03', name: 'Elige un día y una hora', href:'/booking/day-time', status: 'upcoming' },
  { id: '04', name: 'Confirma que todo sea correcto', href:'/booking/review', status: 'upcoming' },
  { id: '05', name: 'Efectuar pago', href:'/booking/payment', status: 'upcoming' },
];

export { navigationItems } from './nav-bar';
