function toggleRespuesta(preguntaId) {
  const respuesta = document.getElementById(preguntaId);
  if (respuesta.style.display === 'none') {
    respuesta.style.display = 'block';
  } else {
    respuesta.style.display = 'none';
  } 
}