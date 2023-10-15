import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faInstitution } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  private _formBuilder = inject(FormBuilder);
  public _formGroup!: FormGroup;
  public faFacebook = faFacebook;
  public faInstagram = faInstagram;

  constructor() {
    this.initFormGroup();
  }

  ngOnInit(): void {}

  private initFormGroup() {
    this._formGroup = this._formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  public openMailto() {
    const { name, email, phone, message } = this._formGroup.value;
    window.location.href = `mailto:rotary_mante@gmail.com?subject=Solicitud de información de ${name} con telefono "${phone}" y correo "${email}"&body=${message}`;
  }
}
