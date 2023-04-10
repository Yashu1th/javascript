
function bigWord(str){
  var words=str.split(" ");
  var longWord="";
  for(let word of words){
    if(word.length>longWord.length){
      longWord=word;
    }
  }
  return longWord;
}

bigWord("this is a robot generated text")
      
      
