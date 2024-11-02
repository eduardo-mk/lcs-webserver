import React from 'react';

const PoliticaPrivacidad = () => {
  return (
    <div className="container mx-auto my-40 max-w-2xl font-sans text-neutral-800 leading-relaxed">
      <h1 className="text-3xl font-bold text-neutral-900 mb-6">
        Política de Privacidad
      </h1>

      <p className="mb-4">
        En <span className="font-semibold">Vero Varela Nutrición</span>,
        valoramos y respetamos la privacidad de nuestros usuarios. Esta Política
        de Privacidad describe cómo recogemos, usamos y protegemos la
        información proporcionada a través de nuestra plataforma.
      </p>

      <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
        1. Información que Recopilamos
      </h2>
      <p className="mb-4">
        Recopilamos la siguiente información de los usuarios que inician sesión
        a través de su cuenta de Google:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Nombre:</strong> Utilizado para personalizar la experiencia
          del usuario.
        </li>
        <li>
          <strong>Correo electrónico:</strong> Utilizado para enviar información
          sobre comprobantes de pago, avisos de cancelación o devolución, y para
          compartir información importante relacionada con el formulario previo
          de salud necesario antes de las citas online.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
        2. Finalidad del Uso de los Datos
      </h2>
      <p className="mb-4">
        Los datos proporcionados por el usuario a través de la sesión de Google
        solo se utilizan para:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Enviar comprobantes de pago y otros documentos relacionados con el
          servicio solicitado.
        </li>
        <li>
          Informar sobre cancelaciones o devoluciones de citas o servicios.
        </li>
        <li>
          Compartir información sobre el formulario de salud que se debe
          completar antes de las citas online.
        </li>
      </ul>
      <p className="mb-4">
        No utilizamos la información proporcionada para ningún otro propósito, y
        no realizamos ningún tipo de seguimiento o análisis de comportamiento de
        los usuarios.
      </p>

      <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
        3. Protección de la Información
      </h2>
      <p className="mb-4">
        Mantenemos medidas de seguridad adecuadas para proteger la información
        personal proporcionada por los usuarios y evitar el acceso no
        autorizado, alteración, divulgación o destrucción de la información.
      </p>

      <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
        4. Derechos de los Usuarios
      </h2>
      <p className="mb-4">
        El usuario tiene derecho a acceder, corregir o eliminar sus datos
        personales en cualquier momento. Para ejercer estos derechos, puede
        contactarnos a través de{' '}
        <a className="italic" href="mailto:nutriologaverovarela@gmail.com">
          nutriologaverovarela@gmail.com
        </a>
        . También puede retirar su consentimiento para el uso de sus datos
        personales en cualquier momento.
      </p>

      <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
        5. Retención de Datos
      </h2>
      <p className="mb-4">
        Conservamos los datos personales proporcionados por los usuarios
        únicamente durante el tiempo necesario para cumplir con los fines
        descritos en esta Política de Privacidad o según lo exija la ley. Una
        vez finalizada la relación contractual, los datos serán eliminados de
        manera segura.
      </p>

      <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
        6. Transferencia Internacional de Datos
      </h2>
      <p className="mb-4">
        La información personal recopilada puede ser transferida y procesada
        fuera de México, donde garantizamos un nivel adecuado de protección
        conforme a las normativas aplicables.
      </p>

      <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
        7. Consentimiento
      </h2>
      <p className="mb-4">
        Al utilizar nuestro servicio y autenticarse con su cuenta de Google, el
        usuario acepta la recolección y el uso de su información de acuerdo con
        esta Política de Privacidad.
      </p>

      <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
        8. Cambios en la Política de Privacidad
      </h2>
      <p className="mb-4">
        Nos reservamos el derecho de actualizar esta Política de Privacidad en
        cualquier momento. Si realizamos cambios, notificaremos a los usuarios
        mediante un aviso en nuestra plataforma o por correo electrónico.
      </p>

      <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
        9. Contacto
      </h2>
      <p className="mb-4">
        Si tiene alguna pregunta o inquietud sobre esta Política de Privacidad,
        no dude en ponerse en contacto con nosotros a través de{' '}
        <a className="italic" href="mailto:nutriologaverovarela@gmail.com">
          nutriologaverovarela@gmail.com
        </a>
        .
      </p>
    </div>
  );
};

export default PoliticaPrivacidad;
