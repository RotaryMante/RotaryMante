import { Component } from '@angular/core';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faBullseye, faGears } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public homeImgArray = [
    /*
    {
      imageSrc: 'assets/home-carousel/',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    */
    {
      imageSrc: 'assets/home-carousel/meet_intercambista_1.jpg',
      imageAlt: '',
      imageTitle:
        'Un Encuentro de Sueños: El Club Rotario Mante y la Próxima Intercambista del Programa de Intercambio de Jóvenes',
      imageContent:
        'En una emotiva reunión, el Club Rotario Mante tuvo el privilegio de conocer a la familia de nuestra próxima intercambista del programa de Intercambio de Jóvenes. Juntos compartimos sueños, expectativas y el compromiso compartido de enriquecer vidas a través del intercambio cultural. Con gratitud y entusiasmo, damos la bienvenida a esta nueva etapa de amistad y aprendizaje mutuo.',
    },
    {
      imageSrc: 'assets/home-carousel/meet_intercambista_2.jpg',
      imageAlt: '',
      imageTitle:
        'Un Encuentro de Sueños: El Club Rotario Mante y la Próxima Intercambista del Programa de Intercambio de Jóvenes',
      imageContent:
        'En una emotiva reunión, el Club Rotario Mante tuvo el privilegio de conocer a la familia de nuestra próxima intercambista del programa de Intercambio de Jóvenes. Juntos compartimos sueños, expectativas y el compromiso compartido de enriquecer vidas a través del intercambio cultural. Con gratitud y entusiasmo, damos la bienvenida a esta nueva etapa de amistad y aprendizaje mutuo.',
    },
    {
      imageSrc: 'assets/home-carousel/dia_amistad_1.jpg',
      imageAlt: '',
      imageTitle:
        'Unión y Servicio: Bienvenida a Erika Sandoval en el Día del Amor y la Amistad',
      imageContent:
        'El Club Rotario Mante se llena de alegría al dar la más cordial bienvenida a nuestro nuevo miembro, Erika Sandoval. En este día especial, en que celebramos el amor y la amistad, renovamos nuestro compromiso de servir a la comunidad con pasión y dedicación. ¡Que la camaradería y el espíritu de servicio nos guíen en cada paso hacia un mundo mejor para todos!',
    },
    {
      imageSrc: 'assets/home-carousel/dia_amistad_2.JPG',
      imageAlt: '',
      imageTitle:
        'Unión y Servicio: Bienvenida a Erika Sandoval en el Día del Amor y la Amistad',
      imageContent:
        'El Club Rotario Mante se llena de alegría al dar la más cordial bienvenida a nuestro nuevo miembro, Erika Sandoval. En este día especial, en que celebramos el amor y la amistad, renovamos nuestro compromiso de servir a la comunidad con pasión y dedicación. ¡Que la camaradería y el espíritu de servicio nos guíen en cada paso hacia un mundo mejor para todos!',
    },
    {
      imageSrc: 'assets/home-carousel/dia_amistad_3.jpg',
      imageAlt: '',
      imageTitle:
        'Unión y Servicio: Bienvenida a Erika Sandoval en el Día del Amor y la Amistad',
      imageContent:
        'El Club Rotario Mante se llena de alegría al dar la más cordial bienvenida a nuestro nuevo miembro, Erika Sandoval. En este día especial, en que celebramos el amor y la amistad, renovamos nuestro compromiso de servir a la comunidad con pasión y dedicación. ¡Que la camaradería y el espíritu de servicio nos guíen en cada paso hacia un mundo mejor para todos!',
    },
    {
      imageSrc: 'assets/home-carousel/celebracion_navidad_1.jpg',
      imageAlt: '',
      imageTitle:
        'Brillante Posada Navideña en el Corazón del Ejido Brownsville',
      imageContent:
        'Luces parpadeantes, risas en el aire y corazones rebosantes de alegría marcaron la inolvidable posada navideña en el Ejido Brownsville. En esta mágica noche, el espíritu de la comunidad brilló con fuerza mientras vecinos, amigos y el Club Rotario Mante se unieron para celebrar la temporada de paz y esperanza. Una velada llena de calidez y generosidad que iluminó los rostros de todos los presentes.',
    },
    {
      imageSrc: 'assets/home-carousel/celebracion_navidad_2.jpg',
      imageAlt: '',
      imageTitle:
        'Brillante Posada Navideña en el Corazón del Ejido Brownsville',
      imageContent:
        'Luces parpadeantes, risas en el aire y corazones rebosantes de alegría marcaron la inolvidable posada navideña en el Ejido Brownsville. En esta mágica noche, el espíritu de la comunidad brilló con fuerza mientras vecinos, amigos y el Club Rotario Mante se unieron para celebrar la temporada de paz y esperanza. Una velada llena de calidez y generosidad que iluminó los rostros de todos los presentes.',
    },
    {
      imageSrc: 'assets/home-carousel/celebracion_navidad_3.jpg',
      imageAlt: '',
      imageTitle:
        'Brillante Posada Navideña en el Corazón del Ejido Brownsville',
      imageContent:
        'Luces parpadeantes, risas en el aire y corazones rebosantes de alegría marcaron la inolvidable posada navideña en el Ejido Brownsville. En esta mágica noche, el espíritu de la comunidad brilló con fuerza mientras vecinos, amigos y el Club Rotario Mante se unieron para celebrar la temporada de paz y esperanza. Una velada llena de calidez y generosidad que iluminó los rostros de todos los presentes.',
    },
    {
      imageSrc: 'assets/home-carousel/visita_ejido_brownsville_1.jpg',
      imageAlt: '',
      imageTitle:
        'Encuentro de Solidaridad: Club Rotario Mante y Kinder del Ejido Brownsville',
      imageContent:
        'El sábado 25 de noviembre, el Club Rotario Mante se desplazó al Ejido Brownsville con el propósito de abordar las problemáticas locales y explorar cómo podíamos brindar apoyo. Nos reunimos con la maestra Flor, encargada del Kinder del lugar, para comprender mejor las necesidades de la comunidad y ofrecer nuestra ayuda en donde más se requiera. Este encuentro nos permitió identificar áreas de acción para contribuir al bienestar y desarrollo de la zona.',
    },
    {
      imageSrc: 'assets/home-carousel/visita_ejido_brownsville_2.jpg',
      imageAlt: '',
      imageTitle:
        'Encuentro de Solidaridad: Club Rotario Mante y Kinder del Ejido Brownsville',
      imageContent:
        'El sábado 25 de noviembre, el Club Rotario Mante se desplazó al Ejido Brownsville con el propósito de abordar las problemáticas locales y explorar cómo podíamos brindar apoyo. Nos reunimos con la maestra Flor, encargada del Kinder del lugar, para comprender mejor las necesidades de la comunidad y ofrecer nuestra ayuda en donde más se requiera. Este encuentro nos permitió identificar áreas de acción para contribuir al bienestar y desarrollo de la zona.',
    },
    {
      imageSrc: 'assets/home-carousel/visita_dr_marin_1.JPG',
      imageAlt: '',
      imageTitle:
        'El día 20 de noviembre del 2023 recibimos la visita del Gobernador el Dr. Marin Martinez Mellado',
      imageContent:
        'Hoy es un honor para el Club Rotario Mante recibir al distinguido Dr. Marín Martínez Mellado, quien lidera con pasión y compromiso. Juntos, continuamos construyendo un mundo mejor a través del servicio.',
    },
    {
      imageSrc: 'assets/home-carousel/visita_dr_marin_2.jpg',
      imageAlt: '',
      imageTitle:
        'El día 20 de noviembre del 2023 recibimos la visita del Gobernador el Dr. Marin Martinez Mellado',
      imageContent:
        'Hoy es un honor para el Club Rotario Mante recibir al distinguido Dr. Marín Martínez Mellado, quien lidera con pasión y compromiso. Juntos, continuamos construyendo un mundo mejor a través del servicio.',
    },
    {
      imageSrc: 'assets/home-carousel/visita_dr_marin_3.JPG',
      imageAlt: '',
      imageTitle:
        'El día 20 de noviembre del 2023 recibimos la visita del Gobernador el Dr. Marin Martinez Mellado',
      imageContent:
        'Hoy es un honor para el Club Rotario Mante recibir al distinguido Dr. Marín Martínez Mellado, quien lidera con pasión y compromiso. Juntos, continuamos construyendo un mundo mejor a través del servicio.',
    },
    {
      imageSrc: 'assets/home-carousel/reconocimiento_covid_1.jpg',
      imageAlt: '',
      imageTitle: 'Reconocimiento por labor contra SARS-COV-2',
      imageContent:
        'El día 30 de octubre de 2023 tuvimos una agradable cena con un invitado especial, el Dr. Luis Gerardo Olvera Berrones, quien nos compartió su experiencia en el combate contra el SARS-COV-2, y se le entregó un reconocimiento por su labor en la lucha contra esta pandemia.',
    },
    {
      imageSrc: 'assets/home-carousel/reconocimiento_covid_2.jpg',
      imageAlt: '',
      imageTitle: 'Reconocimiento por labor contra SARS-COV-2',
      imageContent:
        'El día 30 de octubre de 2023 tuvimos una agradable cena con un invitado especial, el Dr. Luis Gerardo Olvera Berrones, quien nos compartió su experiencia en el combate contra el SARS-COV-2, y se le entregó un reconocimiento por su labor en la lucha contra esta pandemia.',
    },
    {
      imageSrc: 'assets/home-carousel/polio_1.jpg',
      imageAlt: '',
      imageTitle: '#EndPolioNow',
      imageContent:
        'Este día  Club Rotario Mante realizó una actividad para compartirle a la sociedad que Rotary sigue activo,  trabajando y  aportando para que ningún niño quedé sin recibir su vacuna en el mundo. Pongamos Fin a la Polio. ',
    },
    {
      imageSrc: 'assets/home-carousel/polio_2.jpg',
      imageAlt: '',
      imageTitle: '#EndPolioNow',
      imageContent:
        'Este día  Club Rotario Mante realizó una actividad para compartirle a la sociedad que Rotary sigue activo,  trabajando y  aportando para que ningún niño quedé sin recibir su vacuna en el mundo. Pongamos Fin a la Polio. ',
    },
    {
      imageSrc: 'assets/home-carousel/rehabilitacionjardin_1.jpg',
      imageAlt: '',
      imageTitle: 'Rotary Pinta México',
      imageContent: `Con gran entusiasmo el Club Rotario #Mante 6942 llevó a cabo en el jardín de niños Juan Jacobo Rousseau , una actividad para lograr  la rehabilitación de pintura de 3 aulas ( interior y exterior), un desayunador y los juegos metálicos del jardín de niños.
      En el marco del proyecto #RotaryPintaMéxico, se beneficiaron a 35 estudiantes de este preescolar ubicado en el ejido Cuauhtémoc municipio de El Mante.`,
    },
    {
      imageSrc: 'assets/home-carousel/rehabilitacionjardin_2.jpg',
      imageAlt: '',
      imageTitle: 'Rotary Pinta México',
      imageContent: `Con gran entusiasmo el Club Rotario #Mante 6942 llevó a cabo en el jardín de niños Juan Jacobo Rousseau , una actividad para lograr  la rehabilitación de pintura de 3 aulas ( interior y exterior), un desayunador y los juegos metálicos del jardín de niños.
      En el marco del proyecto #RotaryPintaMéxico, se beneficiaron a 35 estudiantes de este preescolar ubicado en el ejido Cuauhtémoc municipio de El Mante.`,
    },
    {
      imageSrc: 'assets/home-carousel/donacioncubrebocas_1.jpg',
      imageAlt: '',
      imageTitle: 'Donación para tomas de muesta de Covid-19',
      imageContent: `Gracias al esfuerzo conjunto entré el ClubRotarioSanNicolas y nuestro Club Rotario Ciudad Mante, hoy tuvimos a bien hacer la donación de overoles, cubrebocas KN95, caretas, cabinas para toma de muestras, tanques de oxígeno y equipo de aire acondicionado a las diferentes unidades Hospitalarias que atienden  a pacientes con Covid-19.`,
    },
    {
      imageSrc: 'assets/home-carousel/donacioncubrebocas_2.jpg',
      imageAlt: '',
      imageTitle: 'Donación para tomas de muesta de Covid-19',
      imageContent: `Gracias al esfuerzo conjunto entré el ClubRotarioSanNicolas y nuestro Club Rotario Ciudad Mante, hoy tuvimos a bien hacer la donación de overoles, cubrebocas KN95, caretas, cabinas para toma de muestras, tanques de oxígeno y equipo de aire acondicionado a las diferentes unidades Hospitalarias que atienden  a pacientes con Covid-19.`,
    },
    {
      imageSrc: 'assets/home-carousel/visitagobernador_1.jpg',
      imageAlt: '',
      imageTitle: 'Visita de Gobernador Rotario Distrito 4130',
      imageContent: `Con la visita de nuestro Gobernador Rotario del Distrito 4130 Enrique Brooks y su esposa Astryd de Brooks el Club Rotario Mante dió formalidad a su cambio de mesa directiva.
      Nuestro distinguido visitante reconoció el trabajo realizado por nuestro past president Roberto Ramírez Cruz y dió formal protesta a la nueva directiva encabezada por Angel Selene Pérez Almazán.`,
    },
    {
      imageSrc: 'assets/home-carousel/R210823_1.JPG',
      imageAlt: '',
      imageTitle: 'Bienvenida a nuevos miembros Hugo y Brenda',
      imageContent:
        'El día 21 de agosto de 2023 se realizó una reunión para dar la bienvenida a los nuevos miembros del Club Rotario Mante #6942 en el distrito 4130, en el cual nos sentimos muy contentos de su llegada.',
    },
    {
      imageSrc: 'assets/home-carousel/R210823_2.JPG',
      imageAlt: '',
      imageTitle: 'Bienvenida a nuevos miembros Hugo y Brenda',
      imageContent:
        'El día 21 de agosto de 2023 se realizó una reunión para dar la bienvenida a los nuevos miembros del Club Rotario Mante #6942 en el distrito 4130, en el cual nos sentimos muy contentos de su llegada.',
    },
  ];

  public faGears = faGears;
  public faBullseye = faBullseye;
  public faEye = faEye;
}
