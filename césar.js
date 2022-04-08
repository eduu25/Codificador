function cifraCésar(str,num) {
 num = num % 26
 var lowerCaseStr = str.toLowerCase();
 var alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('');
 var newStr = '';

 for (var i = 0; i < lowerCaseStr.length; i++){
     var letra = lowerCaseStr[i];
     if(letra === ''){
         newStr += letra
        continue;
     }
    var letraIndex = alfabeto.indexOf(letra);
    var newIndex = letraIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26
    if (newIndex < 0) newIndex = newIndex + 26
    if (str[i] === str[i].toUpperCase()){
        newStr += alfabeto[newIndex].toUpperCase();
    }
  else newStr += alfabeto[newIndex]
 }
return newStr
}
console.log(cifraCésar("Teste", 5000))

