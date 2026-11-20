import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('muestra la tienda abierta, el producto disponible y las tres categorías', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const pagina = fixture.nativeElement as HTMLElement;

    expect(pagina.querySelector('h1')?.textContent).toBe('Papel y Tinta');
    expect(pagina.textContent).toContain('Tienda abierta');
    expect(pagina.textContent).toContain('Producto disponible');
    expect(pagina.querySelector('#nombre-producto')?.textContent).toBe('Cuaderno Terracota');
    expect(pagina.querySelector('.precio dd')?.textContent).toBe('Bs 45');
    expect(Array.from(pagina.querySelectorAll('li'), (item) => item.textContent)).toEqual([
      'Cuadernos',
      'Escritura',
      'Organización',
    ]);
  });

  it('muestra los cambios de estado, categorías, nombre y precio pedidos en la práctica', async () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    app.tiendaAbierta = false;
    app.categorias = [...app.categorias, 'Accesorios'];
    app.producto = {
      nombre: 'Cuaderno Terracota A5',
      precio: 55,
      disponible: false,
    };
    await fixture.whenStable();
    const pagina = fixture.nativeElement as HTMLElement;

    expect(pagina.textContent).toContain('Tienda cerrada');
    expect(pagina.textContent).toContain('Producto agotado');
    expect(pagina.querySelector('#nombre-producto')?.textContent).toBe('Cuaderno Terracota A5');
    expect(pagina.querySelector('.precio dd')?.textContent).toBe('Bs 55');
    expect(Array.from(pagina.querySelectorAll('li'), (item) => item.textContent)).toEqual([
      'Cuadernos',
      'Escritura',
      'Organización',
      'Accesorios',
    ]);
  });
});
