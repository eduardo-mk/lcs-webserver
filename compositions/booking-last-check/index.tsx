import Button from '../../components/button';

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

function LastCheck({ clickHandler, planSelection, userData, dayAndTime }) {
  const { name } = planSelection;
  const { firstName, lastName, email } = userData;
  const { day, time } = dayAndTime;
  let dayFormated = '';
  if (day && day.toLocaleDateString !== undefined) {
    dayFormated = day.toLocaleDateString('es-MX', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  return (
    <section className="last-check">
      <div className="last-check__plan plan">
        <span className="plan__tag">Seleccion</span>
        <div className="plan__name">{name}</div>
      </div>
      <div className="last-check__your-info your-info">
        <span className="your-info__first-name-tag">Nombre</span>
        <div className="your-info__first-name">{firstName}</div>
        <span className="your-info__last-name-tag">Apellido</span>
        <div className="your-info__last-name">{lastName}</div>
        <span className="your-info__email-tag">Correo</span>
        <div className="your-info__email">{email}</div>
      </div>
      <div className="last-check__day-time day-time">
        <span className="day-time__day-tag">Día de la cita</span>
        <div className="day-time__day-selection">{dayFormated}</div>
        <span className="day-time__time-tag">Hora (PST)</span>
        <div className="day-time__time-selection">
          {translate_24_to_12[time]}
        </div>
      </div>
      <div>
        <ul>
          <li>
            <p>
              Si algo no es correcto puedes regresar a las vistas previas y
              cambiar tu selección.
            </p>
          </li>
          <li>
            <p>
              La información personal será utilizada única y exclusivamente para
              fines de contacto. Tu informacion tampoco será compartida ni
              utilizada para fines de marketing.
            </p>
          </li>
          <li>
            <p>
              Una vez concretado el pago se le enviará un formulario que deberá
              llenar (preferentemente) previo a consulta con el fin de
              aprovechar mejor el tiempo.
            </p>
          </li>
          <li>
            <p>PST - Hora del Pacífico</p>
          </li>
        </ul>
      </div>
      <Button onClick={clickHandler}>Confirmar</Button>
    </section>
  );
}

export default LastCheck;
