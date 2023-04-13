function capitalize(str){
  let words=str.split(" ").map(word=>{
    return word.charAt(0).toUpperCase()+word.slice(1);
   });
  return words.join(" ");
 }
 
 capitalize("this is yaswanth how are you");
  
