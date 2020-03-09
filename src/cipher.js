window.cipher ={
  encode:(offset, string) => {
   let secretMessage="";
   for (var i = 0 ; i < string.length ; i++){
    let interator = string.charCodeAt(i);
       if (interator >= 65 & interator <= 90) {
     secretMessage +=  String.fromCharCode(( interator - 65 + offset) % 26 + 65);

     } if (interator >= 97 && interator <= 122){
       secretMessage +=  String.fromCharCode(( interator - 97 + offset) % 26 + 97);

     }if (interator >= 32 && interator <= 64 || interator ===209 || interator===241){
       secretMessage +=  String.fromCharCode(interator);

     }
   }
   return secretMessage;
 },

decode: (offset, string) => {
let decodeMessage = "";
for(let i = 0; i < string.length; i++){
let interator =string.charCodeAt(i);
if (interator >= 65 & interator <=90){
  decodeMessage += String.fromCharCode(( interator - 90 - offset) % 26 + 90);
} if (interator >= 97 & interator <=122){
  decodeMessage += String.fromCharCode(( interator- 122 - offset) % 26 + 122);
} if(interator >= 32 & interator <=64 || interator ===209 || interator ===241){
  decodeMessage += String.fromCharCode(interator);
}}
return decodeMessage;
}
};
