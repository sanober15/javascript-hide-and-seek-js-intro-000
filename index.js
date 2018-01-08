function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelectorAll('div.target')[0]

}

function deepestChild(){
 const x = document.getElementById('grand-node')
 for (var i = 0; i < x.length; i++) {
   querySelectorAll(x).innerHTML=(i+1);
 }
}

function increaseRankBy(){

}
