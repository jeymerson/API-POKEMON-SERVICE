import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CardComponent} from './components/card/card.component'
import { HttpClientModule } from '@angular/common/http'; // Novo método
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent,
    HttpClientModule, FormsModule,
  ],
  template: `
  <h1 class="title">Aula de services </h1>
  <app-card> </app-card>
  <router-outlet> </router-outlet>

  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'services';
}
