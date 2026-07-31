import { Routes } from '@angular/router';
import { DetalleProducto } from './paginas/detalle-producto/detalle-producto';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./paginas/inicio/inicio').then((archivo) => archivo.Inicio)
  },
  {
    path: 'productos',
    loadComponent: () =>
      import('./paginas/productos/productos').then((archivo) => archivo.Productos)
  },
  {
    path: 'productos/:id',
    loadComponent: () =>
      import('./paginas/detalle-producto/detalle-producto').then(
        (archivo) => archivo.DetalleProducto
      )
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./paginas/contacto/contacto').then((archivo) => archivo.Contacto)
  },
  {
    path: '**',
    loadComponent: () =>
      import('./paginas/no-encontrado/no-encontrado').then(
        (archivo) => archivo.NoEncontrado
      )
  }
];