import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

interface Producto {
  nombre: string;
  precio: number;
  disponible: boolean;
}

@Component({
  imports: [NgOptimizedImage],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  nombreTienda = 'Papel y Tinta';
  encargado = 'Ronald';
  numeroSucursal = 1;
  tiendaAbierta = true;
  categorias = ['Cuadernos', 'Escritura', 'Organización'];

  producto: Producto = {
    nombre: 'Cuaderno Terracota',
    precio: 45,
    disponible: true,
  };
}
