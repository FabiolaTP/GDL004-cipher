let offsetNumber = document.getElementById("offset");
let textMessageEncode = document.getElementById("textAreaEncode");
let textMessageDecode = document.getElementById("textAreaDecode");
let bottonEncode = document.getElementById("submitButton");
let bottonDecode = document.getElementById("decodeCipherButton");
let messageToEncode=  document.getElementById("resultencode").value;
let messageToDecode=  document.getElementById("resultDecode").value;

bottonEncode.addEventListener("click", () => {
    let string= textMessageEncode.value;
    let offset = (parseInt(offsetNumber.value));
    messageToEncode = window.cipher.encode(offset, string);
    document.getElementById("resultencode").innerHTML = messageToEncode;
    }  );

bottonDecode.addEventListener("click", () => {
        let string = textMessageDecode.value;
        let offset = (parseInt(offsetNumber.value));
       messageToDecode = window.cipher.decode(offset, string);
      document.getElementById("resultDecode").innerHTML = messageToDecode;
        }  );
