import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular ' + VERSION.major;
  buttonLabel: string = 'CARRINHO';
  buttonSecond: string = 'ADICIONAR A FAVORITOS';
}
