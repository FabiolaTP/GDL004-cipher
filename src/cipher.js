window.cipher = {
  encode: (string, offset) => {
    const encodeMessage = ""; 
    for ( let i = 0; i <string.length; i++) {
      let letters = string[i]; 
      if (letters.match(/[A-Z]/i)) {
        let showMessage = (string.charCodeAt(i)-65+parseInt(offset))%26+65; 

        encodeMessage += string.fromCharCodeAt(showMessage);
        else ( )
  }; 
 
return encodeMessage;      
}; 
