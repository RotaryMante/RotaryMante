import { Component } from '@angular/core';
import { faBars, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public showButtonNav: boolean = false;

  public faBars = faBars;
  public faEarthAmericas = faEarthAmericas;

  showOrHideNav() {
    if (this.showButtonNav) this.showButtonNav = false;
    else this.showButtonNav = true;
  }
}
