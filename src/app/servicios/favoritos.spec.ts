import { FavoritosService } from './favoritos';
import { Producto } from '../modelos/producto';

describe('FavoritosService', () => {
  let service: FavoritosService;

  beforeEach(() => {
    service = new FavoritosService();
  });

  it('agrega un producto una sola vez y cuenta el total', () => {
    const producto: Producto = {
      id: 1,
      nombre: 'Producto prueba',
      descripcion: 'Descripción',
      precio: 100
    };

    service.agregar(producto);
    service.agregar(producto);

    expect(service.total()).toBe(1);
    expect(service.esFavorito(producto.id)).toBeTrue();
    expect(service.favoritos()).toEqual([producto]);
  });

  it('quita un producto favorito correctamente', () => {
    const producto: Producto = {
      id: 2,
      nombre: 'Otro producto',
      descripcion: 'Descripción',
      precio: 250
    };

    service.agregar(producto);
    service.quitar(producto.id);

    expect(service.total()).toBe(0);
    expect(service.esFavorito(producto.id)).toBeFalse();
  });

  it('permite consultar la lista, verificar selección y obtener el total', () => {
    const producto: Producto = {
      id: 3,
      nombre: 'Producto consultado',
      descripcion: 'Descripción',
      precio: 300
    };

    service.agregar(producto);

    expect(service.obtenerFavoritos()).toEqual([producto]);
    expect(service.estaSeleccionado(producto.id)).toBeTrue();
    expect(service.obtenerTotalFavoritos()).toBe(1);
  });
});
