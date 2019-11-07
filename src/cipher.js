window.cipher = {
  encode: (string, offset) => {
    const encodeMessage = ""; 
    for ( let i = 0; i <string.length; i++) {
      let letras = string[i]; 
      if (letras.match(/[A-Z]/i)) {
        let showMessage = (string.charCodeAt(i)-65+parseInt(offset))%26+65; 

        encodeMessage += string.fromCharCode(showMessage); 

  }
  else{
    //si no se cumple agregar sentencia 
  }
return alert(encodeMessage);   
}; 

