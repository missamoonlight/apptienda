import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraNavegacion } from './compartidos/barra-navegacion/barra-navegacion';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BarraNavegacion],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}