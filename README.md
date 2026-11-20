# Práctica Angular: presentación de un producto

Papel y Tinta es una papelería de ejemplo. La página presenta un cuaderno terracota con su precio en bolivianos, la disponibilidad del producto, los datos de la sucursal y las categorías de la tienda.

## Ver la página

```powershell
npm ci
npm start
```

Abre [http://localhost:4200](http://localhost:4200).

## Comprobar los cambios

En `src/app/app.ts`, haz estos cambios con el servidor en marcha. Guarda y observa el resultado.

| Cambio | Resultado en la página |
| --- | --- |
| Cambiar `tiendaAbierta` a `false`. | Aparece «Tienda cerrada». |
| Cambiar `producto.disponible` a `false`. | Aparece «Producto agotado». |
| Agregar `'Accesorios'` al arreglo `categorias`. | Aparece una cuarta categoría. |
| Cambiar el nombre a `'Cuaderno Terracota A5'` y el precio a `55`. | Aparecen el nuevo nombre y «Bs 55». |

Puedes volver a los valores iniciales al terminar. Las pruebas que se ejecutan con `npm test -- --watch=false` comprueban los valores iniciales y la variante con los cuatro cambios.

## Respuestas

1. **¿Qué función cumple `@Component`?** Le indica a Angular que la clase `App` es un componente. Ahí se configura su selector, su plantilla, sus estilos y las dependencias que usa la plantilla.
2. **¿Para qué sirve la interfaz `Producto`?** Define qué datos debe tener un producto y el tipo de cada dato. TypeScript puede avisarme si, por ejemplo, escribo el precio como texto o si olvido indicar la disponibilidad.
3. **¿Qué hace `{{ }}`?** Muestra el valor de una expresión de Angular como texto en el HTML. Por ejemplo, `{{ producto.nombre }}` muestra el nombre guardado en el objeto.
4. **¿Qué diferencia existe entre `@if` y `@for`?** Uso `@if` para decidir qué mostrar según una condición, como el estado de la tienda. Uso `@for` para repetir un elemento por cada valor de una lista, como cada categoría.
5. **¿Por qué `tiendaAbierta` utiliza el tipo `boolean`?** Porque solo representa dos estados. `true` significa que la tienda está abierta y `false` que está cerrada.

## Imagen del producto

La foto de `public/cuaderno-terracota.jpg` se creó con el generador de imágenes integrado.

> Fotografía de catálogo cuadrada de un solo cuaderno A5 de tapa dura color terracota mate, esquinas redondeadas, banda elástica a tono y bordes de papel crema. Visto desde arriba con un leve ángulo, centrado entero sobre una superficie rosa arcilla con luz natural lateral y sombras suaves. Textura de papel y tela visible, sin texto, logos ni otros objetos.
