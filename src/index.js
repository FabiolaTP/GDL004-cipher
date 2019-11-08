window.onload = () => {
    encodeMessage = document.getElementById("message");
    encodeMessage.addEventListener("click", function(){
        let textMessage = document.getElementById("message").value;
        let choiceNumber = document.getElementById("offset").value; 
        document.getElementById("message").innerHTML = window.cipher.encode(alert(textMessage, choiceNumber)); 
    }); 

}; 