// Crea un proyecto a partir de tu React Starter Kit.
// Crea un formulario con un input de tipo texto.
// Crea la funcionalidad para que cuando la usuaria escriba un algo en el input, se muestre en la consola cuál ha sido la última tecla pulsada.
// Si pulsas intro la página se refrescará. Crea la funcionalidad para evitar que esto pase.

import '../styles/App.css';

function App() {
  const handleInput = (ev) => {
    console.log('El botón ha sido pulsado');
    console.log('El evento lanzado es: ', ev);
    // Crea la funcionalidad para que cuando la usuaria escriba un algo en el input, se muestre en la consola cuál ha sido la última tecla pulsada.
    console.log('La tecla pulsada es: ', ev.key);
  };

  return (
    <div className="App">
      {/* Crea un formulario con un input de tipo texto. */}
      <input type="text" name="text" id="text" onKeyUp={handleInput} />
    </div>
  );
}

export default App;

// SPREAD: LISTADOS, OBJETOS

// OBJETOS:

// { CLAVE1: VALOR, CLAVE2: VALOR2, CLAVE3:VALOR3}

// OBJETO.CLAVE1 = "GKJHKJHKJ";
// VARIABLE = CLAVE2,
// [VARIABLE]: "DAFHDSFQDKFJ";

// hajaja

// dafhjhail

// ahlkafh

// [...hajaja, ...dafhjhail]
