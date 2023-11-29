// Partendo dall'esercizio Le Callback - 5, includi la gestione degli errori. Se la funzione di callback genera un errore, catturalo e gestiscilo.
// Modificare la funzione performOperation per gestire l'errore e registrare un messaggio di errore.

  function performOperation(a, b, callback) {
    const result = a + b;
    if (b === 0) {
      const error = new Error("Impossibile eseguire l'operazione con b uguale a zero");
      callback(error, null);
    } else {
      callback(null, result);
    }
  }
  
  function displayResult(error, result) {
    if (error) {
      console.error(error);
    } else {
      console.log(result);
    }
  }

  performOperation(5, 0, displayResult);