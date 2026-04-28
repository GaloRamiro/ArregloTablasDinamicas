let arregloIzquierda = [];
let arregloDerecha = [];

function agregarEdad() {
  let valorEdad = recuperarEntero("edad");

  if (!isNaN(valorEdad)) {
    arregloIzquierda.push(valorEdad);
    pintarTablaIzquierda();
    document.getElementById("edad").value = "";
  } else {
    alert("Valor inválido");
  }
}

function pintarTablaIzquierda() {
  let tabla = document.getElementById("tablaIzquierda");
  tabla.innerHTML = "";
  for (let i = 0; i < arregloIzquierda.length; i++) {
    tabla.innerHTML += `
     <tr>
        <td>${arregloIzquierda[i]}  </td>
         <td> <button class="btn-eliminar" onclick="eliminarIzquierdo(${i})">Eliminar</button></td>
         <td><button class="btn-mover" onclick="moverHaciaDerecha(${i})">➜</button></td>
     </tr>
      `;
  }
}

function eliminarIzquierdo(valorIndice) {
  arregloIzquierda.splice(valorIndice, 1);
  pintarTablaIzquierda();
}

function pintarArregloDerecha() {
  let tablaDerecha = document.getElementById("tablaDerecha");
  tablaDerecha.innerHTML = "";
  for (let i = 0; i < arregloDerecha.length; i++) {
    tablaDerecha.innerHTML += `
     <tr>
       <td> <button class="btn-mover" onclick="moverHaciaIzquierda(${i})">⬅</button></td>
       <td>${arregloDerecha[i]}  </td>
       <td><button class="btn-eliminar" onclick="eliminarDerecho(${i})">Eliminar</button></td>
     </tr>
      `;
  }
}

function eliminarDerecho(valorIndice) {
  arregloDerecha.splice(valorIndice, 1);
  pintarArregloDerecha();
}

function moverHaciaDerecha(valorIndice) {
  let moverValor = arregloIzquierda[valorIndice];
  arregloDerecha.push(moverValor);
  arregloIzquierda.splice(valorIndice, 1);
  pintarArregloDerecha();
  pintarTablaIzquierda();
}

function moverHaciaIzquierda(valorIndice) {
  let moverValorIzquierda = arregloDerecha[valorIndice];
  arregloIzquierda.push(moverValorIzquierda);
  arregloDerecha.splice(valorIndice, 1);
  pintarArregloDerecha();
  pintarTablaIzquierda();
}
