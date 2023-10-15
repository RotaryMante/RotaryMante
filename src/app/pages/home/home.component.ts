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
    {
      imageSrc: 'assets/home-carousel/R210823_3.JPG',
      imageAlt: '',
      imageTitle: 'Bienvenida a nuevos miembros Hugo y Brenda',
      imageContent:
        'El día 21 de agosto de 2023 se realizó una reunión para dar la bienvenida a los nuevos miembros del Club Rotario Mante #6942 en el distrito 4130, en el cual nos sentimos muy contentos de su llegada.',
    },
    {
      imageSrc: 'assets/home-carousel/R210823_4.JPG',
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
