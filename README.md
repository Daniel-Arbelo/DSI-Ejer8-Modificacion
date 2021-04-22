<h1>Práctica 08 Modificación <h1>
  
<h2> Inroducción <h2>
  <h6>Esta es la el ejercisio planteado en la clase de prácticas del jueves 22 de Abril.<h6>
  
  <h2>Objetivos<h2>
  <h6>El objetivo de esta práctica es crear un menu , que muestre una carta de un restaurante, que contendrá menus ya hechos, y platos sueltos. También existe una clase comanda, donde se guardan los platos que el cliente ha pedido, asi como los menus preestablecidos. Si el cliente lo desea podrá modificar los platos, quitando ingredientes, por si padece algún tipo de alergia, o simplemente no le gusta ese ingrediente.<h6>
    
  <h2>Ejercicio realizado.<h2>
  <h6>Realice una aplicación en TypeScript que realice la compra de un producto y simule la comisión que se aplicará en función del método de pago realizado. Si utiliza la opción de Mastercard tendrá una comisión de un 5%, si utiliza PayPal tendrá una comisión de un 3% y si utiliza Visa será de un 6.5% de comisión. Tengamos en cuenta que los tipos de pago pueden aumentar en el futuro, para ello piense que patrón es el más adecuado para resolver futuros métodos de pago sin tener que cambiar la lógica del cálculo de la comisión.<h6>
    
   <h2>Implementación<h2>
  <h6>He realizado la implementación bastante similar a la práctica 8. Creando una clase Articulo,y una clase Comprajson, que tiene una colección de articulos,y los almacena en un fichero json. Para interactuar con el programa es por comandos, y se van guardando los artículos en el .json
  <h6>
 
  <h2>Comandos<h2>
      <h6>Los comandos permitidos con sus parámetros obligatorios son:<h6>
    <ol>
      <li>node dist/index.js Mastercard --empleado="daniel" --articulo="camiseta" --precio="50"</li>
      <li>node dist/index.js PayPal --empleado="daniel" --articulo="pantalon" --precio="100"</li>
      <li>node dist/index.js Visa --empleado="daniel" --articulo="calcetines" --precio="10"</li>
  </ol>
