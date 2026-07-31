import { Injectable, signal } from '@angular/core';
import { Producto } from '../modelos/producto';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private readonly favoritosSignal = signal<Producto[]>([]);

  readonly favoritos = this.favoritosSignal.asReadonly();

  agregar(producto: Producto): void {
    if (this.esFavorito(producto.id)) {
      return;
    }

    this.favoritosSignal.update((lista) => [...lista, producto]);
  }

  quitar(id: number): void {
    this.favoritosSignal.update((lista) => lista.filter((producto) => producto.id !== id));
  }

  toggle(producto: Producto): void {
    if (this.esFavorito(producto.id)) {
      this.quitar(producto.id);
      return;
    }

    this.agregar(producto);
  }

  esFavorito(id: number): boolean {
    return this.favoritosSignal().some((producto) => producto.id === id);
  }

  estaSeleccionado(id: number): boolean {
    return this.esFavorito(id);
  }

  obtenerFavoritos(): Producto[] {
    return this.favoritosSignal();
  }

  obtenerTotalFavoritos(): number {
    return this.total();
  }

  total(): number {
    return this.favoritosSignal().length;
  }
}
