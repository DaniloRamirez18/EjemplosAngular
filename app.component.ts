import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonaComponent } from './persona/persona.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonaComponent, UserComponent, LoginComponent, CalculadoraComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Probando Calculadora';

}
