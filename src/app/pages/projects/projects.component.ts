import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  public projectsImgArrayBrownsville = [
    /*
    {
      imageSrc: 'assets/projects/',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    */

    {
      imageSrc: 'assets/projects/brownsville.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent:
        'El Rotary Club Ciudad Mante celebra con orgullo dos hitos importantes en el ejido "Nueva Apolonia" de la colonia Brownsville. La reciente construcción de un aula representa un compromiso continuo con la educación, ofreciendo a los estudiantes un espacio propicio para el aprendizaje y el crecimiento. Además, la festividad del Día de Reyes no solo trajo alegría a los niños, sino que también marcó la inauguración del nuevo salón de clases. Estos logros son posibles gracias al esfuerzo y apoyo de nuestros socios, colaboradores y la cálida comunidad de Nueva Apolonia. Juntos, estamos construyendo sueños y dejando una huella perdurable en el corazón de nuestra comunidad.',
    },
    {
      imageSrc: 'assets/projects/brownsville2.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    {
      imageSrc: 'assets/projects/brownsville3.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    {
      imageSrc: 'assets/projects/brownsville4.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    {
      imageSrc: 'assets/projects/brownsville5.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    {
      imageSrc: 'assets/projects/brownsville6.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    {
      imageSrc: 'assets/projects/brownsville7.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    {
      imageSrc: 'assets/projects/brownsville8.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    {
      imageSrc: 'assets/projects/brownsville9.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    {
      imageSrc: 'assets/projects/brownsville10.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    {
      imageSrc: 'assets/projects/brownsville11.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    {
      imageSrc: 'assets/projects/brownsville12.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    {
      imageSrc: 'assets/projects/brownsville13.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
  ];

  public projectsImgArrayKidsMante = [
    /*
    {
      imageSrc: 'assets/projects/',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    */
    {
      imageSrc: 'assets/projects/NiñosDelMantePrimero.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    {
      imageSrc: 'assets/projects/NiñosDelMantePrimero2.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    {
      imageSrc: 'assets/projects/NiñosDelMantePrimero3.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    {
      imageSrc: 'assets/projects/NiñosDelMantePrimero4.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    {
      imageSrc: 'assets/projects/NiñosDelMantePrimero5.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    {
      imageSrc: 'assets/projects/NiñosDelMantePrimero6.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    {
      imageSrc: 'assets/projects/NiñosDelMantePrimero7.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    {
      imageSrc: 'assets/projects/NiñosDelMantePrimero8.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
  ];

  public projectsImgArrayDentalEquipment = [
    /*
    {
      imageSrc: 'assets/projects/',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    */
    {
      imageSrc: 'assets/projects/EquipoDentalPortatil.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    {
      imageSrc: 'assets/projects/EquipoDentalPortatil2.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    {
      imageSrc: 'assets/projects/EquipoDentalPortatil3.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
  ];

  public projectsImgArrayEveryoneWithComputer = [
    /*
    {
      imageSrc: 'assets/projects/',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    */
    {
      imageSrc: 'assets/projects/TodosConComputadora.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    {
      imageSrc: 'assets/projects/TodosConComputadora2.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
  ];

  public projectsImgArrayRotaryGovernor = [
    /*
    {
      imageSrc: 'assets/projects/',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    */
    {
      imageSrc: 'assets/projects/VisitaGobernadorRotario.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    {
      imageSrc: 'assets/projects/VisitaGobernadorRotario2.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
  ];

  public projectsImgArrayOthers = [
    /*
    {
      imageSrc: 'assets/projects/',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    */
    {
      imageSrc: 'assets/projects/SeminarioRotario.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    {
      imageSrc: 'assets/projects/SeminarioRotario2.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    {
      imageSrc: 'assets/projects/SeminarioRotario6.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    {
      imageSrc: 'assets/projects/SeminarioRotario12.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    {
      imageSrc: 'assets/projects/SeminarioRotario13.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    {
      imageSrc: 'assets/projects/SeminarioRotario14.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    {
      imageSrc: 'assets/projects/EntregaNebulizadores.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    {
      imageSrc: 'assets/projects/ConvivenciaTrabajando.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    {
      imageSrc: 'assets/projects/EmpresarioDelAño.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
    {
      imageSrc: 'assets/projects/Boulder.jpeg',
      imageAlt: '',
      imageTitle: '',
      imageContent: '',
    },
  ];
}
