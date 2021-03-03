function shout(string) { 
    return string.toUpperCase() 
}
function whisper(string) { 
    return string.toLowerCase() 
}
function logShout(string) { 
    console.log(string.toUpperCase() ) 
}
function logWhisper(string) { 
    console.log(string.toLowerCase() ) 
}
function sayHiToGrandma(string) { 
  var canthearyou = "I can't hear you!";
  var yesindeed = "YES INDEED!";
  var loveyoutoo = "I love you, too.";
  if (string === string.toLowerCase() ) {
    return canthearyou;
  }
  if (string === string.toUpperCase() ) {
    return yesindeed;
  }
  if (string === "I love you, Grandma.") {
    return loveyoutoo;
    }
  }