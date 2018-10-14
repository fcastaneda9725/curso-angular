import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curso-angular';

  lista = ['elemento1', 'elemento2', 'elemento3', 'elemento4'];

  real = false;

}
