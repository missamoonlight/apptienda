import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Carousel } from 'primeng/carousel';
import { Knob } from 'primeng/knob';
import { Slider } from 'primeng/slider';
import { ToggleSwitch } from 'primeng/toggleswitch';

interface ImagenGaleria {
  fuente: string;
  alternativa: string;
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-galeria',
  imports: [Carousel, FormsModule, Knob, Slider, ToggleSwitch],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css'
})
export class Galeria {
  readonly imagenes: ImagenGaleria[] = [
    {
      fuente:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85',
      alternativa: 'Paisaje montanoso iluminado por el sol',
      titulo: 'Horizonte abierto',
      descripcion: 'Una pausa para mirar lejos.'
    },
    {
      fuente:
        'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=85',
      alternativa: 'Lago rodeado de montanas',
      titulo: 'Reflejos',
      descripcion: 'El paisaje cambia con cada luz.'
    },
    {
      fuente:
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=85',
      alternativa: 'Bosque verde con rayos de sol',
      titulo: 'Entre arboles',
      descripcion: 'Una caminata en calma.'
    },
    {
      fuente:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85',
      alternativa: 'Playa con agua turquesa',
      titulo: 'Marea tranquila',
      descripcion: 'El ritmo del mar al atardecer.'
    }
  ];

  reproduccionAutomatica = true;
  intervalo = 4000;
  escala = 100;
}
