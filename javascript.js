fetch('respuestas.json')
  .then(response => response.json())
  .then(data => {
    const respuesta3 = data['3'];
    const respuesta3Elemento = document.getElementById('respuesta3');
    respuesta3Elemento.innerText = respuesta3;
  });       
