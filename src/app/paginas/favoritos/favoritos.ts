import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FavoritosService } from '../../servicios/favoritos';
import { Producto } from '../../modelos/producto';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, ButtonModule, DialogModule],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css'
})
export class Favoritos {
  readonly favoritosService = inject(FavoritosService);
  mostrarDialogo = false;
  productoAEliminar: Producto | null = null;

  abrirConfirmacion(producto: Producto): void {
    this.productoAEliminar = producto;
    this.mostrarDialogo = true;
  }

  cancelarEliminacion(): void {
    this.mostrarDialogo = false;
    this.productoAEliminar = null;
  }

  confirmarEliminacion(): void {
    if (!this.productoAEliminar) {
      return;
    }

    this.favoritosService.quitar(this.productoAEliminar.id);
    this.cancelarEliminacion();
  }
}
