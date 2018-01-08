function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelectorAll('div.target')[0]

}

function deepestChild(){

const a = document.getElementById('grand-node')
 for (var i = 0; i < a.length; i++) {
  a.querySelectorAll()[0].innerHTML;
 }
}

function increaseRankBy(){

}
